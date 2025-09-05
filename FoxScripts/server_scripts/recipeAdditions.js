ServerEvents.recipes(event => {
	
	//-------------------------------------
	// Compat Variables
	var compatFarmersDelight 			= true
	var compatBiomesWeveGone			= true
	var compatCroptopia 				= false
	var compatTinkers 					= true
	var compatCreate 					= true
	var compatMysticalAgriculture		= false
	var recipesAdditions				= true
	var compatRecipeFixes				= true
	//-------------------------------------
	
	//if (Platform.isLoaded('alltheores')) {
	
	//-------------------------------------
	// Farmer's Delight/Croptopia
	if (compatFarmersDelight && compatCroptopia) {
		// Add Milk Conversion
		// To FarmersDelight
		event.shapeless(
			Item.of('farmersdelight:milk_bottle', 1), // arg 1: output
			[
				'croptopia:milk_bottle',	// arg 2: the array of inputs
			]
		)
		// To Croptopia
		event.shapeless(
			Item.of('croptopia:milk_bottle', 1), // arg 1: output
			[
				'farmersdelight:milk_bottle',	// arg 2: the array of inputs
			]
		)
	}
	//-------------------------------------
	
	//-------------------------------------
	// Biomes We've Gone/Croptopia
	if (compatBiomesWeveGone && compatCroptopia) {
		// Add Blueberry from BWG to Croptopia Recipes
		event.shapeless(
			Item.of('croptopia:blueberry_jam', 1), // arg 1: output
			[
				'biomeswevegone:blueberries',	// arg 2: the array of inputs
				'minecraft:sugar',
				'croptopia:cooking_pot'
			]
		)
	}
	//-------------------------------------
	
	//-------------------------------------
	// Blue Dye Recipes
	if (compatBiomesWeveGone) {
		event.shapeless(
			Item.of('minecraft:blue_dye', 1), // arg 1: output
			[
				'biomeswevegone:blueberries'	// arg 2: the array of inputs
			]
		)
	}
	//-------------------------------------
	
	//-------------------------------------
	// Recipe Fixes
	if (recipesAdditions) {
		// Clay
		event.shapeless(
		  Item.of('minecraft:clay_ball', 4), // arg 1: output
			[
				'minecraft:clay'
			]
		)
		// Snow to Snowball
		event.shapeless(
		  Item.of('minecraft:snowball', 4), // arg 1: output
			[
				'minecraft:snow_block'
			]
		)
		// Smoking Mud to Clay
		event.recipes.smoking('minecraft:clay', 'minecraft:mud')
		// Wool to String
		event.shapeless(
			Item.of('minecraft:string', 4), // arg 1: output
			[
				'#minecraft:wool',	// arg 2: the array of inputs
			]
		)
		// Rotten Flesh to Leather
		event.recipes.smoking('minecraft:leather', 'minecraft:rotten_flesh')
		
		// Quartz
		event.shapeless(
			Item.of('minecraft:quartz', 4), // arg 1: output
			[
				'minecraft:quartz_block',	// arg 2: the array of inputs
			]
		)
	}
	//-------------------------------------
	
	//-------------------------------------
	// Tinker's
	if (compatTinkers && compatCreate) {
		// TCon - Dough to Slimeballs 
		// Skyslime Ball
		event.shapeless(
			Item.of('tconstruct:sky_slime_ball', 1), // arg 1: output
			[
				'create:dough',	// arg 2: the array of inputs
				'minecraft:light_blue_dye',	// arg 2: the array of inputs
			]
		)
		
		// Ichor Ball
		event.shapeless(
			Item.of('tconstruct:ichor_slime_ball', 1), // arg 1: output
			[
				'create:dough',	// arg 2: the array of inputs
				'minecraft:orange_dye',	// arg 2: the array of inputs
			]
		)
		// Skyslime Ball
		event.shapeless(
			Item.of('tconstruct:ender_slime_ball', 1), // arg 1: output
			[
				'create:dough',	// arg 2: the array of inputs
				'minecraft:purple_dye',	// arg 2: the array of inputs
			]
		)
	}
	//-------------------------------------
	
	//-------------------------------------
	// Mystical Agriculture - Additional Recipes
	if (compatMysticalAgriculture) {
		// Crying Obsidian
		event.shaped(
			Item.of('minecraft:crying_obsidian', 4), // arg 1: output
				[
					'OOO',
					'OWO', // arg 2: the shape (array of strings)
					'OOO'
				],
				{
					O: 'mysticalagriculture:obsidian_essence',
					W: 'mysticalagriculture:water_essence'
				}
		)
	}
	//-------------------------------------
	
	//-------------------------------------
	if (compatCreate) {
		// Create
		// Cobbled Deepslate
		event.recipes.createCrushing([
				'minecraft:cobbled_deepslate',
				], 'minecraft:deepslate')
			.processingTime(200);
			
		// Blaze Rod to Blaze Powder
		event.remove({ id: 'create:crushing/blaze_rod' })
		event.recipes.createCrushing([
				Item.of('minecraft:blaze_powder', 5),
				Item.of('minecraft:blaze_powder', 2).withChance(0.15)
				], 'minecraft:blaze_rod')
			.processingTime(200);
	}
	//-------------------------------------
	
	
	//-------------------------------------
	// Create/Croptopia
	if (compatCreate && compatCroptopia) {
		// Dough Fix
		event.shapeless(
			Item.of('create:dough', 1), // arg 1: output
			[
				'create:wheat_flour',	// arg 2: the array of inputs
				'croptopia:water_bottle',	
			]
		).replaceIngredient({item: Item.of('croptopia:water_bottle')}, 'minecraft:glass_bottle')
		// To Croptopia
		event.shapeless(
			Item.of('croptopia:water_bottle', 1), // arg 1: output
			[
				Item.of('minecraft:potion', {Potion: "minecraft:water"}),	// arg 2: the array of inputs
			]
		)
		
		event.shapeless(
			Item.of('create:dough', 1), // arg 1: output
			[
				'create:wheat_flour',	// arg 2: the array of inputs
				Item.of('minecraft:potion', {Potion: "minecraft:water"})
			]).replaceIngredient({item: Item.of('minecraft:potion')}, 'minecraft:glass_bottle')
	}
	//-------------------------------------
	
	//-------------------------------------
	// FarmerDelight/BiomesWeveGone
	if (compatFarmersDelight && compatBiomesWeveGone) {
		// Strip Logs Recipe Adder
		//var cuttingBoardStripLog = function(event, input, output) {
		var cuttingBoardStripLog = function(logData) {
			
			event.custom({
				type: 'farmersdelight:cutting',
				ingredients: [
					{ item: logData.log }
				],
				tool: { tag: 'forge:tools/axes' },
				result: [
					{ item: logData.stripped, count: 1 },
					{ item: 'farmersdelight:tree_bark', count: 1 },
				]
			})
			
			// Add Stripping Method
			//event.recipes.create.cutting([output], input)
			event.recipes.create.cutting([logData.stripped, 'farmersdelight:tree_bark'], logData.log)
			
			// Add Planks Methods
			//event.recipes.create.cutting([Item.of(logData.planks, 6)], logData.log)
			event.recipes.create.cutting([Item.of(logData.planks, 6)], logData.stripped)
			if (logData.wood) { 
				//event.recipes.create.cutting([Item.of(logData.planks, 6)], logData.wood)
				event.recipes.create.cutting([logData.strippedWood, 'farmersdelight:tree_bark'], logData.wood)
			}
			if (logData.strippedWood) { 
				event.recipes.create.cutting([Item.of(logData.planks, 6)], logData.strippedWood)
			}
			
		}
		
		// Create logs Array
		var logs = [];
		let logNames = [
			'aspen',
			'baobab',
			'blue_enchanted',
			'cika',
			'cypress',
			'ebony',
			'fir',
			'green_enchanted',
			'holly',
			'ironwood',
			'jacaranda',
			'mahogany',
			'maple',
			'palm',
			'pine',
			'rainbow_eucalyptus',
			'redwood',
			'sakura',
			'skyris',
			'white_mangrove',
			'willow',
			'witch_hazel',
			'zelkova',
			
		];
		let logName
		for (let i = 0; i < logNames.length; i++) {
			logName = logNames[i]
			logs.push({	
				log: 			'biomeswevegone:' + logName + '_log', 
				stripped: 		'biomeswevegone:stripped_' + logName + '_log', 
				wood: 			'biomeswevegone:' + logName + '_wood',
				strippedWood: 	'biomeswevegone:stripped_' + logName + '_wood',
				planks: 		'biomeswevegone:' + logName + '_planks'
				
			});
		}
		
		// Special
		logs.push({
			log: 				'biomeswevegone:imbued_blue_enchanted_log', 
			stripped: 			'biomeswevegone:stripped_blue_enchanted_log',
			planks:				'biomeswevegone:blue_enchanted_planks'
		});
		logs.push({
			log: 			'biomeswevegone:imbued_green_enchanted_log', 
			stripped: 		'biomeswevegone:stripped_green_enchanted_log',
			planks:			'biomeswevegone:green_enchanted_planks'
		});
		
		/*
		// Old Method
		// Add logs to Array
		logs.push(['biomeswevegone:sakura_log', 				'biomeswevegone:stripped_sakura_log', planks]);
		logs.push(['biomeswevegone:aspen_log', 					'biomeswevegone:stripped_aspen_log']);
		logs.push(['biomeswevegone:baobab_log', 				'biomeswevegone:stripped_baobab_log']);
		logs.push(['biomeswevegone:blue_enchanted_log', 		'biomeswevegone:stripped_blue_enchanted_log']);
		logs.push(['biomeswevegone:cika_log', 					'biomeswevegone:stripped_cika_log']);
		logs.push(['biomeswevegone:cypress_log', 				'biomeswevegone:stripped_cypress_log']);
		logs.push(['biomeswevegone:ebony_log', 					'biomeswevegone:stripped_ebony_log']);
		logs.push(['biomeswevegone:ether_log', 					'biomeswevegone:stripped_ether_log']);
		logs.push(['biomeswevegone:fir_log', 					'biomeswevegone:stripped_fir_log']);
		logs.push(['biomeswevegone:green_enchanted_log', 		'biomeswevegone:stripped_green_enchanted_log']);
		logs.push(['biomeswevegone:holly_log', 					'biomeswevegone:stripped_holly_log']);
		logs.push(['biomeswevegone:lament_log', 				'biomeswevegone:stripped_lament_log']);
		logs.push(['biomeswevegone:jacaranda_log', 				'biomeswevegone:stripped_jacaranda_log']);
		logs.push(['biomeswevegone:mahogany_log', 				'biomeswevegone:stripped_mahogany_log']);
		logs.push(['biomeswevegone:white_mangrove_log', 		'biomeswevegone:stripped_white_mangrove_log']);
		logs.push(['biomeswevegone:maple_log', 					'biomeswevegone:stripped_maple_log']);
		logs.push(['biomeswevegone:palm_log', 					'biomeswevegone:stripped_palm_log']);
		logs.push(['biomeswevegone:pine_log', 					'biomeswevegone:stripped_pine_log']);
		logs.push(['biomeswevegone:rainbow_eucalyptus_log', 	'biomeswevegone:stripped_rainbow_eucalyptus_log']);
		logs.push(['biomeswevegone:redwood_log', 				'biomeswevegone:stripped_redwood_log']);
		logs.push(['biomeswevegone:skyris_log', 				'biomeswevegone:stripped_skyris_log']);
		logs.push(['biomeswevegone:willow_log', 				'biomeswevegone:stripped_willow_log']);
		logs.push(['biomeswevegone:witch_hazel_log', 			'biomeswevegone:stripped_witch_hazel_log']);
		logs.push(['biomeswevegone:zelkova_log', 				'biomeswevegone:stripped_zelkova_log']);
		// Special
		logs.push(['biomeswevegone:imbued_blue_enchanted_log', 'biomeswevegone:stripped_blue_enchanted_log']);
		logs.push(['biomeswevegone:imbued_green_enchanted_log', 'biomeswevegone:stripped_green_enchanted_log']);
		logs.push(['biomeswevegone:imbued_nightshade_log', 		'biomeswevegone:stripped_nightshade_log']);
		logs.push(['biomeswevegone:palo_verde_log', 			'biomeswevegone:stripped_palo_log']);
		*/
		
		// Removed
		//logs.push(['biomeswevegone:ether_log', 			'biomeswevegone:stripped_ether_log']);
		//logs.push(['biomeswevegone:nightshade_log', 		'biomeswevegone:stripped_nightshade_log']);
		//logs.push(['biomeswevegone:palo_log', 			'biomeswevegone:stripped_palo_log']);
		//logs.push(['biomeswevegone:withering_oak_log', 	'minecraft:stripped_oak_log']);
		
		// Loop through Array and Add the Recipes to Strip
		for (let i = 0; i < logs.length; i++) {
			//cuttingBoardStripLog(event, logs[i][0], logs[i][1])
			cuttingBoardStripLog(logs[i])
			
		}
		
		
		logs = [];
		
		// Minecraft
		logNames = [
			'oak',
			'spruce',
			'birch',
			'jungle',
			'acacia',
			'dark_oak',
			'mangrove',
			'crimson_stem',
			'warped_stem'
		];
		for (let i = 0; i < logNames.length; i++) {
			logName = logNames[i]
			logs.push({	
				log: 			'minecraft:' + logName + '_log', 
				stripped: 		'minecraft:stripped_' + logName + '_log', 
				wood: 			'minecraft:' + logName + '_wood',
				strippedWood: 	'minecraft:stripped_' + logName + '_wood'
				
			});
		}
		
		// Ars
		logNames = [
			'yellow_archwood',
			'blue_archwood',
			'red_archwood',
			'purple_archwood',
			'green_archwood'
		];
		for (let i = 0; i < logNames.length; i++) {
			logName = logNames[i]
			logs.push({	
				log: 			'ars_nouveau:' + logName + '_log', 
				stripped: 		'ars_nouveau:stripped_' + logName + '_log', 
				wood: 			'ars_nouveau:' + logName + '_wood',
				strippedWood: 	'ars_nouveau:stripped_' + logName + '_wood'
				
			});
		}
		
		// Quark
		logNames = [
			'ancient',
			'azalea',
			'trumpet'
		];
		for (let i = 0; i < logNames.length; i++) {
			logName = logNames[i]
			logs.push({	
				log: 			'quark:' + logName + '_log', 
				stripped: 		'quark:stripped_' + logName + '_log', 
				wood: 			'quark:' + logName + '_wood',
				strippedWood: 	'quark:stripped_' + logName + '_wood'
				
			});
		}
		
		// Replace cutting
		let replaceCreateCuttingRecipe = function(logData) {
			
			event.remove({ type: "create:cutting", output: logData.stripped })
			event.remove({ type: "create:cutting", output: logData.strippedWood })
			
			// Add Stripping Method
			//event.recipes.create.cutting([output], input)
			event.recipes.create.cutting([logData.stripped, 'farmersdelight:tree_bark'], logData.log)
			
			if (logData.wood) { 
				//event.recipes.create.cutting([Item.of(logData.planks, 6)], logData.wood)
				event.recipes.create.cutting([logData.strippedWood, 'farmersdelight:tree_bark'], logData.wood)
			}
			if (logData.strippedWood) { 
				event.recipes.create.cutting([Item.of(logData.planks, 6)], logData.strippedWood)
			}
		}
		
		for (let i = 0; i < logs.length; i++) {
			replaceCreateCuttingRecipe(logs[i])
		}
		
	}
	//-------------------------------------
	
	//-------------------------------------
	// Create - Recipe Additional Recipes
	if (compatCreate) {
		// Washing Dirt to Mud
		event.recipes.create.splashing('minecraft:mud', 'minecraft:dirt')
		// Washing Obisdian to Crying Obsidian
		event.recipes.create.splashing('minecraft:crying_obsidian', 'minecraft:obsidian')
	}
	//-------------------------------------
	
	
	//-------------------------------------
	// Recipe Fixes for missing recipes
	if (compatRecipeFixes) {
		// Fixes
		event.shaped(
			Item.of('minecraft:soul_lantern', 1),
			[
				'AAA',
				'ABA',
				'AAA'
			],
			{
				A: 'minecraft:iron_nugget',
				B: 'minecraft:soul_torch'
			}
		)
	}
	//-------------------------------------
	
	
	
	// Extras
	event.remove({ id: 'spelunkery:charcoal_lump_from_smelting_food' })
	// Steel Ingot - Blasting Recipe
	//event.blasting('immersiveengineering:ingot_steel', 'minecraft:iron_ingot')
	//event.blasting('minecraft:iron_ingot', 'mekanism:ingot_steel')
	
	
	// Chest Fix
	event.shaped(
		Item.of('minecraft:chest', 1), // arg 1: output
			[
				'PPP',
				'P P', // arg 2: the shape (array of strings)
				'PPP'
			],
			{
				P: '#forge:planks'
			}
	)
	event.shaped(
		Item.of('minecraft:chest', 1), // arg 1: output
			[
				'PPP',
				'P P', // arg 2: the shape (array of strings)
				'PPP'
			],
			{
				P: '#minecraft:planks'
			}
	)
	
	
	// Hookshot
	event.shaped(
		Item.of('hookshot:hookshot', 1), // arg 1: output
			[
				'IAI',
				'ICI', // arg 2: the shape (array of strings)
				'IPI'
			],
			{
				I: '#forge:ingots/iron',
				A: '#minecraft:arrows',
				C: 'minecraft:chain',
				P: 'minecraft:sticky_piston'
			}
	);
	
	/*
	// Hookshot
	event.shaped(
		Item.of('mastersword:hookshot', 1), // arg 1: output
			[
				'IAI',
				'ICI', // arg 2: the shape (array of strings)
				'IPI'
			],
			{
				I: '#forge:ingots/iron',
				A: '#minecraft:arrows',
				C: 'minecraft:chain',
				P: 'minecraft:sticky_piston'
			}
	);
	*/
	
	// Washing Let'sDo Flour to Create Dough
	event.recipes.create.splashing('create:dough', '#forge:flour')
	
})

// Listen to item tag event
ServerEvents.tags('item', event => {
	//-------------------------------------
	// Farmer's Delight/Croptopia
	if (true) {
		// Add the #forge:milks tag to farmersdelight:milk_bottle
		event.add('forge:milks', 'farmersdelight:milk_bottle')
	}
})



//event.shaped(
	//Item.of('armored_redstone:netherite_conveyor', 2), // arg 1: output
	//	[
	//		'   ',
	//		'  W', // arg 2: the shape (array of strings)
	//		'  W'
	//	],
	//	{
	//		W: 'minecraft:redstone_block'
	//	}
	//)
	
	