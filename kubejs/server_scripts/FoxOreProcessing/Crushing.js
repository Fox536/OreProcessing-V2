let Fox = Fox || {};
//----------------------------------------------------------------------------------------------------
// * Processing.Crushing
//		This is for Create Item Crushing
//----------------------------------------------------------------------------------------------------
// Namespaces
Fox.Processing 			= Fox.Processing || {};
Fox.Processing.Crushing = Fox.Processing.Crushing || {};

(function() {
	let namespace = Fox.Processing.Crushing;
	let defaultCrushingTime = 400;

	namespace.RemoveRecipeByInput = function(event, inputItem) {
		// Check if running mods with this ore
		let enablingMods = ['create'];
		if (!Fox.Processing.ShouldLoadModule(enablingMods)) {
			return;
		}
		
		let list = [];
		// Skip if Needed
		if (inputItem == undefined) {
			return;
		}
		
		if (inputItem[0] == '#') {
			// add all items with tag to list
			list = Ingredient.of(inputItem).getItemIds().toArray();
		} else {
			// add item to list
			list = [inputItem];
		}

		// remove recipe
		list.forEach(item => {
			// remove recipe
			event.remove({
				type: 'create:crushing',
				input: item
			});
		});
	}
	namespace.AddRecipe = function(event, input, output, outputAmount, byproduct, byproductAmount, giveNuggets, nuggetAmount, crushingTime) {
		// Check if running mods with this ore
		let enablingMods = ['create'];
		if (!Fox.Processing.ShouldLoadModule(enablingMods)) {
			return;
		}
		
		let outputList;
		// Get OutputList
		outputList = namespace.BuildItemList(output, outputAmount, byproduct, byproductAmount, giveNuggets, nuggetAmount)
		// Get Crushing Time
		crushingTime = crushingTime || defaultCrushingTime;
		// Add Recipe
		//event.recipes.createCrushing(outputList, input).processingTime(crushingTime);
		
		let recipe = {}
		recipe['type'] = 'create:crushing';
		if (input[0] == '#') {
			recipe['ingredients'] 		= [{ 'tag': input.slice(1) }];
		} else {
			recipe['ingredients'] 		= [{ 'item': input }];
		}
		recipe['processingTime'] 		= crushingTime;
		recipe['results'] 				= outputList;
		event.custom(recipe);
	}

	//------------------------------------------------
	// Build Item List
	//------------------------------------------------
	namespace.BuildItemList = function(output, outputAmount, byproduct, byproductAmount, giveNuggets, nuggetAmount) {
		// Check if running mods with this ore
		let enablingMods = ['create'];
		if (!Fox.Processing.ShouldLoadModule(enablingMods)) {
			return;
		}
		
		let itemList = [];
		// Add Output
		itemList.push({ 'item': output, 'count': outputAmount});
		// Add Output Variance
		itemList.push({ 'item': output, 'count': outputAmount/2, 'chance': Fox.Processing.CrushingVariance });
		// Add Byproduct
		if (Fox.Processing.ValidByproduct(byproduct)) {
			itemList.push({ 'item': byproduct, 'count': byproductAmount, 'chance': Fox.Processing.CrushingByproductChance });
		}
		if (giveNuggets) {
			itemList.push({ 'item': Fox.Processing.XPNuggets, 'count': nuggetAmount, 'chance': Fox.Processing.CrushingXPNuggetChance });
		}

		return itemList;
	}
	
}());