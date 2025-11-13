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
    let modName = 'silentgear';
    
	// Check if running mods with this ore
	let enablingMods = [modName];
	if (!Fox.Processing.ShouldLoadModule(enablingMods)) {
		return;
	}
	let namespace = Fox.Processing;

	let oreName 		= '';
	let ores = [];
    let data = {};
    
	// Crimson Iron
    data = OresSetup('crimson_iron', modName);
    ores.push(data);
    
	// Azure Silver
    data = OresSetup('azure_silver', modName);
    ores.push(data);
    
	// Bort
    data = OresSetup('bort', modName);
    data.breakAmount = 4;
    ores.push(data);
    
    
    oreName = 'crimson_iron';
    
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