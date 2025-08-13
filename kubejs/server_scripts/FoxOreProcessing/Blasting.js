let Fox = Fox || {};
//----------------------------------------------------------------------------------------------------
// * Processing.Blasting
//		This is for Minecraft Item Blasting
//----------------------------------------------------------------------------------------------------
// Namespaces
Fox.Processing 			= Fox.Processing || {};
Fox.Processing.Blasting = Fox.Processing.Blasting || {};

(function() {
	let namespace = Fox.Processing.Blasting;
	
	namespace.RemoveRecipeByInput = function(event, inputItem) {
		event.remove({ 'type': 'minecraft:blasting', 'input': inputItem});
	}
	namespace.AddRecipe = function(event, inputItem, outputItem, outputItemAmount) {
		// Fox.Processing.SmeltingAmount
		event.recipes.blasting(Item.of(outputItem, outputItemAmount), inputItem);
	}
	
}());
