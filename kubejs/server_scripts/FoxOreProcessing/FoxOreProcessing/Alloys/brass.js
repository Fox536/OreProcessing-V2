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

	let oreName 		= 'brass';
	
	let data 				= {};
	data.ingot 				= '#forge:ingots/' + oreName;
	data.crushed			= 'create:crushed_raw_' + oreName;
	data.moltenFluid		= 'tconstruct:molten_' + oreName;
	data.moltenMolds 		= ['molten_metals:molten_' + oreName + '_ceramic_ingot_mold', 'molten_metals:molten_' + oreName + '_ingot_mold'];
	data.moltenBucket 		= 'tconstruct:molten_' + oreName + '_bucket';
	
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
		// Remove Molten - Main
		namespace.Molten.RemoveRecipes(event, data.moltenFluid, data.moltenMolds, data.moltenBucket);
		// Remove Molten - Extra Fluids
		namespace.Molten.RemoveFluidMixingRecipes(event, 'molten_metals:molten_' + oreName);
	}

	//------------------------------------------------
	// Add Recipes
	//------------------------------------------------
	let addRecipes = function(event) {
		// Add Molten
		namespace.Molten.AddRecipes(event, data.moltenFluid, data.moltenMolds, data.moltenBucket, data.ingot)
		// Add Molten Mixing Recipes - Ingot
		namespace.Molten.AddMixingRecipe(event, ['#forge:ingots/copper', '#forge:ingots/zinc'], data.moltenFluid, 180);
		// Add Molten Mixing Recipes - Crushed
		namespace.Molten.AddMixingRecipe(event, ['create:crushed_raw_copper', 'create:crushed_raw_zinc'], data.moltenFluid, 360);
	}
	
	
	// Add Setup to OresSetup List
	if (oreName != '') {
		setup(event);
	}
});