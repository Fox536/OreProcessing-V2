//----------------------------------------------------------------------------------------------------
// * Processing.Washing
//		This is for Create Item Washing / Splashing
//----------------------------------------------------------------------------------------------------
// Namespaces
let Fox 				= Fox || {};
Fox.Processing 			= Fox.Processing || {};
Fox.Processing.Washing 	= Fox.Processing.Washing || {};

(function() {
	let namespace = Fox.Processing.Washing;
	let enablingMods = ['create'];
	
	namespace.RemoveRecipeByInput = function(event, inputItem) {
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
				type: 'create:splashing',
				input: item
			});
		});
	}
	namespace.AddRecipe = function(event, inputItem, outputItem, outputAmount, byproduct, byproductAmount, giveNuggets, nuggetAmount) {
		if (!Fox.Processing.ShouldLoadModule(enablingMods)) {
			return;
		}
		let outputList;
		// Get OutputList
		outputList = namespace.BuildItemList(outputItem, outputAmount, byproduct, byproductAmount, giveNuggets, nuggetAmount, varianceAmount);

		// Add Recipe
		//event.recipes.createSplashing(outputList, inputItem);
		
		let recipe = {}
		recipe['type'] = 'create:splashing';
		if (inputItem[0] == '#') {
			recipe['ingredients'] 		= [{ 'tag': inputItem.slice(1) }];
		} else {
			recipe['ingredients'] 		= [{ 'item': inputItem }];
		}
		recipe['results'] 			= outputList;
		event.custom(recipe);
	}
	namespace.AddRecipeForCrushedOre = function(event, inputItem, outputItem, outputAmount, byproduct, byproductAmount, giveNuggets, nuggetAmount) {
		if (!Fox.Processing.ShouldLoadModule(enablingMods)) {
			return;
		}
		let outputList;
		// Get OutputList
		outputList = namespace.BuildItemList(outputItem, outputAmount, byproduct, byproductAmount, giveNuggets, nuggetAmount, 3);

		// Add Recipe
		//event.recipes.createSplashing(outputList, inputItem);
		
		let recipe = {}
		recipe['type'] = 'create:splashing';
		if (inputItem[0] == '#') {
			recipe['ingredients'] 		= [{ 'tag': inputItem.slice(1) }];
		} else {
			recipe['ingredients'] 		= [{ 'item': inputItem }];
		}
		recipe['results'] 			= outputList;
		event.custom(recipe);
	}

	//------------------------------------------------
	// Build Item List
	//------------------------------------------------
	namespace.BuildItemList = function(outputItem, outputAmount, byproduct, byproductAmount, giveNuggets, nuggetAmount, varianceAmount) {
		if (!Fox.Processing.ShouldLoadModule(enablingMods)) {
			return;
		}
		let itemList = [];
		// Add Output
		itemList.push({ 'item': outputItem, 'count': outputAmount });
		// Add Output Variance
		itemList.push({ 'item': outputItem, 'count': (varianceAmount || outputAmount/2), 'chance': Fox.Processing.WashingVariance });
		// Add Byproduct
		if (Fox.Processing.ValidByproduct(byproduct)) {
			itemList.push({ 'item': byproduct, 'count': byproductAmount, 'chance': Fox.Processing.WashingByproductChance });
		}
		if (giveNuggets) {
			itemList.push({ 'item': Fox.Processing.XPNuggets, 'count': nuggetAmount, 'chance': Fox.Processing.WashingXPNuggetChance });
		}

		return itemList;
	}
	
}());