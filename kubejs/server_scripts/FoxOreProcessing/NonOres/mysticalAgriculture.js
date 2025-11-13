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
    data.breakAmount		= 4;
    
    return data;
}

// Call Setup Functions
ServerEvents.recipes(event => {
    // Set Mod Name Variable
    let modName = 'mysticalagriculture';
    
	// Check if running mods with this ore
	let enablingMods = [modName];
	if (!Fox.Processing.ShouldLoadModule(enablingMods)) {
		return;
	}
	let namespace = Fox.Processing;

	let oreName 		= '';
	let ores = [];
    let data = {};
    
    // Inferium
    data = OresSetup('inferium', modName);
	data.crushed = modName + ':' + oreName + '_essence';
    ores.push(data);
    
    // Prosperity
    data = OresSetup('prosperity', modName);
	data.crushed = modName + ':' + oreName + '_shard';
    ores.push(data);
    
    // Soulium
    data = OresSetup('soulium', modName);
	data.crushed = modName + ':' + oreName + '_dust';
    ores.push(data);
    
    oreName = 'inferium';
    
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