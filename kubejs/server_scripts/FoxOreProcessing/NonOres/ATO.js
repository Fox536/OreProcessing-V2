//----------------------------------------------------------------------------------------------------
// * Processing
//----------------------------------------------------------------------------------------------------
// Namespaces
let Fox 					= Fox || {};
Fox.Processing 				= Fox.Processing || {};
Fox.Processing.Ores 		= Fox.Processing.Ores || {};
Fox.Processing.OresSetup 	= Fox.Processing.OresSetup || {}

let OresSetup = function(oreName, modName) {
    let data 				= {};
    data.ore				= '#c:ores/' + oreName;
    data.crushed			= modName + ':' + oreName;
    data.byproduct 			= '';
    data.breakAmount		= 3;
    
    return data;
}

// Call Setup Functions
ServerEvents.recipes(event => {
    // Set Mod Name Variable
    let modName = 'alltheores';
    
	// Check if running mods with this ore
	let enablingMods = [modName];
	if (!Fox.Processing.ShouldLoadModule(enablingMods)) {
		return;
	}
	let namespace = Fox.Processing;

	let oreName 		= '';
	let ores = [];
    let data = {};
    
    // Cinnabar
    data = OresSetup('cinnabar', modName);
    data.breakAmount = 6;
    data.byproduct = '';
    ores.push(data);
    
    // Fluorite
    data = OresSetup('fluorite', modName);
    data.breakAmount = 6;
    data.byproduct = '';
    ores.push(data);
    
    // Salt
    data = OresSetup('salt', modName);
    data.breakAmount = 6;
    data.byproduct = '';
    ores.push(data);
    
    // Sulfur
    data = OresSetup('sulfur', modName);
    data.breakAmount = 6;
    data.byproduct = '';
    ores.push(data);
	
	// Ruby
	data = OresSetup('ruby', modName);
    data.breakAmount = 6;
    data.byproduct = '';
    ores.push(data);
	
	// Sapphire
	data = OresSetup('sapphire', modName);
    data.breakAmount = 6;
    data.byproduct = '';
    ores.push(data);
	
	// Peridot
	data = OresSetup('peridot', modName);
    data.breakAmount = 6;
    data.byproduct = '';
    ores.push(data);
	
	// Apatite
    
    oreName = 'cinnabar';
    
    // add others as needed
    /*
    // Crimson Iron
    oreName                 = 'crimson_iron';
	data 				    = {};
    data.ore				= '#c:ores/' + oreName;
	data.crushed			= modName + ':' + oreName;
	data.byproduct 			= '';
	data.breakAmount		= 3;
	ores.push(data);
    */
    
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
		
		// Add Others Here
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
        
		// Add Others Here
	}
	
	
	// Add Setup to OresSetup List
	if (oreName != '') {
		setup(event);
	}
});