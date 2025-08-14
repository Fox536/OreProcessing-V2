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
		// Check if running mods with this ore
		let enablingMods = ['create'];
		if (!Fox.Processing.ShouldLoadModule(enablingMods)) {
			return;
		}
		
		event.remove({ 'type': 'create:millstone', 'input': inputItem});
	}

	namespace.AddRecipe = function(event, inputItem, outputItem, outputItemAmount) {
		// Check if running mods with this ore
		let enablingMods = ['create'];
		if (!Fox.Processing.ShouldLoadModule(enablingMods)) {
			return;
		}
		
		let recipe = {}
		recipe['type'] = 'create:milling';
		if (inputItem[0] == '#') {
			recipe['ingredients'] 		= [{ 'tag': inputItem.slice(1) }];
		} else {
			recipe['ingredients'] 		= [{ 'item': inputItem }];
		}
		recipe['processingTime'] 	= 100;
		recipe['results'] 			= [{ 
			'item': outputItem,
			'count': outputItemAmount
		}];
		event.custom(recipe);
	}

}());