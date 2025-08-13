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
		let outputList;
		// Get OutputList
		outputList = namespace.BuildItemList(output, outputAmount, byproduct, byproductAmount, giveNuggets, nuggetAmount)
		// Get Crushing Time
		crushingTime = crushingTime || defaultCrushingTime;
		// Add Recipe
		event.recipes.createCrushing(outputList, input).processingTime(crushingTime);
	}

	//------------------------------------------------
	// Build Item List
	//------------------------------------------------
	namespace.BuildItemList = function(output, outputAmount, byproduct, byproductAmount, giveNuggets, nuggetAmount) {
		let itemList = [];
		// Add Output
		itemList.push(Item.of(output, outputAmount));
		// Add Output Variance
		itemList.push(Item.of(output, outputAmount/2).withChance(Fox.Processing.CrushingVariance));
		// Add Byproduct
		if (Fox.Processing.ValidByproduct(byproduct)) {
			itemList.push(Item.of(byproduct, byproductAmount).withChance(Fox.Processing.CrushingByproductChance));
		}
		if (giveNuggets) {
			itemList.push(Item.of(Fox.Processing.XPNuggets, nuggetAmount).withChance(Fox.Processing.CrushingXPNuggetChance));
		}

		return itemList;
	}
	
}());
