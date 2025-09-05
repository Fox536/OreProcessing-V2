ServerEvents.recipes(event => {
    if (Platform.isLoaded('farmersdelight')) {
        // Log Stripping and Planks Cutting Board Recipes
        let cuttingBoardStripLog =function(logData) {
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
			event.recipes.create.cutting([logData.stripped, 'farmersdelight:tree_bark'], logData.log)
			
			// Add Planks Methods
			event.recipes.create.cutting([Item.of(logData.planks, 6)], logData.stripped)
			if (logData.wood) { 
				event.recipes.create.cutting([logData.strippedWood, 'farmersdelight:tree_bark'], logData.wood)
			}
			if (logData.strippedWood) { 
				event.recipes.create.cutting([Item.of(logData.planks, 6)], logData.strippedWood)
			}
            
            // Fix Create Cutting Recipes
            if (Platform.isLoaded('create')) {
                replaceCreateCuttingRecipe(logData);
            }
		}
        
        // Replace Cutting Recipe for Create Mod
		let replaceCreateCuttingRecipe = function(logData) {
			
			event.remove({ type: "create:cutting", output: logData.stripped })
			event.remove({ type: "create:cutting", output: logData.strippedWood })
			
			// Add Stripping Method
			event.recipes.create.cutting([logData.stripped, 'farmersdelight:tree_bark'], logData.log)
			
			if (logData.wood) { 
				event.recipes.create.cutting([logData.strippedWood, 'farmersdelight:tree_bark'], logData.wood)
			}
			if (logData.strippedWood) { 
				event.recipes.create.cutting([Item.of(logData.planks, 6)], logData.strippedWood)
			}
		}
        
        let LogSetup = {};
        // Minecraft
        LogSetup.Minecraft = function() {
            let modID = 'minecraft';
            
            // Create logs Array
		    var logs = [];
            let logNames = [
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
            
            // Loop through Array and Add the Recipes to Strip
            for (let i = 0; i < logs.length; i++) {
                cuttingBoardStripLog(logs[i])
                
            }
        }
        // Oh the Biomes We've Gone Compat
        LogSetup.BWG = function() {
            let modID = 'biomeswevegone';
            
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
            
            // Add the Normal Logs
            for (let i = 0; i < logNames.length; i++) {
                let logName = logNames[i]
                logs.push({	
                    log: 			modID + ':' + logName + '_log', 
                    stripped: 		modID + ':stripped_' + logName + '_log', 
                    wood: 			modID + ':' + logName + '_wood',
                    strippedWood: 	modID + ':stripped_' + logName + '_wood',
                    planks: 		modID + ':' + logName + '_planks'
                    
                });
            }
            
            // Add Special Manually
            logs.push({
                log: 		modID + ':imbued_blue_enchanted_log', 
                stripped: 	modID + ':stripped_blue_enchanted_log',
                planks:		modID + ':blue_enchanted_planks'
            });
            logs.push({
                log: 		modID + ':imbued_green_enchanted_log', 
                stripped: 	modID + ':stripped_green_enchanted_log',
                planks:		modID + ':green_enchanted_planks'
            });
            
            // Loop through Array and Add the Recipes to Strip
            for (let i = 0; i < logs.length; i++) {
                cuttingBoardStripLog(logs[i])
                
            }
        }
        // Ars Nouveau Compat
        LogSetup.Ars = function() {
            let modID = 'ars_nouveau';
            
            // Create logs Array
		    var logs = [];
            let logNames = [
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
            
            // Loop through Array and Add the Recipes to Strip
            for (let i = 0; i < logs.length; i++) {
                cuttingBoardStripLog(logs[i])
                
            }
        }
        
        // Quark Compat
        LogSetup.Quark = function() {
            let modID = 'quark';
            
            // Create logs Array
		    var logs = [];
            let logNames = [
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
                
            // Loop through Array and Add the Recipes to Strip
            for (let i = 0; i < logs.length; i++) {
                cuttingBoardStripLog(logs[i])
                
            }
        }
        
        // Fix Missing Minecraft Log Recipes
        LogSetup.Minecraft();
        
        // Croptopia Compatibility
        if (Platform.isLoaded('croptopia')) {
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
        
        // Oh The Biomes We've Gone Compat
        if (Platform.isLoaded('biomeswevegone')) {
            LogSetup.BWG();
        }
        
        // Ars Nouveau Compat
        if (Platform.isLoaded('ars_nouveau')) {
            LogSetup.Ars();
        }
        
        // Ars Nouveau Compat
        if (Platform.isLoaded('Quark')) {
            LogSetup.Quark();
        }
    } 
});

// Listen to item tag event
ServerEvents.tags('item', event => {
	//-------------------------------------
	// Farmer's Delight/Croptopia
	if (true) {
		// Add the #forge:milks tag to farmersdelight:milk_bottle
		event.add('forge:milks', 'farmersdelight:milk_bottle')
	}
})