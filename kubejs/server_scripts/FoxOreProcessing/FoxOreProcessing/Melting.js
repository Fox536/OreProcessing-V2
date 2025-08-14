let Fox = Fox || {};
//----------------------------------------------------------------------------------------------------
// * Processing.Melting
//		This is for TCon Item Melting
//----------------------------------------------------------------------------------------------------
// Namespaces
Fox.Processing 			= Fox.Processing || {};
Fox.Processing.Melting = Fox.Processing.Melting || {};

(function() {
	let namespace = Fox.Processing.Melting;
	
	namespace.RemoveMeltingRecipeByInput = function(event, inputItem) {
		event.remove({ 'type': 'tconstruct:melting', 'input': inputItem})

	}
	namespace.RemoveOreMeltingRecipeByInput = function(event, inputItem) {
		event.remove({ 'type': 'tconstruct:ore_melting', 'input': inputItem})

	}
	namespace.RemoveAlloyRecipeByInput = function(event, inputItem) {
		event.remove({ 'type': 'tconstruct:alloy', 'input': inputItem})

	}
	namespace.AddCrushedOreRecipe = function(event, inputItem, outputFluid, outputFluidAmount, byproducts, byproductAmounts,  temperature, time) {
		if (outputFluid == '') {
			return;
		}
		
		temperature = temperature || 500;
		time = time || 75;

		let recipe = {}
		//recipe['type'] = 'tconstruct:melting';
		recipe['type'] = 'tconstruct:ore_melting';
		recipe['byproducts'] = [];
		for(let i = 0; i < byproducts.length; i++) {
			recipe['byproducts'].push({
				'amount': byproductAmounts[i],
				'rate': 'metal',
				'tag': byproducts[i]
			})
		}
		recipe['ingredient'] 		= { 'item': inputItem };
		recipe['rate'] 				= 'metal';
		recipe['result'] 			= {
			'tag': outputFluid,
			'amount': outputFluidAmount
		};
		recipe['temperature'] 		= temperature || Fox.Processing.MeltingTempCoal;
		recipe['time'] 				= time || Fox.Processing.MeltingTime;
		
		event.custom(recipe);
	}

	namespace.AddAlloyRecipe = function(event, inputItems, outputFluid, outputFluidAmount, temperature, time) {
		let recipe = {}
		recipe['type'] = 'tconstruct:alloy';
		recipe['inputs'] 		= [];
		inputItems.foreach(input => {
			recipe['inputs'].push({"item": input})
		});
		recipe['rate'] 				= 'metal';
		recipe['result'] 			= {};
		recipe['result']['tag'] 	= outputFluid;
		recipe['result']['amount'] 	= outputFluidAmount;
		recipe['temperature'] 		= temperature || Fox.Processing.MeltingTempCoal;
		recipe['time'] 				= time || Fox.Processing.MeltingTime;
		
		event.custom(recipe);
	}
	
}());