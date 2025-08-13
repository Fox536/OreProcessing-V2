let Fox = Fox || {};
//----------------------------------------------------------------------------------------------------
// * Processing
//----------------------------------------------------------------------------------------------------
// Namespaces
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

// TCon Melting Variables
Fox.Processing.MeltingRawToFluidAmount			= 120;
Fox.Processing.MeltingRawToByproductAmount		= 30;
Fox.Processing.MeltingTempCoal					= 800;
Fox.Processing.MeltingTempLava					= 1000;
Fox.Processing.MeltingTempBlazingBlood			= 1500;
Fox.Processing.MeltingTempSoulLava				= 1500;
Fox.Processing.MeltingTime 						= 75;

(function() {
	
	// Call Setup Functions
	ServerEvents.recipes(event => {
		Fox.Processing.OresSetup.forEach(setup => {
			setup(event);
		})

		Fox.Processing.GetSmeltingAmount() = function() {
			if (Fox.Processing.UsingReducingSmelting) {
				return Fox.Processing.SmeltingAmount;
			}

			return 1;
		}
		Fox.Processing.GetBlastingAmount() = function() {
			if (Fox.Processing.UsingReducingSmelting) {
				return Fox.Processing.BlastingAmount;
			}

			return 1;
		}
		Fox.Processing.ValidByproduct = function(byproduct) {
			return !((byproduct == '') || (byproduct == undefined));
		}
	});

}());

// Check if Mod Loaded: Platform.isLoaded('modId')
// e.g. 	Platform.isLoaded('alltheores')