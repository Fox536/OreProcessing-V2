// Call Setup Functions
ServerEvents.recipes(event => {
	let oreName = '';
	let stoneOres = [];
	let deepslateOres = [];
	let netherrackOres = [];
	let ores = ['aluminum', 'lead', 'nickel', 'osmium', 'platinum', 'silver', 'tin', 'uranium', 'zinc'];
	
	ores.forEach(oreName => {
	  stoneOres.push({ 'weight': 5000, 'ore': 'alltheores:' + oreName + '_ore' });
	});
	
	// Sulfur
	oreName = 'sulfur';
	stoneOres.push({ 'weight': 5000, 'ore': 'butcher:' + oreName + 'ore' });
	
	
	// Deepslate
	ores.forEach(oreName => {
	  deepslateOres.push({ 'weight': 5000, 'ore': 'alltheores:deepslate_' + oreName + '_ore' });
	});
	
	// Sulfur
	oreName = 'sulfur';
	deepslateOres.push({ 'weight': 5000, 'ore': 'scguns:deepslate_' + oreName + 'ore' });
	
	
	// Netherrack
	ores.forEach(oreName => {
	  netherrackOres.push({ 'weight': 5000, 'ore': 'alltheores:nether_' + oreName + '_ore' });
	});
	
	// Sulfur
	oreName = 'sulfur';
	netherrackOres.push({ 'weight': 5000, 'ore': 'scguns:nether_' + oreName + 'ore' });
	
	// Cobalt
	oreName = 'cobalt';
	netherrackOres.push({ 'weight': 5000, 'ore': 'tconstruct:' + oreName + '_ore' });
	
	stoneOres.forEach((v) => {
		event.custom({
			"type": "botania:orechid",
			"input": {
				"type": "block",
				"block": "minecraft:stone"
			},
			"output": {
				"type": "block",
				"block": v.ore
			},
			"weight": v.weight,
		});
	});
	
	deepslateOres.forEach((v) => {
		event.custom({
			"type": "botania:orechid",
			"input": {
				"type": "block",
				"block": "minecraft:deepslate"
			},
			"output": {
				"type": "block",
				"block": v.ore
			},
			"weight": v.weight,
		});
	});
	
	netherrackOres.forEach((v) => {
		event.custom({
			"type": "botania:orechid",
			"input": {
				"type": "block",
				"block": "minecraft:netherrack"
			},
			"output": {
				"type": "block",
				"block": v.ore
			},
			"weight": v.weight,
		});
	});
	
});