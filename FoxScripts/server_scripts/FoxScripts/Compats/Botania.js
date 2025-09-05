// Call Setup Functions
ServerEvents.recipes(event => {
	if (!platform.modIsLoaded('botania')) {
		return;
	}
	
	// Variables
	let stoneTypes = {};
	stoneTypes.stone = 'minecraft:stone';
	stoneTypes.deepslate = 'minecraft:deepslate';
	stoneTypes.netherrack = 'minecraft:netherrack';
	stoneTypes.endstone = 'minecraft:end_stone';
	
	//------------------------------------------------------------------
	// Orechid Setup Function
	//------------------------------------------------------------------
	// Setup Missing Orechid Recipes
	orechidSetup = function(stoneID, stoneOre) {
		event.custom({
			"type": "botania:orechid",
			"input": {
				"type": "block",
				"block": "minecraft:stone"
			},
			"output": {
				"type": "block",
				"block": stoneOre.ore
			},
			"weight": stoneOre.weight,
		});
	}
	//------------------------------------------------------------------
	
	// Remove Existing Orechid Recipes if Neccessary
	// ---
	
	//------------------------------------------------------------------
	// Add New Orechid Recipes
	//------------------------------------------------------------------
	// All The Ores
	if (platform.modIsLoaded('alltheores')) { 
		let ores = ['aluminum', 'lead', 'nickel', 'osmium', 'platinum', 'silver', 'tin', 'uranium', 'zinc'];
		
		// Add Stone Ores
		ores.forEach(oreName => {
			let oreData = { 'weight': 5000, 'ore': 'alltheores:' + oreName + '_ore' }
			orechidSetup(stoneTypes.stone, oreData);
		});
		
		// Add Deepslate Ores
		ores.forEach(oreName => {
			let oreData = { 'weight': 5000, 'ore': 'alltheores:deepslate_' + oreName + '_ore' };
			orechidSetup(stoneTypes.deepslate, oreData);
		});
		
		// Add Nether Ores
		ores.forEach(oreName => {
			let oreData = { 'weight': 5000, 'ore': 'alltheores:nether_' + oreName + '_ore' };
			orechidSetup(stoneTypes.netherrack, oreData);
		});
	}
	
	// Butcher
	if (platform.modIsLoaded('butcher')) {
		let oreName = 'sulfur';
		let oreData = { 'weight': 5000, 'ore': 'butcher:' + oreName + 'ore' };
		orechidSetup(stoneTypes.stone, oreData);
	}
	
	// Scorched Guns
	if (platform.modIsLoaded('scguns')) {
		let oreName = 'sulfur';
		let oreData = { 'weight': 5000, 'ore': 'scguns:deepslate_' + oreName + 'ore' };
		orechidSetup(stoneTypes.deepslate, oreData);
		
		oreData = { 'weight': 5000, 'ore': 'scguns:deepslate_' + oreName + 'ore' };
		orechidSetup(stoneTypes.netherrack, oreData);
	}
	
	// Tinkers Compat
	if (platform.modIsLoaded('tconstruct')) {
		let oreName = 'cobalt';
		let oreData = { 'weight': 5000, 'ore': 'tconstruct:' + oreName + '_ore' };
		orechidSetup(stoneTypes.netherrack, oreData);
	}
	//------------------------------------------------------------------
});