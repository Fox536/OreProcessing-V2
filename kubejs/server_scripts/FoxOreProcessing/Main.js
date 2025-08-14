//----------------------------------------------------------------------------------------------------
// * Processing
//----------------------------------------------------------------------------------------------------
// Namespaces
let Fox 					= Fox || {};
Fox.Processing 				= Fox.Processing || {};
Fox.Processing.OresSetup 	= Fox.Processing.OresSetup || {}

// Variables
// Item Ids
Fox.Processing.XPNuggets						= 'create:experience_nugget';

// Globals
Fox.Processing.ExtraVariance 					= 0.75;
Fox.Processing.UsingReducedSmelting				= true;

// Crushing Variables
Fox.Processing.CrushingVariance 				= Fox.Processing.ExtraVariance;
Fox.Processing.CrushingByproductChance 			= 0.30;
Fox.Processing.CrushingXPNuggetChance 			= 0.60;
Fox.Processing.CrushingGivesNuggets 			= true;

// Washing Variables
Fox.Processing.WashingVariance 					= Fox.Processing.ExtraVariance;
Fox.Processing.WashingByproductChance			= 0.60;
Fox.Processing.WashingXPNuggetChance			= 0.10;
Fox.Processing.WashingGivesNuggets 				= true;

// Recipe Outputs
Fox.Processing.SmeltingAmount					= 6;
Fox.Processing.BlastingAmount					= 6;
Fox.Processing.CrushingAmount					= 2;
Fox.Processing.WashingAmount					= 9;
Fox.Processing.MillingAmount					= 1;

// TCon Melting Variables
Fox.Processing.MeltingCrushedToFluidAmount		= 120;
Fox.Processing.MeltingRawToByproductAmount		= 30;
Fox.Processing.MeltingTempCoal					= 800;
Fox.Processing.MeltingTempLava					= 1000;
Fox.Processing.MeltingTempBlazingBlood			= 1500;
Fox.Processing.MeltingTempSoulLava				= 1500;
Fox.Processing.MeltingTime 						= 75;

// MoltenMetals Variables
Fox.Processing.MoltenRawOreFluidAmount			= 90;
Fox.Processing.MoltenCrushedOreFluidAmount		= 180;
	
(function() {
	Fox.Processing.ValidByproduct = function(byproduct) {
		return !((byproduct == '') || (byproduct == undefined));
	}
	
	Fox.Processing.ShouldLoadModule = function(modId) {
		if (modIds.length == 0) {
			return true;
		}
		modIds.array.forEach(modId => {
			if (Platform.isLoaded(modId)) {
				return true;
			}
		});
		return false;
	}
	
}());


// Check if Mod Loaded: Platform.isLoaded('modId')
// e.g. 	Platform.isLoaded('alltheores')