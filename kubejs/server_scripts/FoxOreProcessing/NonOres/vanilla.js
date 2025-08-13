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

	let oreName 		= 'coal';
	
	// Setup Data
	let data 				= {};
	
	// Coal
	data 					= {};
	data.ore				= '#minecraft:coal_ores';
	data.crushed			= 'minecraft:coal';
	data.byproduct 			= '';
	data.breakAmount		= 4;
	let coal = data;
	
	// Redstone
	data 					= {};
	data.ore				= '';
	data.crushed			= 'minecraft:redstone';
	data.byproduct 			= '';
	data.breakAmount		= 4;
	let redstone = data;
	
	// Lapis
	data 					= {};
	data.ore				= '';
	data.crushed			= 'minecraft:lapis_lazuli';
	data.byproduct 			= '';
	data.breakAmount		= 4;
	let lapis = data;
	
	// Diamond
	data 					= {};
	data.ore				= '';
	data.crushed			= 'minecraft:';
	data.byproduct 			= '';
	data.breakAmount		= 4;
	let diamond = data;
	
	// Emerald
	data 					= {};
	data.ore				= '';
	data.crushed			= 'minecraft:';
	data.byproduct 			= '';
	data.breakAmount		= 4;
	let emerald = data;
	
	// Quartz
	data 					= {};
	data.ore				= '';
	data.crushed			= 'minecraft:';
	data.byproduct 			= '';
	data.breakAmount		= 4;
	let quartz = data;
	
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
		removeRecipe_Coal(event);
		removeRecipe_Redstone(event);
		removeRecipe_Lapis(event);
		removeRecipe_Diamond(event);
		removeRecipe_Emerald(event);
		removeRecipe_Quartz(event);
	}
	let removeRecipe_Coal = function(event) {
		// Remove Crushing - Ore
		namespace.Crushing.RemoveRecipeByInput(event, data.ore);
	}
	let removeRecipe_Redstone = function(event) {
		
	}
	let removeRecipe_Lapis = function(event) {
		
	}
	let removeRecipe_Diamond = function(event) {
		
	}
	let removeRecipe_Emerald = function(event) {
		
	}
	let removeRecipe_Quartz = function(event) {
		
	}

	//------------------------------------------------
	// Add Recipes
	//------------------------------------------------
	let addRecipes = function(event) {
		addRecipe_Coal(event);
		addRecipe_Redstone(event);
		addRecipe_Lapis(event);
		addRecipe_Diamond(event);
		addRecipe_Emerald(event);
		addRecipe_Quartz(event);
	}
	let addRecipe_Coal = function(event) {
		let data = coal;
		// Add Crushing - Ore
		namespace.Crushing.AddRecipe(event, data.ore, data.crushed, data.breakAmount, data.byproduct, 1, namespace.CrushingGivesNuggets, 1);
	}
	let addRecipe_Redstone = function(event) {
		
	}
	let addRecipe_Lapis = function(event) {
		
	}
	let addRecipe_Diamond = function(event) {
		
	}
	let addRecipe_Emerald = function(event) {
		
	}
	let addRecipe_Quartz = function(event) {
		
	}
	
	// Add Setup to OresSetup List
	if (oreName != '') {
		setup(event);
	}
});
