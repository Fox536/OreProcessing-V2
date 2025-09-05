JEIEvents.hideItems(event => {
	let modId = 'legendarysurvivaloverhaul:'
	let itemsToHide = [];
	
	// Threads
	itemsToHide.push(modId + 'cold_string');
	itemsToHide.push(modId + 'warm_string');
	
	// Thread Items
	itemsToHide.push(modId + 'cooling_coat_1');
	itemsToHide.push(modId + 'cooling_coat_2');
	itemsToHide.push(modId + 'cooling_coat_3');
	itemsToHide.push(modId + 'heating_coat_1');
	itemsToHide.push(modId + 'heating_coat_2');
	itemsToHide.push(modId + 'heating_coat_3');
	itemsToHide.push(modId + 'thermal_coat_1');
	itemsToHide.push(modId + 'thermal_coat_2');
	itemsToHide.push(modId + 'thermal_coat_3');
	
	// Functional Blocks
	itemsToHide.push(modId + 'sewing_table');
	itemsToHide.push(modId + 'heater');
	itemsToHide.push(modId + 'cooler');
	
	// Items
	itemsToHide.push(modId + 'water_purifier');
	itemsToHide.push(modId + 'canteen');
	itemsToHide.push(modId + 'large_canteen');
	itemsToHide.push(modId + 'seasonal_calendar');
	itemsToHide.push(modId + 'thermometer');
	itemsToHide.push(modId + 'sponge');
	
	// Water Plant
	itemsToHide.push(modId + 'water_plant_bag');
	itemsToHide.push(modId + 'water_plant_seeds');
	
	// Ice Fern
	itemsToHide.push(modId + 'ice_fern_seeds');
	itemsToHide.push(modId + 'ice_fern_leaf');
	itemsToHide.push(modId + 'ice_fern_gold_leaf');
	itemsToHide.push(modId + 'ice_fern_gold');
	
	// Sun Fern
	itemsToHide.push(modId + 'sun_fern_seeds');
	itemsToHide.push(modId + 'sun_fern_leaf');
	itemsToHide.push(modId + 'sun_fern_gold_leaf');
	itemsToHide.push(modId + 'sun_fern_gold');
	
	// Cold Clothing
	//itemsToHide.push(modId + 'snow_boots');
	//itemsToHide.push(modId + 'snow_chestplate');
	//itemsToHide.push(modId + 'snow_helmet');
	//itemsToHide.push(modId + 'snow_leggings');
	
	// Warm Clothing
	//itemsToHide.push(modId + 'desert_boots');
	//itemsToHide.push(modId + 'desert_chestplate');
	//itemsToHide.push(modId + 'desert_helmet');
	//itemsToHide.push(modId + 'desert_leggings');
	
	// Curios
	itemsToHide.push(modId + 'purified_water_bottle');
	itemsToHide.push(modId + 'nether_chalice');
	//itemsToHide.push(modId + 'heat_resistance_ring');
	//itemsToHide.push(modId + 'cold_resistance_ring');
	//itemsToHide.push(modId + 'thermal_resistance_ring');
	
	
	
	itemsToHide.forEach(item => {
		event.hide(item);
	});
})