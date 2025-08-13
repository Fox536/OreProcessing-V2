let Fox = Fox || {};
//----------------------------------------------------------------------------------------------------
// * Processing.Melting
//		This is for TCon Item Melting
//----------------------------------------------------------------------------------------------------
// Namespaces
Fox.Processing 			= Fox.Processing || {};
Fox.Processing.Molten 	= Fox.Processing.Molten || {};

(function() {
	let namespace = Fox.Processing.Molten;
	Fox.Processing.Molten.EmptyMolds 	= [];
	Fox.Processing.Molten.EmptyBucket 	= '';
	//Fox.Processing.Molten.EmptyMolds.push('')
	
	namespace.RemoveMixingRecipes = function(event, outputItem) {
		event.remove({ 'output': outputItem, 'type': 'create:mixing' });
	}

	namespace.RemoveFillingRecipes = function(event, inputItems) {
		inputItems.array.forEach(input => {
			event.remove({ 'input': input, 'type': 'create:filling' });
		});
	}
	namespace.RemoveEmptyingRecipes = function(event, inputItems) {
		inputItems.array.forEach(input => {
			event.remove({ 'input': input, 'type': 'create:emptying' });
		});
	}
	namespace.RemoveWashingRecipes = function(event, inputItems) {
		inputItems.array.forEach(input => {
			event.remove({ 'input': input, 'type': 'create:splashing' });
		});
	}
	namespace.RemoveRecipes = function(event, moltenFluid, filledMolds, filledBucket) {
		// Remove Molten Mixing Recipes
		namespace.RemoveMixingRecipes(event, moltenFluid);

		// Remove Mold Filling Recipes
		namespace.RemoveFillingRecipes(event, filledMolds);
		// Remove Mold Draining Recipes
		namespace.RemoveEmptyingRecipes(event, filledMolds);

		// Remove Bucket Filling Recipes
		namespace.RemoveFillingRecipes(event, filledBucket);
		// Remove Bucket Draining Recipes
		namespace.RemoveEmptyingRecipes(event, filledBucket);

		// Remove Mold Washing Recipes
		namespace.RemoveEmptyingRecipes(event, filledMolds);
		
	}
	
	// (event, rawOre, crushedOre, moltenFluid, filledMolds, filledBucket)
	namespace.AddRecipes = function(event, moltenFluid, filledMolds, filledBucket, ingotOutput) {
		// Add Mold Filling Recipes
		namespace.AddFillingMoldsRecipe(event, moltenFluid, filledMolds);
		// Add Mold Draining Recipes
		namespace.AddEmptyingMoldsRecipe(event, moltenFluid, filledMolds);
		
		// Add Bucket Filling Recipes
		namespace.AddFillingBucketRecipe(event, moltenFluid, filledBucket);
		// Add Bucket Draining Recipes
		namespace.AddEmptyingBucketRecipe(event, moltenFluid, filledBucket);
		
		// Add Mold Washing Recipes
		namespace.AddSplashingMoldRecipe(event, filledMolds, ingotOutput);
		
	}
	namespace.AddMixingRecipe = function(event, inputItems, outputFluid, outputFluidAmount) {
		let recipe = {}
		recipe['type'] 				= 'create:mixing';
		recipe['heatRequirements'] 	= 'heated';
		recipe['ingredients'] 		= [];
		inputItems.foreach(input => {
			let inputData = { "item": input };
			if (input[0] == "#") {
				inputData = { "tag": input.slice(0) };
			}
			recipe['ingredients'].push(inputData);
		});
		recipe['results'] 			= {};
		recipe['results']['fluid'] 	= outputFluid;
		recipe['results']['amount'] = outputFluidAmount;
		
		event.custom(recipe);
	}
	namespace.AddFillingMoldsRecipe = function(event, moltenFluid, filledMolds) {
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
		let recipe = {}
		recipe['type'] 				= 'create:filling';
		recipe['ingredients'] 		= [];
		recipe['ingredients'].push({ "item": Fox.Processing.Molten.EmptyBucket });
		recipe['ingredients'].push({ "fluid": moltenFluid, 'amount': 1000 });
		recipe['results'] 			= [];
		recipe['results'].push({ 'item': filledBucket });
		
		event.custom(recipe);
	}
	namespace.AddEmptyingBucketRecipe = function(event, moltenFluid, filledBucket) {
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
		let emptyMolds = Fox.Processing.Molten.EmptyMolds;
		for (let i = 0; i < emptyMold.length; i++) {
			let recipe = {};
			recipe['type'] 				= 'create:splashing';
			recipe['ingredients'] 		= [];
			recipe['ingredients'].push({ "item": filledMolds[i] });
			recipe['results'] 			= [];
			recipe['results'].push({ 'item': ingotOutput });
			if (i < 1) {
				recipe['results'].push({ 'item': emptyMolds[i], 'chance': 0.50 });
			} else {
				recipe['results'].push({ 'item': emptyMolds[i] });
			}

			event.custom(recipe);
		}
	}
	
	// In Ore Definitions Use:
		// Fox.Processing.Molten.RemoveRecipes(event, moltenFluid, filledMolds, filledBucket)
		// Fox.Processing.Molten.AddRecipes(event, moltenFluid, filledMolds, filledBucket, ingotOutput)
		// Add Molten Mixing Recipes - Raw
		// Fox.Processing.Molten.AddMixingRecipe(event, rawOre, outputFluid, outputFluidAmount)
		// Add Molten Mixing Recipes - Crushed
		// Fox.Processing.Molten.AddMixingRecipe(event, crushedOre, outputFluid, outputFluidAmount)
	
}());