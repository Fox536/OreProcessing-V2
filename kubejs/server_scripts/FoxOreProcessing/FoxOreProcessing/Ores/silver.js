//----------------------------------------------------------------------------------------------------
// * Processing
//----------------------------------------------------------------------------------------------------
// Namespaces
let Fox 					= Fox || {};
Fox.Processing 				= Fox.Processing || {};
Fox.Processing.Ores 		= Fox.Processing.Ores || {};
Fox.Processing.OresSetup 	= Fox.Processing.OresSetup || {}

// Call Setup Functions
ServerEvents.recipes(event => {
	let namespace = Fox.Processing;

	let oreName 		= 'silver';
	let isMetal			= true;
	let breakAmount 	= 3;

	let data 				= {};
	data.ore				= '#forge:ores/' + oreName;
	data.raw				= '#forge:raw_materials/' + oreName;
	data.rawBlock			= '#forge:storage_blocks/raw_' + oreName;
	data.ingot 				= '#forge:ingots/' + oreName;
	data.crushed			= 'create:crushed_raw_' + oreName;
	data.nugget				= '#forge:nuggets/' + oreName;
	data.byproduct 			= 'minecraft:redstone';
	data.moltenFluid		= '';
	data.moltenByproduct	= [];
	//data.dust = 'alltheores:' + oreName + '_dust';
	
	//------------------------------------------------
	// Setup
	//------------------------------------------------
	let setup = function(event) {
		removeRecipes(event);
		addRecipes(event);
	}
	
	//------------------------------------------------
	// Remove Recipes
	//------------------------------------------------
	let removeRecipes = function(event) {
		// If item is Metal, and Using ReducedSmelting
		if (isMetal && Fox.Processing.UsingReducedSmelting) {
			// Remove Smelting
			namespace.Smelting.RemoveRecipeByInput(event, data.raw);
			// Remove Blasting
			namespace.Blasting.RemoveRecipeByInput(event, data.raw);
			// Millstone
			namespace.Millstone.RemoveRecipeByInput(event, data.raw);
		}
		
		// Remove Crushing - Ore
		namespace.Crushing.RemoveRecipeByInput(event, data.ore);
		// Remove Crushing - Raw
		namespace.Crushing.RemoveRecipeByInput(event, data.raw);
		// Remove Crushing - Raw Block
		namespace.Crushing.RemoveRecipeByInput(event, data.rawBlock);

		// Remove Washing
		namespace.Washing.RemoveRecipeByInput(event, data.crushed);

		// Remove Melting
		//namespace.Melting.RemoveOreMeltingRecipeByInput(event, data.raw);
		namespace.Melting.RemoveOreMeltingRecipeByInput(event, data.crushed);
		//namespace.Melting.RemoveOreMeltingRecipeByInput(event, data.ore);

		// Remove Molten
		//---
	}

	//------------------------------------------------
	// Add Recipes
	//------------------------------------------------
	let addRecipes = function(event) {
		// If item is Metal, and Using ReducedSmelting
		if (isMetal && Fox.Processing.UsingReducedSmelting) {
			// Add Smelting
			namespace.Smelting.AddRecipe(event, data.raw, data.nugget, Fox.Processing.SmeltingAmount);
			// Add Blasting
			namespace.Blasting.AddRecipe(event, data.raw, data.nugget, Fox.Processing.BlastingAmount);
			// Millstone
			namespace.Millstone.AddRecipe(event, data.raw, data.crushed, Fox.Processing.MillingAmount);
		}
		
		// Add Crushing - Ore
		namespace.Crushing.AddRecipe(event, data.ore, data.crushed, namespace.CrushingAmount * breakAmount, data.byproduct, breakAmount, namespace.CrushingGivesNuggets, breakAmount);
		// Add Crushing - Raw
		namespace.Crushing.AddRecipe(event, data.raw, data.crushed, namespace.CrushingAmount, data.byproduct, 1, namespace.CrushingGivesNuggets, 1);
		// Add Crushing - Raw Block
		namespace.Crushing.AddRecipe(event, data.rawBlock, data.crushed, namespace.CrushingAmount * 9, data.byproduct, 9, namespace.CrushingGivesNuggets, 9);

		// Add Washing
		namespace.Washing.AddRecipe(event, data.crushed, data.nugget, namespace.WashingAmount, data.byproduct, 1, namespace.WashingGivesNuggets, 1)
		
		// Add Melting
		namespace.Melting.AddCrushedOreRecipe(event, data.crushed, data.moltenFluid, namespace.MeltingCrushedToFluidAmount, data.moltenByproduct, Fox.Processing.MeltingRawToByproductAmount, namespace.MeltingTempCoal);

		// Add Molten
		//---
	}
	
	
	// Add Setup to OresSetup List
	if (oreName != '') {
		setup(event);
	}
});