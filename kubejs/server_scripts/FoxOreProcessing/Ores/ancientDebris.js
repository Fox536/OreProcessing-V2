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
	// Check if running mods with this ore
	let enablingMods = ['create'];
	if (!Fox.Processing.ShouldLoadModule(enablingMods)) {
		return;
	}
	let namespace = Fox.Processing;

	let oreName 		= 'netherite_scrap';
	let breakAmount 	= 1;

	let data 					= {};
	data.ore					= '#forge:ores/' + oreName;
	data.raw					= '#forge:raw_materials/' + oreName;
	data.rawBlock				= '#forge:storage_blocks/raw_' + oreName;
	data.ingot 					= '#forge:ingots/' + oreName;
	data.crushed				= 'kubejs:crushed_raw_ancient_debris';
	data.nugget					= '#forge:nuggets/' + oreName;
	data.byproduct 				= '';
	data.meltingFluid			= 'tconstruct:molten_debris';//'#forge:molten_' + oreName;
	data.moltenFluid			= data.meltingFluid;
	data.moltenFluidToRemove 	= ['molten_metals:molten_' + oreName]
	data.moltenByproduct		= [];
	data.moltenMolds 			= ['molten_metals:molten_' + 'netherite' + '_ceramic_ingot_mold', 'molten_metals:molten_' + 'netherite' + '_ingot_mold'];
	data.moltenBucket 			= 'tconstruct:molten_' + oreName + '_bucket';
	
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
		// Millstone
		namespace.Millstone.RemoveRecipeByInput(event, data.ore);
		
		// Remove Crushing - Ore
		namespace.Crushing.RemoveRecipeByInput(event, data.ore);
		
		// Remove Washing
		namespace.Washing.RemoveRecipeByInput(event, data.crushed);

		// Remove Melting
		//namespace.Melting.RemoveOreMeltingRecipeByInput(event, data.raw);
		namespace.Melting.RemoveOreMeltingRecipeByInput(event, data.crushed);
		//namespace.Melting.RemoveOreMeltingRecipeByInput(event, data.ore);

		// Remove Molten
		// Remove Molten - Main
		namespace.Molten.RemoveRecipes(event, data.moltenFluid, data.moltenMolds, data.moltenBucket);
		// Remove Molten - Extra Fluids
		data.moltenFluidToRemove.forEach(fluid => {
			namespace.Molten.RemoveFluidMixingRecipes(event, fluid);	
		});
	}

	//------------------------------------------------
	// Add Recipes
	//------------------------------------------------
	let addRecipes = function(event) {
		// Millstone
		namespace.Millstone.AddRecipe(event, data.ore, data.crushed, 1);
		
		// Add Crushing - Ore
		namespace.Crushing.AddRecipe(event, data.ore, data.crushed, 2, data.byproduct, breakAmount, namespace.CrushingGivesNuggets, breakAmount);
		
		// Add Washing
		namespace.Washing.AddRecipeForCrushedOre(event, data.crushed, data.nugget, namespace.WashingAmount, data.byproduct, 1, namespace.WashingGivesNuggets, 1)
		
		// Add Melting
		namespace.Melting.AddCrushedOreRecipe(event, data.crushed, data.moltenFluid, namespace.MeltingCrushedToFluidAmount, data.moltenByproduct, Fox.Processing.MeltingRawToByproductAmount, namespace.MeltingTempLava);
		
		// Add Molten
		namespace.Molten.AddRecipes(event, data.moltenFluid, data.moltenMolds, data.moltenBucket, data.ingot);
		// Add Molten Mixing Recipes - Raw
		namespace.Molten.AddMixingRecipe(event, [data.raw], data.moltenFluid, 90);
		// Add Molten Mixing Recipes - Crushed
		namespace.Molten.AddMixingRecipe(event, [data.crushed], data.moltenFluid, 180);
	}
	
	
	// Add Setup to OresSetup List
	if (oreName != '') {
		setup(event);
	}
});