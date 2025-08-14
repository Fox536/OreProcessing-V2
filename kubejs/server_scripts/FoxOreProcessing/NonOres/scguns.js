//----------------------------------------------------------------------------------------------------
// * Processing
//----------------------------------------------------------------------------------------------------
// Namespaces
let Fox 					= Fox || {};
Fox.Processing 				= Fox.Processing || {};
Fox.Processing.Ores 		= Fox.Processing.Ores || {};
Fox.Processing.OresSetup 	= Fox.Processing.OresSetup || {}

// Check if running mods with this ore
let enablingMods = ['scguns'];
if (!Fox.Processing.ShouldLoadModule(enablingMods)) {
	return;
}

// Call Setup Functions
ServerEvents.recipes(event => {
	let namespace = Fox.Processing;

	let oreName 		= '';
	let isMetal			= false;
	let breakAmount 	= 4;

	let data 				= {};
	data.ore				= '';
	data.crushed			= '';
	data.byproduct 			= '';
	
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
		// Remove Crushing - Ore
		namespace.Crushing.RemoveRecipeByInput(event, data.ore);
	}

	//------------------------------------------------
	// Add Recipes
	//------------------------------------------------
	let addRecipes = function(event) {
		// Add Crushing - Ore
		namespace.Crushing.AddRecipe(event, data.ore, data.crushed, breakAmount, data.byproduct, 1, namespace.CrushingGivesNuggets, 1);
	}
	
	
	// Add Setup to OresSetup List
	if (oreName != '') {
		setup(event);
	}
});