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

	let oreName 		= '';
	
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
		// Add Melting
		namespace.Melting.AddCrushedOreRecipe(event, data.crushed, data.moltenFluid, namespace.MeltingRawToFluidAmount, data.moltenByproduct, Fox.Processing.MeltingRawToByproductAmount, namespace.MeltingTempCoal);

		// Add Molten
		//---
	}
	
	
	// Add Setup to OresSetup List
	if (oreName != '') {
		setup(event);
	}
});