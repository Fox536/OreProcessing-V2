ServerEvents.recipes(event => {
    if (Platform.isLoaded('create')) {
        
        // Add Missing Recipes
        //-------------------------------------
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
            
        // Washing Dirt to Mud
		event.recipes.create.splashing('minecraft:mud', 'minecraft:dirt')
		
        // Washing Obisdian to Crying Obsidian
		event.recipes.create.splashing('minecraft:crying_obsidian', 'minecraft:obsidian')
        
        // Washing Let'sDo Flour to Create Dough
	    event.recipes.create.splashing('create:dough', '#forge:flour')
        
        //-------------------------------------
        
        
        //-------------------------------------
        // Compat's
        //-------------------------------------
        // Tinker's Compat
        if (Platform.isLoaded('tconstruct')) {
            // Skyslime Ball
            event.shapeless(
                Item.of('tconstruct:sky_slime_ball', 1), // arg 1: output
                [
                    'create:dough',	// arg 2: the array of inputs
                    'minecraft:light_blue_dye',	// arg 2: the array of inputs
                ]
            );
            
            // Ichor Ball
            event.shapeless(
                Item.of('tconstruct:ichor_slime_ball', 1), // arg 1: output
                [
                    'create:dough',	// arg 2: the array of inputs
                    'minecraft:orange_dye',	// arg 2: the array of inputs
                ]
            );
            
            // Skyslime Ball
            event.shapeless(
                Item.of('tconstruct:ender_slime_ball', 1), // arg 1: output
                [
                    'create:dough',	// arg 2: the array of inputs
                    'minecraft:purple_dye',	// arg 2: the array of inputs
                ]
            );
            
        }
        
        // Croptopia Compat
        if (Platform.isLoaded('croptopia')) {
            // Dough Fix
            event.shapeless(
                Item.of('create:dough', 1), // arg 1: output
                [
                    'create:wheat_flour',	// arg 2: the array of inputs
                    'croptopia:water_bottle',	
                ]
            ).replaceIngredient({item: Item.of('croptopia:water_bottle')}, 'minecraft:glass_bottle');
            // To Croptopia
            event.shapeless(
                Item.of('croptopia:water_bottle', 1), // arg 1: output
                [
                    Item.of('minecraft:potion', {Potion: "minecraft:water"}),	// arg 2: the array of inputs
                ]
            );
            
            event.shapeless(
                Item.of('create:dough', 1), // arg 1: output
                [
                    'create:wheat_flour',	// arg 2: the array of inputs
                    Item.of('minecraft:potion', {Potion: "minecraft:water"})
                ]).replaceIngredient({item: Item.of('minecraft:potion')}, 'minecraft:glass_bottle');
        }
        //-------------------------------------
    } 
});