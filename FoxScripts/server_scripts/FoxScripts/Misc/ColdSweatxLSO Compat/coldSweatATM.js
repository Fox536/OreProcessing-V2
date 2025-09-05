ColdSweatEvents.registries(event => {
	let insulationFix_Gear = function(itemId, insulationCold, insulationWarm, adaptive, adaptiveSpeed, type, tempImmune, full) {
		// Builder-style insulator definition
		event.addInsulator(insulator => {
			// Registers the insulator to these items
			insulator.items(itemId)
			
			// Insulation that the item provides (cold, heat)
			if (insulationCold > 0) {
				insulator.insulation(insulationCold*2, 0)
			}
			if (insulationWarm > 0) {
				insulator.insulation(0, insulationWarm*2)
			}
			
			// Adaptive insulation that the item provides (insulation, adaptSpeed)
			if (adaptive > 0) {
				//insulator.adaptiveInsulation(4, 0.005)
				insulator.adaptiveInsulation(adaptive, adaptiveSpeed)
			}
			// Insulation type (item, armor, or curio)
			insulator.slot(type)
			
			// true: items with more than 2 total insulation will take up multiple slots
			// false: item will take up only one slot, no matter how much insulation it has
			// Only used for the "item" insulation type
			if (type == 'item') {
				insulator.fillSlots(full)
			}
			
			// Adds immunity to a temperature modifier
			if (tempImmune && (insulationCold > 0)) {
				insulator.immuneToModifier("cold_sweat:freezing", 0.5)
			}
			if (tempImmune && (insulationWarm > 0)) {
				insulator.immuneToModifier("cold_sweat:on_fire", 0.5)
			}
			
			
			
		});
	}
	
	let modId = '';
	let itemId 	= '';
	// Helm: 4, Chest: 6, Leggings: 5, Boots: 4
	
	modId = 'allthemodium:';
	
	// Allthemodium
	itemId 	= 'allthemodium';
	insulationFix_Gear(modId + itemId + '_helmet', 		4, 4, 0, 0, "armor", true, false);
	insulationFix_Gear(modId + itemId + '_chestplate', 	6, 6, 0, 0, "armor", true, false);
	insulationFix_Gear(modId + itemId + '_leggings',	5, 5, 0, 0, "armor", true, false);
	insulationFix_Gear(modId + itemId + '_boots', 		4, 4, 0, 0, "armor", true, false);
	
	// Vibranium
	itemId 	= 'Vibranium';
	insulationFix_Gear(modId + itemId + '_helmet', 		4, 4, 0, 0, "armor", true, false);
	insulationFix_Gear(modId + itemId + '_chestplate', 	6, 6, 0, 0, "armor", true, false);
	insulationFix_Gear(modId + itemId + '_leggings',	5, 5, 0, 0, "armor", true, false);
	insulationFix_Gear(modId + itemId + '_boots', 		4, 4, 0, 0, "armor", true, false);
	
	// Unobtainium
	itemId 	= 'unobtainium';
	insulationFix_Gear(modId + itemId + '_helmet', 		4, 4, 0, 0, "armor", true, false);
	insulationFix_Gear(modId + itemId + '_chestplate', 	6, 6, 0, 0, "armor", true, false);
	insulationFix_Gear(modId + itemId + '_leggings',	5, 5, 0, 0, "armor", true, false);
	insulationFix_Gear(modId + itemId + '_boots', 		4, 4, 0, 0, "armor", true, false);
	
	
});