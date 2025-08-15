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
	let enablingMods = ['create'];
	if (!Fox.Processing.ShouldLoadModule(enablingMods)) {
		return;
	}
	let namespace = Fox.Processing;

	let oreName 		= 'coal';
	
	// Setup Data
	let data 				= {};
	
	// Coal
	oreName 				= 'coal';
	data 					= {};
	data.ore				= '#forge:ores/' + oreName;
	data.crushed			= 'minecraft:' + oreName;
	data.byproduct 			= '';
	data.breakAmount		= 6;
	let coal = data;
	
	// Redstone
	oreName 				= 'redstone';
	data 					= {};
	data.ore				= '#forge:ores/' + oreName;
	data.crushed			= '#forge:dusts/' + oreName;
	data.byproduct 			= '';
	data.breakAmount		= 10;
	let redstone = data;
	
	// Lapis
	oreName 				= 'lapis';
	data 					= {};
	data.ore				= '#forge:ores/' + oreName;
	data.crushed			= '#forge:gems/' + oreName;
	data.byproduct 			= '';
	data.breakAmount		= 24;
	let lapis = data;
	
	// Diamond
	oreName 				= 'diamond';
	data 					= {};
	data.ore				= '#forge:ores/' + oreName;
	data.crushed			= '#forge:gems/' + oreName;
	data.byproduct 			= '';
	data.breakAmount		= 4;
	let diamond = data;
	
	// Emerald
	oreName 				= 'emerald';
	data 					= {};
	data.ore				= '#forge:ores/' + oreName;
	data.crushed			= '#forge:gems/' + oreName;
	data.byproduct 			= '';
	data.breakAmount		= 4;
	let emerald = data;
	
	// Quartz
	oreName 				= 'quartz';
	data 					= {};
	data.ore				= '#forge:ores/' + oreName;
	data.crushed			= '#forge:gems/' + oreName;
	data.byproduct 			= '';
	data.breakAmount		= 6;
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
		let data = coal;
		// Remove Crushing - Ore
		namespace.Crushing.RemoveRecipeByInput(event, data.ore);
	}
	let removeRecipe_Redstone = function(event) {
		let data = redstone;
		// Remove Crushing - Ore
		namespace.Crushing.RemoveRecipeByInput(event, data.ore);
	}
	let removeRecipe_Lapis = function(event) {
		let data = lapis;
		// Remove Crushing - Ore
		namespace.Crushing.RemoveRecipeByInput(event, data.ore);
	}
	let removeRecipe_Diamond = function(event) {
		let data = diamond;
		// Remove Crushing - Ore
		namespace.Crushing.RemoveRecipeByInput(event, data.ore);
	}
	let removeRecipe_Emerald = function(event) {
		let data = emerald;
		// Remove Crushing - Ore
		namespace.Crushing.RemoveRecipeByInput(event, data.ore);
	}
	let removeRecipe_Quartz = function(event) {
		let data = quartz;
		// Remove Crushing - Ore
		namespace.Crushing.RemoveRecipeByInput(event, data.ore);
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
		let data = redstone;
		// Add Crushing - Ore
		namespace.Crushing.AddRecipe(event, data.ore, data.crushed, data.breakAmount, data.byproduct, 1, namespace.CrushingGivesNuggets, 1);
	}
	let addRecipe_Lapis = function(event) {
		let data = lapis;
		// Add Crushing - Ore
		namespace.Crushing.AddRecipe(event, data.ore, data.crushed, data.breakAmount, data.byproduct, 1, namespace.CrushingGivesNuggets, 1);
	}
	let addRecipe_Diamond = function(event) {
		let data = diamond;
		// Add Crushing - Ore
		namespace.Crushing.AddRecipe(event, data.ore, data.crushed, data.breakAmount, data.byproduct, 1, namespace.CrushingGivesNuggets, 1);
	}
	let addRecipe_Emerald = function(event) {
		let data = emerald;
		// Add Crushing - Ore
		namespace.Crushing.AddRecipe(event, data.ore, data.crushed, data.breakAmount, data.byproduct, 1, namespace.CrushingGivesNuggets, 1);
	}
	let addRecipe_Quartz = function(event) {
		let data = quartz;
		// Add Crushing - Ore
		namespace.Crushing.AddRecipe(event, data.ore, data.crushed, data.breakAmount, data.byproduct, 1, namespace.CrushingGivesNuggets, 1);
	}
	
	// Add Setup to OresSetup List
	if (oreName != '') {
		setup(event);
	}
});