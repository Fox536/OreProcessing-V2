//----------------------------------------------------------------------------------------------------
// * Processing
//----------------------------------------------------------------------------------------------------
// Namespaces
let Fox 					= Fox || {};
Fox.Processing 				= Fox.Processing || {};
Fox.Processing.Ores 		= Fox.Processing.Ores || {};
Fox.Processing.OresSetup 	= Fox.Processing.OresSetup || {}

let OresSetup = function(oreName, modName) {
    data 					= {};
	data.ore				= '#c:ores/' + oreName;
	data.crushed			= modName + ':' + oreName;
	data.byproduct 			= '';
	data.breakAmount		= 4;
    return data;
}

// Call Setup Functions
ServerEvents.recipes(event => {
    // Set Mod Name Variable
    let modName = 'forbidden_arcanus';
    
	// Check if running mods with this ore
	let enablingMods = [modName];
	if (!Fox.Processing.ShouldLoadModule(enablingMods)) {
		return;
	}
	let namespace = Fox.Processing;

	// Data Setup
	let oreName = '';
	let ores 	= [];
	let data 	= {};
	
	// Arcane Crystal
	data = OresSetup('arcane_crystal', modName);
	data.byproduct = modName + ':xpetrified_orb';
    ores.push(data);
	
	// Rune
	data = OresSetup('rune', modName);
	data.byproduct = modName + ':xpetrified_orb';
    ores.push(data);
	
	// Stella Arcanum
	data = OresSetup('stella_arcanum', modName);
	data.crushed = modName + ':stellarite_piece';
	data.byproduct = modName + ':xpetrified_orb';
    ores.push(data);
	
	// Stella Arcanum
	data = OresSetup('xpetrified_ore', modName);
	data.crushed = modName + ':xpetrified_orb';
	data.breakAmount = 6;
	ores.push(data);
	
	oreName = 'arcane_crystal';
	
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
		// Remove Crushing Recipes
		for (let i = 0; i < ores.length; i++) {
			data = ores[i];
			namespace.Crushing.RemoveRecipeByInput(event, data.ore);
		}
	}

	//------------------------------------------------
	// Add Recipes
	//------------------------------------------------
	let addRecipes = function(event) {
		// Add Crushing Recipes
		for (let i = 0; i < ores.length; i++) {
			data = ores[i];
			namespace.Crushing.AddRecipe(event, data.ore, data.crushed, data.breakAmount, data.byproduct, 1, namespace.CrushingGivesNuggets, 1);
		}
	}
	
	
	// Add Setup to OresSetup List
	if (oreName != '') {
		setup(event);
	}
});