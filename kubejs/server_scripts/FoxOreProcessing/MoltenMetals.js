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
	
	namespace.RemoveRecipeByInput = function(event, inputItem) {
		//event.remove({ 'output': Fluid.of(outputFluid), 'input': inputItem, 'type': 'create:mixing' });
		event.remove({ 'input': inputItem, 'type': 'create:mixing' });
		
	}
	namespace.AddRecipe = function(event, inputItems, outputFluid, outputFluidAmount) {
		//event.recipes.create.mixing([Fluid.of(ore.Molten, Fluid_MoltenIngotAmount * Fluid_MoltenMultiplier)], [ore.RawOre]).heated();
		event.recipes.create.mixing([Fluid.of(outputFluid, outputFluidAmount)], inputItems).heated();

	}
	
}());