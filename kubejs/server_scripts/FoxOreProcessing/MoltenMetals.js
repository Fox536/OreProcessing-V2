let Fox = Fox || {};
//----------------------------------------------------------------------------------------------------
// * Processing.Molten
//		This is for MoltenMetals Ore Processing
//----------------------------------------------------------------------------------------------------
// Namespaces
Fox.Processing 			= Fox.Processing || {};
Fox.Processing.Molten 	= Fox.Processing.Molten || {};

(function() {
	let namespace = Fox.Processing.Molten;
	let enablingMods = ['molten_metals'];
	Fox.Processing.Molten.EmptyMolds 	= ['molten_metals:ceramic_ingot_mold', 'molten_metals:ingot_mold'];
	Fox.Processing.Molten.EmptyBucket 	= 'minecraft:bucket';
	//Fox.Processing.Molten.EmptyMolds.push('')
	
	namespace.RemoveMixingRecipes = function(event, outputItem) {
		if (!Fox.Processing.ShouldLoadModule(enablingMods)) {
			return;
		}
		event.remove({ 'output': outputItem, 'type': 'create:mixing' });
	}
	namespace.RemoveFluidMixingRecipes = function(event, outputItem) {
		if (!Fox.Processing.ShouldLoadModule(enablingMods)) {
			return;
		}
		event.remove({ 'output': Fluid.of(outputItem), 'type': 'create:mixing' });
	}
	namespace.RemoveFillingRecipes = function(event, inputItems) {
		if (!Fox.Processing.ShouldLoadModule(enablingMods)) {
			return;
		}
		inputItems.forEach(input => {
			event.remove({ 'output': input, 'type': 'create:filling' });
		});
	}
	namespace.RemoveEmptyingRecipes = function(event, inputItems) {
		if (!Fox.Processing.ShouldLoadModule(enablingMods)) {
			return;
		}
		inputItems.forEach(input => {
			event.remove({ 'input': input, 'type': 'create:emptying' });
		});
	}
	namespace.RemoveWashingRecipes = function(event, inputItems) {
		if (!Fox.Processing.ShouldLoadModule(enablingMods)) {
			return;
		}
		inputItems.forEach(input => {
			event.remove({ 'input': input, 'type': 'create:splashing' });
		});
	}
	namespace.RemoveRecipes = function(event, moltenFluid, filledMolds, filledBucket) {
		if (!Fox.Processing.ShouldLoadModule(enablingMods)) {
			return;
		}
		// Remove Molten Mixing Recipes
		namespace.RemoveFluidMixingRecipes(event, moltenFluid);

		// Remove Mold Filling Recipes
		namespace.RemoveFillingRecipes(event, filledMolds);
		// Remove Mold Draining Recipes
		namespace.RemoveEmptyingRecipes(event, filledMolds);

		// Remove Bucket Filling Recipes
		namespace.RemoveFillingRecipes(event, [filledBucket]);
		// Remove Bucket Draining Recipes
		namespace.RemoveEmptyingRecipes(event, [filledBucket]);

		// Remove Mold Washing Recipes
		namespace.RemoveWashingRecipes(event, filledMolds)
		
	}
	
	// (event, rawOre, crushedOre, moltenFluid, filledMolds, filledBucket)
	namespace.AddRecipes = function(event, moltenFluid, filledMolds, filledBucket, ingotOutput) {
		if (!Fox.Processing.ShouldLoadModule(enablingMods)) {
			return;
		}
		// Add Mold Filling Recipes
		namespace.AddFillingMoldsRecipe(event, moltenFluid, filledMolds);
		// Add Mold Draining Recipes
		namespace.AddEmptyingMoldsRecipe(event, moltenFluid, filledMolds);
		
		// Add Bucket Filling Recipes
		//namespace.AddFillingBucketRecipe(event, moltenFluid, filledBucket);
		// Add Bucket Draining Recipes
		//namespace.AddEmptyingBucketRecipe(event, moltenFluid, filledBucket);
		
		// Add Mold Washing Recipes
		namespace.AddSplashingMoldRecipe(event, filledMolds, ingotOutput);
		
		if (Platform.isLoaded('tconstruct')) {
			namespace.AddFillingCopperCanRecipe(event, moltenFluid);
			namespace.AddEmptyingCopperCanRecipe(event, moltenFluid);
		}
		
	}
	namespace.AddMixingRecipe = function(event, inputItems, outputFluid, outputFluidAmount) {
		if (!Fox.Processing.ShouldLoadModule(enablingMods)) {
			return;
		}
		let recipe = {}
		recipe['type'] 				= 'create:mixing';
		recipe['heatRequirement'] 	= 'heated';
		recipe['ingredients'] 		= [];
		inputItems.forEach(input => {
			let inputData = { "item": input };
			if (input[0] == "#") {
				inputData = { "tag": input.slice(1) };
			}
			recipe['ingredients'].push(inputData);
		});
		recipe['results'] 			= {};
		recipe['results']['fluid'] 	= outputFluid;
		recipe['results']['amount'] = outputFluidAmount;
		
		event.custom(recipe);
	}
	namespace.AddFillingMoldsRecipe = function(event, moltenFluid, filledMolds) {
		if (!Fox.Processing.ShouldLoadModule(enablingMods)) {
			return;
		}
		let emptyMolds = Fox.Processing.Molten.EmptyMolds;
		for (let i = 0; i < emptyMolds.length; i++) {
			let recipe = {}
			recipe['type'] 				= 'create:filling';
			recipe['ingredients'] 		= [];
			recipe['ingredients'].push({ "item": emptyMolds[i] });
			recipe['ingredients'].push({ "fluid": moltenFluid, 'amount': 90 });
			recipe['results'] 			= [];
			recipe['results'].push({ 'item': filledMolds[i] });
			
			event.custom(recipe);
		}
	}
	namespace.AddEmptyingMoldsRecipe = function(event, moltenFluid, filledMolds) {
		if (!Fox.Processing.ShouldLoadModule(enablingMods)) {
			return;
		}
		let emptyMolds = Fox.Processing.Molten.EmptyMolds;
		for (let i = 0; i < emptyMolds.length; i++) {
			let recipe = {}
			recipe['type'] 				= 'create:emptying';
			recipe['ingredients'] 		= [];
			recipe['ingredients'].push({ "item": filledMolds[i] });
			recipe['results'] 			= [];
			recipe['results'].push({ 'item': emptyMolds[i] })
			recipe['results'].push({ 'fluid': moltenFluid, 'amount': 90 })
			
			event.custom(recipe);
		}
	}
	
	namespace.AddFillingBucketRecipe = function(event, moltenFluid, filledBucket) {
		if (!Fox.Processing.ShouldLoadModule(enablingMods)) {
			return;
		}
		let recipe = {}
		recipe['type'] 				= 'create:filling';
		recipe['ingredients'] 		= [];
		recipe['ingredients'].push({ 'item': Fox.Processing.Molten.EmptyBucket });
		recipe['ingredients'].push({ 'fluid': moltenFluid, 'amount': 1000 });
		recipe['results'] 			= [];
		recipe['results'].push({ 'item': filledBucket });
		
		event.custom(recipe);
	}
	namespace.AddEmptyingBucketRecipe = function(event, moltenFluid, filledBucket) {
		if (!Fox.Processing.ShouldLoadModule(enablingMods)) {
			return;
		}
		let recipe = {}
		recipe['type'] 				= 'create:emptying';
		recipe['ingredients'] 		= [];
		recipe['ingredients'].push({ "item": filledBucket });
		recipe['results'] 			= [];
		recipe['results'].push({ 'item': Fox.Processing.Molten.EmptyBucket })
		recipe['results'].push({ 'fluid': moltenFluid, 'amount': 1000 })
		
		event.custom(recipe);
	}
	
	namespace.AddSplashingMoldRecipe = function(event, filledMolds, ingotOutput) {
		if (!Fox.Processing.ShouldLoadModule(enablingMods)) {
			return;
		}
		let emptyMolds = Fox.Processing.Molten.EmptyMolds;
		for (let i = 0; i < emptyMolds.length; i++) {
			let recipe = {};
			recipe['type'] 				= 'create:splashing';
			recipe['ingredients'] 		= [];
			recipe['ingredients'].push({ "item": filledMolds[i] });
			recipe['results'] 			= [];
			recipe['results'].push({ 'item': ingotOutput });
			if (i < 1) {
				recipe['results'].push({ 'item': emptyMolds[i], 'chance': 0.80 });
			} else {
				recipe['results'].push({ 'item': emptyMolds[i] });
			}

			event.custom(recipe);
		}
	}
	
	namespace.AddFillingCopperCanRecipe = function(event, moltenFluid) {
		if (!Fox.Processing.ShouldLoadModule(enablingMods)) {
			return;
		}
		let recipe = {}
		recipe['type'] 				= 'create:filling';
		recipe['ingredients'] 		= [];
		recipe['ingredients'].push({ 'item': 'tconstruct:copper_can' });
		recipe['ingredients'].push({ 'fluid': moltenFluid, 'amount': 90 });
		recipe['results'] 			= [];
		recipe['results'].push({ 'item': 'tconstruct:copper_can', 'nbt':{'fluid': moltenFluid}});
		
		event.custom(recipe);
	}
	namespace.AddEmptyingCopperCanRecipe = function(event, moltenFluid) {
		if (!Fox.Processing.ShouldLoadModule(enablingMods)) {
			return;
		}
		let recipe = {}
		recipe['type'] 				= 'create:filling';
		recipe['ingredients'] 		= [];
		recipe['ingredients'].push({ 'item': 'tconstruct:copper_can', 'nbt':{'fluid': moltenFluid}});
		recipe['ingredients'].push();
		recipe['results'] 			= [];
		recipe['results'].push({ 'item': 'tconstruct:copper_can' });
		recipe['results'].push({ 'fluid': moltenFluid, 'amount': 90 });
		
		event.custom(recipe);
	}
	
	// In Ore Definitions Use:
		// Fox.Processing.Molten.RemoveRecipes(event, moltenFluid, filledMolds, filledBucket)
		// Fox.Processing.Molten.AddRecipes(event, moltenFluid, filledMolds, filledBucket, ingotOutput)
		// Add Molten Mixing Recipes - Raw
		// Fox.Processing.Molten.AddMixingRecipe(event, rawOre, outputFluid, outputFluidAmount)
		// Add Molten Mixing Recipes - Crushed
		// Fox.Processing.Molten.AddMixingRecipe(event, crushedOre, outputFluid, outputFluidAmount)
	
}());