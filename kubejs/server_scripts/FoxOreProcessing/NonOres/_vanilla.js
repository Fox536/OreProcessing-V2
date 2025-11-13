//----------------------------------------------------------------------------------------------------
// * Processing
//----------------------------------------------------------------------------------------------------
// Namespaces
let Fox 					= Fox || {};
Fox.Processing 				= Fox.Processing || {};
Fox.Processing.Ores 		= Fox.Processing.Ores || {};
Fox.Processing.OresSetup 	= Fox.Processing.OresSetup || {}

let OresSetup = function(oreName) {
    let data 				= {};
    data.ore				= '#c:ores/' + oreName;
	data.crushed			= '#c:gems/' + oreName;
    data.byproduct 			= '';
    data.breakAmount		= 3;    
    
    return data;
}

// Call Setup Functions
ServerEvents.recipes(event => {
	// Check if running mods with this ore
	let enablingMods = ['create'];
	if (!Fox.Processing.ShouldLoadModule(enablingMods)) {
		return;
	}
	let namespace = Fox.Processing;
	
	// Setup Data
	let oreName = 'coal';
	let data 	= {};
	let ores 	= {};
	
	// Coal
	data 				= OresSetup('coal');
	data.crushed 		= 'minecraft:' + oreName;
	data.breakAmount	= 6;
    ores.push(data);
	
	// Redstone
	data 				= OresSetup('redstone');
	data.crushed 		= '#c:dusts/' + oreName;
	data.breakAmount	= 10;
	ores.push(data);
	
	// Lapis
	data 				= OresSetup('lapis');
	data.breakAmount	= 24;
	ores.push(data);
	
	// Diamond
	data 				= OresSetup('diamond');
	data.breakAmount	= 4;
	ores.push(data);
	
	// Emerald
	data 				= OresSetup('emerald');
	data.breakAmount	= 4;
	ores.push(data);
	
	// Quartz
	data 				= OresSetup('quartz');
	data.breakAmount	= 6;
	ores.push(data);
	
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
		for (let i = 0; i < ores.length; i++) {
			data = ores[i];
			namespace.Crushing.RemoveRecipeByInput(event, data.ore);
		}
	}

	//------------------------------------------------
	// Add Recipes
	//------------------------------------------------
	let addRecipes = function(event) {
		for (let i = 0; i < ores.length; i++) {
			data = ores[i];
			// Add Crushing - Ore
			namespace.Crushing.AddRecipe(event, data.ore, data.crushed, data.breakAmount, data.byproduct, 1, namespace.CrushingGivesNuggets, 1);
		}
	}
	
	// Add Setup to OresSetup List
	if (oreName != '') {
		setup(event);
	}
});