let Fox = Fox || {};
//----------------------------------------------------------------------------------------------------
// * Processing.Washing
//		This is for Create Item Washing / Splashing
//----------------------------------------------------------------------------------------------------
// Namespaces
Fox.Processing 			= Fox.Processing || {};
Fox.Processing.Washing 	= Fox.Processing.Washing || {};

(function() {
	let namespace = Fox.Processing.Washing;
	
	namespace.RemoveRecipeByInput = function(event, inputItem) {
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
	namespace.AddRecipe = function(event, inputItem, outputItem, outputAmount, byproduct, byproductAmount, giveNuggets, nuggetAmount) {
		let outputList;
		// Get OutputList
		outputList = namespace.BuildItemList(outputItem, outputAmount, byproduct, byproductAmount, giveNuggets, nuggetAmount);

		// Add Recipe
		event.recipes.createSplashing(outputList, inputItem);
	}

	//------------------------------------------------
	// Build Item List
	//------------------------------------------------
	namespace.BuildItemList = function(outputItem, outputAmount, byproduct, byproductAmount, giveNuggets, nuggetAmount) {
		let itemList = [];
		// Add Output
		itemList.push(Item.of(outputItem, outputAmount));
		// Add Output Variance
		itemList.push(Item.of(outputItem, outputAmount/2).withChance(Fox.Processing.WashingVariance));
		// Add Byproduct
		if (Fox.Processing.ValidByproduct(byproduct)) {
			itemList.push(Item.of(byproduct, byproductAmount).withChance(Fox.Processing.WashingByproductChance));
		}
		if (giveNuggets) {
			itemList.push(Item.of(Fox.Processing.XPNuggets, nuggetAmount/2).withChance(Fox.Processing.WashingXPNuggetChance));
		}

		return itemList;
	}
	
}());