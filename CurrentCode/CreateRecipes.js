ServerEvents.recipes(event => {
	
	let getItemTag = function(itemId) {
		let obj = {}
		obj.tag = itemId
		
		return obj;
	}
	let getItemResult = function(itemId, chance, amount) {
		let obj = {}
		obj.id = itemId
		if (chance !== undefined) {
			obj.chance = chance
		}
		if (amount !== undefined) {
			obj.count = amount
		}
		return obj;
	}
	
	let addCreateCrushingRecipe = function(event, input, output) {
		 event.custom({
			type: "create:crushing",
			ingredients: [
				input
			],
			processing_time: 250,
			results: output
		})
	}
	let addCreateSplashingRecipe = function(event, input, output) {
		 event.custom({
			type: "create:splashing",
			ingredients: [
				input
			],
			results: output
		})
	}
	let addCreateBlastingRecipe = function(event, input, output) {
		 event.custom({
			"type": "minecraft:blasting",
			"category": "misc",
			"cookingtime": 100,
			"experience": 0.1,
			"ingredients": [
				input
			],
			"result": output
		})
	}
	
	let crushing_oreBlocks = function(event) {
		let xpNuggetChance = 0.75
		let oreBlockDefault = 6
		let ores  = []
		let results = []
		
		// Remove Wrong Crushing Recipes
		event.remove({ type: "create:crushing",  output: "minecraft:gold_nugget", input: '#c:ores/gold'})
		
		// Add Crushing Recipes
		ores  = []
		
		// Remove Old Recipes
		ores.push({ ore: "aluminum", amount: oreBlockDefault})
		ores.push({ ore: "lead", amount: oreBlockDefault})
		ores.push({ ore: "nickel", amount: oreBlockDefault})
		ores.push({ ore: "osmium", amount: oreBlockDefault})
		ores.push({ ore: "platinum", amount: oreBlockDefault})
		ores.push({ ore: "silver", amount: oreBlockDefault})
		ores.push({ ore: "tin", amount: oreBlockDefault})
		ores.push({ ore: "uranium", amount: oreBlockDefault})
		ores.push({ ore: "zinc", amount: oreBlockDefault})
		ores.push({ ore: "iridium", amount: oreBlockDefault})
		ores.push({ ore: "iron", amount: oreBlockDefault})
		ores.push({ ore: "copper", amount: oreBlockDefault * 2})
		ores.push({ ore: "gold", amount: oreBlockDefault})
		for (let i = 0; i < ores.length; i++) {
			event.remove({ type: "create:crushing",  output: "alltheores:" + ores[i].ore + "_clump", input: '#c:ores/' + ores[i].ore})
		}
		
		// Add New Recipes
		for (let i = 0; i < ores.length; i++) {
			let results = []
			results.push(getItemResult('alltheores:' + ores[i].ore + '_clump', undefined, ores[i].amount))
			results.push(getItemResult('alltheores:' + ores[i].ore + '_clump', 0.25))
			results.push(getItemResult('create:experience_nugget', xpNuggetChance))
			
			addCreateCrushingRecipe(event, getItemTag('c:ores/' + ores[i].ore), results)
		}
		
		ores  = []
		ores.push({ ore: "allthemodium", amount: oreBlockDefault})
		ores.push({ ore: "vibranium", amount: oreBlockDefault})
		ores.push({ ore: "unobtainium", amount: oreBlockDefault})
		for (let i = 0; i < ores.length; i++) {
			let results = []
			results.push(getItemResult('allthemodium:' + ores[i].ore + '_clump', undefined, ores[i].amount))
			results.push(getItemResult('allthemodium:' + ores[i].ore + '_clump', 0.25))
			results.push(getItemResult('create:experience_nugget', xpNuggetChance))
			
			addCreateCrushingRecipe(event, getItemTag('c:ores/' + ores[i].ore), results)
		}
		
		
		ores  = []
		ores.push({ ore: "crimson_iron", amount: oreBlockDefault})
		ores.push({ ore: "azure_silver", amount: oreBlockDefault})
		for (let i = 0; i < ores.length; i++) {
			let results = []
			results.push(getItemResult('kubejs:' + ores[i].ore + '_clump', undefined, ores[i].amount))
			results.push(getItemResult('kubejs:' + ores[i].ore + '_clump', 0.25))
			results.push(getItemResult('create:experience_nugget', xpNuggetChance))
			
			addCreateCrushingRecipe(event, getItemTag('c:ores/' + ores[i].ore), results)
		}
		
		
		// Add Recipes for Others (Diamonds, Emeralds, etc.)
		ores  = []
		ores.push({ ore: "coal", amount: 8})
		ores.push({ ore: "redstone", amount: 12})
		ores.push({ ore: "diamond", amount: 3})
		ores.push({ ore: "emerald", amount: 3})
		ores.push({ ore: "quartz", amount: 5})
		//ores.push({ ore: "quartz", amount: oreBlockDefault})
		for (let i = 0; i < ores.length; i++) {
			event.remove({ type: "create:crushing",  output: "minecraft:" + ores[i].ore, input: '#c:ores/' + ores[i].ore})
			
			let results = []
			results.push(getItemResult("minecraft:" + ores[i].ore, undefined, ores[i].amount))
			results.push(getItemResult("minecraft:" + ores[i].ore, 0.5))
			results.push(getItemResult('create:experience_nugget', xpNuggetChance))
			
			addCreateCrushingRecipe(event, getItemTag('c:ores/' + ores[i].ore), results)
		}
		
		ores  = []
		ores.push({ ore: "lapis", amount: 12})
		for (let i = 0; i < ores.length; i++) {
			event.remove({ type: "create:crushing",  output: "minecraft:" + ores[i].ore + "_lazuli", input: '#c:ores/' + ores[i].ore})
			
			let results = []
			results.push(getItemResult("minecraft:" + ores[i].ore + "_lazuli", undefined, ores[i].amount))
			results.push(getItemResult("minecraft:" + ores[i].ore + "_lazuli", 0.5))
			results.push(getItemResult('create:experience_nugget', xpNuggetChance))
			
			addCreateCrushingRecipe(event, getItemTag('c:ores/' + ores[i].ore), results)
		}
		
		// Add Recipes for Others (etc.)
		ores  = []
		ores.push({ ore: "cinnabar", amount: 6})
		ores.push({ ore: "fluorite", amount: 6})
		ores.push({ ore: "salt", amount: 6})
		ores.push({ ore: "sulfur", amount: 6})
		//ores.push({ ore: "quartz", amount: oreBlockDefault})
		for (let i = 0; i < ores.length; i++) {
			//event.remove({ type: "create:crushing",  output: "minecraft:" + ores[i].ore, input: '#c:ores/' + ores[i].ore})
			
			let results = []
			results.push(getItemResult("alltheores:" + ores[i].ore, undefined, ores[i].amount))
			results.push(getItemResult("alltheores:" + ores[i].ore, 0.5))
			results.push(getItemResult('create:experience_nugget', xpNuggetChance))
			
			addCreateCrushingRecipe(event, getItemTag('c:ores/' + ores[i].ore), results)
		}
		
		// Add Recipes for Others (etc.)
		ores  = []
		ores.push({ ore: "dark_gem", amount: 4})
		for (let i = 0; i < ores.length; i++) {
			//event.remove({ type: "create:crushing",  output: "minecraft:" + ores[i].ore, input: '#c:ores/' + ores[i].ore})
			
			let results = []
			results.push(getItemResult("evilcraft:" + ores[i].ore, undefined, ores[i].amount))
			results.push(getItemResult("evilcraft:" + ores[i].ore, 0.5))
			results.push(getItemResult("evilcraft:" + ores[i].ore + "_crushed", 0.75,))
			results.push(getItemResult('create:experience_nugget', xpNuggetChance))
			
			addCreateCrushingRecipe(event, getItemTag('c:ores/' + ores[i].ore), results)
		}
		
		// forbidden_arcanus
		ores  = [{ ore: "arcane_crystal", amount: 4}]
		results = []
		results.push(getItemResult("forbidden_arcanus:" + ores[0].ore, undefined, ores[0].amount))
		results.push(getItemResult("forbidden_arcanus:" + ores[0].ore, 0.5))
		results.push(getItemResult('create:experience_nugget', xpNuggetChance))
		addCreateCrushingRecipe(event, getItemTag('c:ores/' + ores[0].ore), results)
		
		ores  = [{ ore: "rune", amount: 4}]
		results = []
		results.push(getItemResult("forbidden_arcanus:" + ores[0].ore, undefined, ores[0].amount))
		results.push(getItemResult("forbidden_arcanus:" + ores[0].ore, 0.5))
		results.push(getItemResult('create:experience_nugget', xpNuggetChance))
		addCreateCrushingRecipe(event, getItemTag('c:ores/runic'), results)
		
		ores  = [{ ore: "stellarite", amount: 4}]
		results = []
		results.push(getItemResult("forbidden_arcanus:" + ores[0].ore + "_piece", undefined, ores[0].amount))
		results.push(getItemResult("forbidden_arcanus:" + ores[0].ore + "_piece", 0.5))
		results.push(getItemResult('create:experience_nugget', xpNuggetChance))
		addCreateCrushingRecipe(event, getItemTag('c:ores/' + ores[0].ore), results)
		
		// Add Recipes for Mystical Agriculture
		ores  = [{ ore: "inferium", amount: 4}]
		//ores.push({ ore: "stella_", amount: 4})
		results = []
		results.push(getItemResult("mysticalagriculture:" + ores[0].ore + "_essence", undefined, ores[0].amount))
		results.push(getItemResult("mysticalagriculture:" + ores[0].ore + "_essence", 0.5))
		results.push(getItemResult('create:experience_nugget', xpNuggetChance))
		addCreateCrushingRecipe(event, getItemTag('c:ores/' + ores[0].ore), results)
		
		ores  = [{ ore: "prosperity", amount: 4}]
		results = []
		results.push(getItemResult("mysticalagriculture:" + ores[0].ore + "_shard", undefined, ores[0].amount))
		results.push(getItemResult("mysticalagriculture:" + ores[0].ore + "_shard", 0.5))
		results.push(getItemResult('create:experience_nugget', xpNuggetChance))
		addCreateCrushingRecipe(event, getItemTag('c:ores/' + ores[0].ore), results)
		
		ores  = [{ ore: "soulium", amount: 4}]
		results = []
		results.push(getItemResult("mysticalagriculture:" + ores[0].ore + "_dust", undefined, ores[0].amount))
		results.push(getItemResult("mysticalagriculture:" + ores[0].ore + "_dust", 0.5))
		results.push(getItemResult('create:experience_nugget', xpNuggetChance))
		addCreateCrushingRecipe(event, getItemTag('c:ores/' + ores[0].ore), results)
		
		// Add Recipes for Others (Diamonds, Emeralds, Dark Ore, etc.)
		ores  = []
		ores.push({ ore: "bort", amount: 4})
		//ores.push({ ore: "stella_", amount: 4})
		for (let i = 0; i < ores.length; i++) {
			//event.remove({ type: "create:crushing",  output: "minecraft:" + ores[i].ore, input: '#c:ores/' + ores[i].ore})
			//#ores_in_ground
			let results = []
			results.push(getItemResult("silentgear:" + ores[i].ore, undefined, ores[i].amount))
			results.push(getItemResult("silentgear:" + ores[i].ore, 0.5))
			results.push(getItemResult('create:experience_nugget', xpNuggetChance))
			
			addCreateCrushingRecipe(event, getItemTag('c:ores/' + ores[i].ore), results)
		}
		
		// Add Recipes for Powah
		ores  = [{ ore: "uraninite", amount: 3}]
		results = []
		results.push(getItemResult("powah:" + ores[0].ore + "_raw", undefined, ores[0].amount))
		results.push(getItemResult("powah:" + ores[0].ore + "_raw", 0.5))
		results.push(getItemResult('create:experience_nugget', xpNuggetChance))
		addCreateCrushingRecipe(event, getItemTag('c:ores/' + ores[0].ore + "_poor"), results)
		
		ores  = [{ ore: "uraninite", amount: 5}]
		results = []
		results.push(getItemResult("powah:" + ores[0].ore + "_raw", undefined, ores[0].amount))
		results.push(getItemResult("powah:" + ores[0].ore + "_raw", 0.5))
		results.push(getItemResult('create:experience_nugget', xpNuggetChance))
		addCreateCrushingRecipe(event, getItemTag('c:ores/' + ores[0].ore + "_regular"), results)
		
		ores  = [{ ore: "uraninite", amount: 7}]
		results = []
		results.push(getItemResult("powah:" + ores[0].ore + "_raw", undefined, ores[0].amount))
		results.push(getItemResult("powah:" + ores[0].ore + "_raw", 0.5))
		results.push(getItemResult('create:experience_nugget', xpNuggetChance))
		addCreateCrushingRecipe(event, getItemTag('c:ores/' + ores[0].ore + "_dense"), results)
		
		// Add Recipes for Irons Spellbook
		ores  = [{ ore: "mithril", amount: 4}]
		results = []
		results.push(getItemResult("irons_spellbooks:raw_" + ores[0].ore, undefined, ores[0].amount))
		results.push(getItemResult("irons_spellbooks:raw_" + ores[0].ore, 0.5))
		results.push(getItemResult('create:experience_nugget', xpNuggetChance))
		addCreateCrushingRecipe(event, getItemTag('c:ores/' + ores[0].ore), results)
		
		// Add Recipes for bigreactors
		ores  = [{ ore: "benitoite", amount: 4}]
		results = []
		results.push(getItemResult("bigreactors:" + ores[0].ore + "_crystal", undefined, ores[0].amount))
		results.push(getItemResult("bigreactors:" + ores[0].ore + "_crystal", 0.5))
		results.push(getItemResult('create:experience_nugget', xpNuggetChance))
		addCreateCrushingRecipe(event, getItemTag('c:ores/' + ores[0].ore), results)
		
		// Add Recipes for Occultism
		ores  = [{ ore: "iesnium", amount: 4}]
		results = []
		results.push(getItemResult("occultism:raw_" + ores[0].ore, undefined, ores[0].amount))
		results.push(getItemResult("occultism:raw_" + ores[0].ore, 0.5))
		results.push(getItemResult('create:experience_nugget', xpNuggetChance))
		addCreateCrushingRecipe(event, getItemTag('c:ores/' + ores[0].ore), results)
		
		// Add Recipes for Netherite
		ores  = [{ ore: "netherite_scrap", amount: 4}]
		results = []
		results.push(getItemResult("mekanism:dirty_" + ores[0].ore, undefined, ores[0].amount))
		results.push(getItemResult("mekanism:dirty_" + ores[0].ore, 0.5))
		results.push(getItemResult('create:experience_nugget', xpNuggetChance))
		addCreateCrushingRecipe(event, getItemTag('c:ores/' + ores[0].ore), results)
		
	}
	crushing_oreBlocks(event);
	
	let crushing_rawOre = function(event) {
		let xpNuggetChance = 0.75
		let oreBlockDefault = 2
		let ores  = []
		
		// Add Crushing Recipes
		
		// Remove Old Recipes
		ores  = []
		ores.push({ ore: "iron", amount: oreBlockDefault})
		ores.push({ ore: "gold", amount: oreBlockDefault})
		ores.push({ ore: "copper", amount: oreBlockDefault})
		for (let i = 0; i < ores.length; i++) {
			event.remove({ type: "create:crushing",  output: "alltheores:" + ores[i].ore + "_clump", input: 'minecraft:raw_' + ores[i].ore})
		}
		
		// Remove Old Recipes
		ores  = []
		ores.push({ ore: "aluminum", amount: oreBlockDefault})
		ores.push({ ore: "lead", amount: oreBlockDefault})
		ores.push({ ore: "nickel", amount: oreBlockDefault})
		ores.push({ ore: "osmium", amount: oreBlockDefault})
		ores.push({ ore: "platinum", amount: oreBlockDefault})
		ores.push({ ore: "silver", amount: oreBlockDefault})
		ores.push({ ore: "tin", amount: oreBlockDefault})
		ores.push({ ore: "uranium", amount: oreBlockDefault})
		ores.push({ ore: "zinc", amount: oreBlockDefault})
		for (let i = 0; i < ores.length; i++) {
			event.remove({ type: "create:crushing",  output: "create:crushed_raw_" + ores[i].ore, input: 'alltheores:raw_' + ores[i].ore})
			event.remove({ type: "create:crushing",  output: "create:crushed_raw_" + ores[i].ore})
			event.remove({ type: "create:crushing",  output: "alltheores:" + ores[i].ore + "_clump", input: 'alltheores:raw_' + ores[i].ore})
		}
		
		ores  = []
		ores.push({ ore: "iron", amount: oreBlockDefault})
		ores.push({ ore: "gold", amount: oreBlockDefault})
		ores.push({ ore: "copper", amount: oreBlockDefault})
		ores.push({ ore: "aluminum", amount: oreBlockDefault})
		ores.push({ ore: "lead", amount: oreBlockDefault})
		ores.push({ ore: "nickel", amount: oreBlockDefault})
		ores.push({ ore: "osmium", amount: oreBlockDefault})
		ores.push({ ore: "platinum", amount: oreBlockDefault})
		ores.push({ ore: "silver", amount: oreBlockDefault})
		ores.push({ ore: "tin", amount: oreBlockDefault})
		ores.push({ ore: "uranium", amount: oreBlockDefault})
		ores.push({ ore: "zinc", amount: oreBlockDefault})
		ores.push({ ore: "iridium", amount: oreBlockDefault})
		for (let i = 0; i < ores.length; i++) {
			let results = []
			results.push(getItemResult('alltheores:' + ores[i].ore + '_clump', undefined, ores[i].amount))
			results.push(getItemResult('alltheores:' + ores[i].ore + '_clump', 0.5))
			results.push(getItemResult('create:experience_nugget', xpNuggetChance))
			
			addCreateCrushingRecipe(event, getItemTag('c:raw_materials/' + ores[i].ore), results)
		}
		
		ores  = []
		ores.push({ ore: "allthemodium", amount: oreBlockDefault})
		ores.push({ ore: "vibranium", amount: oreBlockDefault})
		ores.push({ ore: "unobtainium", amount: oreBlockDefault})
		for (let i = 0; i < ores.length; i++) {
			let results = []
			results.push(getItemResult('allthemodium:' + ores[i].ore + '_clump', undefined, ores[i].amount))
			results.push(getItemResult('allthemodium:' + ores[i].ore + '_clump', 0.5))
			results.push(getItemResult('create:experience_nugget', xpNuggetChance))
			
			addCreateCrushingRecipe(event, getItemTag('c:raw_materials/' + ores[i].ore), results)
		}
		
		ores  = []
		ores.push({ ore: "crimson_iron", amount: oreBlockDefault})
		ores.push({ ore: "azure_silver", amount: oreBlockDefault})
		for (let i = 0; i < ores.length; i++) {
			let results = []
			results.push(getItemResult('kubejs:' + ores[i].ore + '_clump', undefined, ores[i].amount))
			results.push(getItemResult('kubejs:' + ores[i].ore + '_clump', 0.5))
			results.push(getItemResult('create:experience_nugget', xpNuggetChance))
			
			addCreateCrushingRecipe(event, getItemTag('c:raw_materials/' + ores[i].ore), results)
		}
		
	}
	crushing_rawOre(event)
	
	let crushing_rawOreBlock = function(event) {
		let xpNuggetChance = 0.75
		let oreBlockDefault = 18
		let ores  = []
		
		// Add Crushing Recipes
		
		// Remove Old Recipes
		ores  = []
		ores.push({ ore: "iron", amount: oreBlockDefault})
		ores.push({ ore: "gold", amount: oreBlockDefault})
		ores.push({ ore: "copper", amount: oreBlockDefault})
		for (let i = 0; i < ores.length; i++) {
			event.remove({ type: "create:crushing",  output: "alltheores:" + ores[i].ore + "_clump", input: 'minecraft:raw_' + ores[i].ore + "_block"})
		}
		
		// Remove Old Recipes
		ores  = []
		ores.push({ ore: "aluminum", amount: oreBlockDefault})
		ores.push({ ore: "lead", amount: oreBlockDefault})
		ores.push({ ore: "nickel", amount: oreBlockDefault})
		ores.push({ ore: "osmium", amount: oreBlockDefault})
		ores.push({ ore: "platinum", amount: oreBlockDefault})
		ores.push({ ore: "silver", amount: oreBlockDefault})
		ores.push({ ore: "tin", amount: oreBlockDefault})
		ores.push({ ore: "uranium", amount: oreBlockDefault})
		ores.push({ ore: "zinc", amount: oreBlockDefault})
		for (let i = 0; i < ores.length; i++) {
			event.remove({ type: "create:crushing",  output: "create:crushed_raw_" + ores[i].ore, input: 'alltheores:raw_' + ores[i].ore + "_block"})
			event.remove({ type: "create:crushing",  output: 'alltheores:' + ores[i].ore + '_clump', input: 'alltheores:raw_' + ores[i].ore + "_block"})
		}
		
		ores  = []
		ores.push({ ore: "iron", amount: oreBlockDefault})
		ores.push({ ore: "gold", amount: oreBlockDefault})
		ores.push({ ore: "copper", amount: oreBlockDefault})
		ores.push({ ore: "aluminum", amount: oreBlockDefault})
		ores.push({ ore: "lead", amount: oreBlockDefault})
		ores.push({ ore: "nickel", amount: oreBlockDefault})
		ores.push({ ore: "osmium", amount: oreBlockDefault})
		ores.push({ ore: "platinum", amount: oreBlockDefault})
		ores.push({ ore: "silver", amount: oreBlockDefault})
		ores.push({ ore: "tin", amount: oreBlockDefault})
		ores.push({ ore: "uranium", amount: oreBlockDefault})
		ores.push({ ore: "zinc", amount: oreBlockDefault})
		ores.push({ ore: "iridium", amount: oreBlockDefault})
		for (let i = 0; i < ores.length; i++) {
			let results = []
			results.push(getItemResult('alltheores:' + ores[i].ore + '_clump', undefined, ores[i].amount))
			results.push(getItemResult('alltheores:' + ores[i].ore + '_clump', 0.5, ores[i].amount / 2))
			results.push(getItemResult('create:experience_nugget', xpNuggetChance, ores[i].amount / 2))
			
			addCreateCrushingRecipe(event, getItemTag('c:storage_blocks/raw_' + ores[i].ore), results)
		}
		
		
		ores  = []
		ores.push({ ore: "crimson_iron", amount: oreBlockDefault})
		ores.push({ ore: "azure_silver", amount: oreBlockDefault})
		for (let i = 0; i < ores.length; i++) {
			let results = []
			results.push(getItemResult('kubejs:' + ores[i].ore + '_clump', undefined, ores[i].amount))
			results.push(getItemResult('kubejs:' + ores[i].ore + '_clump', 0.5, ores[i].amount / 2))
			results.push(getItemResult('create:experience_nugget', xpNuggetChance, ores[i].amount / 2))
			
			addCreateCrushingRecipe(event, getItemTag('c:storage_blocks/raw_' + ores[i].ore), results)
		}
	}
	crushing_rawOreBlock(event)
	
	let splashing_clumps = function(event) {
		let ores  = []
		
		// Remove Wrong Splashing Recipes
		ores  = ['iron', 'gold' ]
		for (let i = 0; i < ores.length; i++) {
			// Washing Fix
			event.remove({ mod: "oritech", type: "create:splashing",  output: "minecraft:" + ores[i] + "_nugget", input: '#c:clumps/' + ores[i]})
		}
		
		// Add Splashing Recipes
		ores  = []
		ores.push({ ore: "aluminum", byproduct: undefined})
		ores.push({ ore: "lead", byproduct: undefined})
		ores.push({ ore: "silver", byproduct: undefined})
		ores.push({ ore: "tin", byproduct: undefined})
		ores.push({ ore: "iridium", byproduct: undefined})
		for (let i = 0; i < ores.length; i++) {
			let results = []
			results.push(getItemResult('alltheores:' + ores[i].ore + '_nugget', undefined, 9))
			results.push(getItemResult('alltheores:' + ores[i].ore + '_nugget', 0.25, 3))
			if (ores[i].byproduct) {
				results.push(getItemResult(byproduct, 0.75))
			}
			
			// Add New Recipes
			addCreateSplashingRecipe(event, getItemTag('c:clumps/' + ores[i].ore), results)
		}
		
		
		ores  = []
		ores.push({ ore: "allthemodium", byproduct: undefined})
		ores.push({ ore: "vibranium", byproduct: undefined})
		ores.push({ ore: "unobtainium", byproduct: undefined})
		for (let i = 0; i < ores.length; i++) {
			let results = []
			results.push(getItemResult('allthemodium:' + ores[i].ore + '_nugget', undefined, 9))
			results.push(getItemResult('allthemodium:' + ores[i].ore + '_nugget', 0.25, 3))
			if (ores[i].byproduct) {
				results.push(getItemResult(byproduct, 0.75))
			}
			
			// Add New Recipes
			addCreateSplashingRecipe(event, getItemTag('c:clumps/' + ores[i].ore), results)
		}
		
		ores  = []
		ores.push({ ore: "crimson_iron", byproduct: undefined})
		ores.push({ ore: "azure_silver", byproduct: undefined})
		for (let i = 0; i < ores.length; i++) {
			let results = []
			results.push(getItemResult('silentgear:' + ores[i].ore + '_nugget', undefined, 9))
			results.push(getItemResult('silentgear:' + ores[i].ore + '_nugget', 0.25, 3))
			if (ores[i].byproduct) {
				results.push(getItemResult(byproduct, 0.75))
			}
			
			// Add New Recipes
			addCreateSplashingRecipe(event, getItemTag('c:clumps/' + ores[i].ore), results)
		}
	}
	splashing_clumps(event)
	
	let blasting_clumps = function(event) {
		let ores  = []
		
		// Remove Wrong Blasting Recipes
		//--
		
		// Add Blasting Recipes
		ores  = []
		ores.push({ ore: "aluminum"})
		ores.push({ ore: "lead"})
		ores.push({ ore: "silver"})
		ores.push({ ore: "tin"})
		ores.push({ ore: "iridium"})
		
		for (let i = 0; i < ores.length; i++) {
			// Add New Recipes
			//addCreateBlastingRecipe(event, getItemTag('c:clumps/' + ores[i].ore), 'alltheores:' + ores[i].ore + '_ingot')
			event.blasting('alltheores:' + ores[i].ore + '_ingot', '#c:clumps/' + ores[i].ore)
		}
		
		ores  = []
		ores.push({ ore: "allthemodium"})
		ores.push({ ore: "vibranium"})
		ores.push({ ore: "unobtainium"})
		for (let i = 0; i < ores.length; i++) {
			// Add New Recipes
			event.blasting('allthemodium:' + ores[i].ore + '_ingot', '#c:clumps/' + ores[i].ore)
		}
		
		ores  = []
		ores.push({ ore: "crimson_iron"})
		ores.push({ ore: "azure_silver"})
		for (let i = 0; i < ores.length; i++) {
			// Add New Recipes
			event.blasting('silentgear:' + ores[i].ore + '_ingot', '#c:clumps/' + ores[i].ore)
		}
	}
	blasting_clumps(event)
	
	
	
	
})