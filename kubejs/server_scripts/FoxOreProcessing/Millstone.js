let Fox = Fox || {};
//----------------------------------------------------------------------------------------------------
// * Processing.Melting
//		This is for TCon Item Melting
//----------------------------------------------------------------------------------------------------
// Namespaces
Fox.Processing 				= Fox.Processing || {};
Fox.Processing.Millstone 	= Fox.Processing.Millstone || {};

(function() {
	let namespace = Fox.Processing.Millstone;

	namespace.RemoveRecipeByInput = function(event, inputItem) {
		event.remove({ 'type': 'create:millstone', 'input': inputItem});
	}

	namespace.AddRecipe = function(event, inputItem, outputItem, outputItemAmount) {
		event.recipes.create.milling(inputItem, Item.of(outputItem, outputItemAmount));
	}

}());