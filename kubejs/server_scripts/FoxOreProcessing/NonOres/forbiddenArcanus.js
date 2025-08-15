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
	let enablingMods = ['forbidden_arcanus'];
	if (!Fox.Processing.ShouldLoadModule(enablingMods)) {
		return;
	}
	let namespace = Fox.Processing;

	let oreName 		= '';
	let isMetal			= false;
	let breakAmount 	= 4;

	let data 				= {};
	data.ore				= '';
	data.crushed			= '';
	data.byproduct 			= '';
	let rune = data;
	// add others as needed
	
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
		data = rune;
		namespace.Crushing.RemoveRecipeByInput(event, data.ore);
		
		// Add Others Here
	}

	//------------------------------------------------
	// Add Recipes
	//------------------------------------------------
	let addRecipes = function(event) {
		// Add Crushing - Ore
		data = rune;
		namespace.Crushing.AddRecipe(event, data.ore, data.crushed, breakAmount, data.byproduct, 1, namespace.CrushingGivesNuggets, 1);
		
		// Add Others Here
	}
	
	
	// Add Setup to OresSetup List
	if (oreName != '') {
		setup(event);
	}
});