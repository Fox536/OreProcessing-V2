let Fox = Fox || {};
//----------------------------------------------------------------------------------------------------
// * Processing.Smelting
//		This is for Minecraft Item Smelting
//----------------------------------------------------------------------------------------------------
// Namespaces
Fox.Processing 			= Fox.Processing || {};
Fox.Processing.Smelting = Fox.Processing.Smelting || {};

(function() {
	let namespace = Fox.Processing.Smelting;
	
	namespace.RemoveRecipeByInput = function(event, inputItem) {
		event.remove({ 'type': 'minecraft:smelting', 'input': inputItem});
	}
	namespace.AddRecipe = function(event, inputItem, outputItem, outputItemAmount) {
		event.recipes.smelting(Item.of(outputItem, outputItemAmount), inputItem);
	}
	
}());