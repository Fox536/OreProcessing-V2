ServerEvents.recipes(event => {
	
	let modId = 'legendarysurvivaloverhaul';
	
	// Remove Purified Water Bottle
	event.remove({ output: modId + ':purified_water_bottle' });
	
	// Remove Unused items
	// Remove Heating Coats
	event.remove({ output: modId + ':heating_coat_1' });
	event.remove({ output: modId + ':heating_coat_2' });
	event.remove({ output: modId + ':heating_coat_3' });
	
	// Remove Cooling Coats
	event.remove({ output: modId + ':cooling_coat_1' });
	event.remove({ output: modId + ':cooling_coat_2' });
	event.remove({ output: modId + ':cooling_coat_3' });
	
	// Remove Thermal Coats
	event.remove({ output: modId + ':thermal_coat_1' });
	event.remove({ output: modId + ':thermal_coat_2' });
	event.remove({ output: modId + ':thermal_coat_3' });
	
	// Blocks
	event.remove({ output: modId + ':' + 'cooler' });
	event.remove({ output: modId + ':' + 'heater' });
	event.remove({ output: modId + ':' + 'sewing_table' });
	event.remove({ output: modId + ':' + 'seasonal_calendar' });
	event.remove({ output: modId + ':' + 'thermometer' });
	
	// Clothing
	let clothingFixes = function(type) {
		// Boots
		event.shaped(
			modId + ':' + type + '_boots',
			[
				'   ',
				'W W',
				'W W',
			],
			{
				W: '#minecraft:wool'
			}
		);
		// Chestplate
		event.shaped(
			modId + ':' + type + '_chestplate',
			[
				'W W',
				'WWW',
				'WLW',
			],
			{
				W: '#minecraft:wool',
				L: 'minecraft:leather'
			}
		);
		// Helmet
		event.shaped(
			modId + ':' + type + '_helmet',
			[
				'   ',
				'WLW',
				'W W',
			],
			{
				W: '#minecraft:wool',
				L: 'minecraft:leather'
			}
		);
		// Leggings
		event.shaped(
			modId + ':' + type + '_leggings',
			[
				'WWW',
				'W W',
				'W W',
			],
			{
				W: '#minecraft:wool'
			}
		);
	}
	
	// Ring
	let ringRecipe1 = function(type, elementItem) {
		// Ring
		event.shaped(
			modId + ':' + type + '_resistance_ring',
			[
				'EBD',
				'BEB',
				'EBE',
			],
			{
				B: '#forge:ingots/brass',
				D: '#forge:gems/diamond',
				E: elementItem
			}
		);
	}
	let ringRecipe2 = function(type, elementItem) {
		// Ring
		event.shaped(
			modId + ':' + type + '_resistance_ring',
			[
				' BD',
				'BEB',
				' B ',
			],
			{
				B: '#forge:ingots/brass',
				D: '#forge:gems/diamond',
				E: elementItem
			}
		);
	}
	let ringRecipe3 = function(type, elementItem) {
		// Ring
		event.shaped(
			modId + ':' + type + '_resistance_ring',
			[
				' BE',
				'B B',
				' B ',
			],
			{
				B: '#forge:ingots/brass',
				E: elementItem
			}
		);
	}
	
	let threadRecipe1 = function(type, elementItem) {
		console.log(modId + ':' + type + '_string')
		// Ring
		event.shapeless(
			modId + ':' + type + '_string',
			[
				'minecraft:string',
				elementItem
			]
		);
	}
	let threadRecipe2 = function(type, elementItem) {
		// Ring
		event.shaped(
			Item.of(modId + ':' + type + '_string', 8),
			[
				'SSS',
				'SES',
				'SSS',
			],
			{
				S: 'minecraft:string',
				E: elementItem
			}
		);
	}
	
	
	// LSO Clothing Recipes
	clothingFixes('snow');
	clothingFixes('desert');
	
	// Cold Thread Recipes
	event.remove({ output: modId + ':' + 'cold' + '_string' })
	threadRecipe1('cold', 'minecraft:packed_ice');
	threadRecipe2('cold', 'ars_nouveau:water_essence');
	threadRecipe2('cold', 'irons_spellbooks:ice_rune');
	
	// Heat Thread Recipes
	event.remove({ output: modId + ':' + 'warm' + '_string' })
	threadRecipe1('warm', 'minecraft:magma_block');
	threadRecipe2('warm', 'ars_nouveau:fire_essence');
	threadRecipe2('warm', 'irons_spellbooks:fire_rune');
	
	// Cold Ring Recipes
	ringRecipe1('cold', 'minecraft:packed_ice');
	//ringRecipe2('cold', 'ars_nouveau:water_essence');
	//ringRecipe2('cold', 'irons_spellbooks:ice_rune');
	ringRecipe2('cold', 'legendarysurvivaloverhaul:cold_string');
	ringRecipe3('cold', 'alltheores:sapphire');
	
	// Heat Ring Recipes
	ringRecipe1('heat', 'minecraft:magma_block');
	//ringRecipe2('heat', 'ars_nouveau:fire_essence');
	//ringRecipe2('heat', 'irons_spellbooks:fire_rune');
	ringRecipe2('heat', 'legendarysurvivaloverhaul:warm_string');
	ringRecipe3('cold', 'alltheores:ruby');
	
	// Thermal Ring Recipes
	event.remove({ output: modId + ':' + 'thermal' + '_resistance_ring' })
	event.shapeless(
		modId + ':' + 'thermal' + '_resistance_ring',
		[
			modId + ':' + 'cold' + '_resistance_ring',
			modId + ':' + 'heat' + '_resistance_ring',
		]
	)
	
});

ColdSweatEvents.registries(event =>
{
	let modId = 'legendarysurvivaloverhaul';
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
	
	let insulationFix_Food = function(itemId, temp, length) {
		event.addInsulator(food => {
			food.items(itemId);
			food.temperature(temp);
			food.duration(length);
		});
	}
	
	// Snow Clothing From LSO Fix
	insulationFix_Gear(modId + ':snow_helmet', 		4, 0, 0, 0, "armor", true, false);
	insulationFix_Gear(modId + ':snow_chestplate', 	6, 0, 0, 0, "armor", true, false);
	insulationFix_Gear(modId + ':snow_leggings', 	5, 0, 0, 0, "armor", true, true);
	insulationFix_Gear(modId + ':snow_boots', 		4, 0, 0, 0, "armor", true, true);
	
	// Desert Clothing From LSO Fix
	insulationFix_Gear(modId + ':desert_helmet', 		0, 4, 0, 0, "armor", true, true);
	insulationFix_Gear(modId + ':desert_chestplate', 	0, 6, 0, 0, "armor", true, true);
	insulationFix_Gear(modId + ':desert_leggings', 		0, 5, 0, 0, "armor", true, true);
	insulationFix_Gear(modId + ':desert_boots', 		0, 4, 0, 0, "armor", true, true);
	
	// Curios From LSO Fix
	insulationFix_Gear(modId + ':cold_resistance_ring', 	4, 0, 0, 0, "curio", true, true);
	insulationFix_Gear(modId + ':heat_resistance_ring', 	0, 4, 0, 0, "curio", true, true);
	insulationFix_Gear(modId + ':thermal_resistance_ring', 	4, 4, 0, 0, "curio", true, true);
	
	// Drinks
	//insulationFix_Food(modId + ':xxx', temp, length);
	
})