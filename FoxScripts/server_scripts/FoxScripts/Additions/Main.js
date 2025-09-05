ServerEvents.recipes(event => {
    
    let enable_rottenFlesh2leather = true;
    let enable_unpacking = true;
    let enable_smokingMud2Clay = true;
    
    // Rotten Flesh to Leather
    if (enable_rottenFlesh2leather) {
        event.recipes.smoking('minecraft:leather', 'minecraft:rotten_flesh')  
    }
    
    // Smoking Mud to Clay
    if (enable_smokingMud2Clay) {
        event.recipes.smoking('minecraft:clay', 'minecraft:mud')
    }
    
    // Unpacking Recipes
    if (enable_unpacking) {
        // Clay
		event.shapeless(
		  Item.of('minecraft:clay_ball', 4), // arg 1: output
			[
				'minecraft:clay'
			]
		)
        
        // Wool to String
		event.shapeless(
			Item.of('minecraft:string', 4), // arg 1: output
			[
				'#minecraft:wool',	// arg 2: the array of inputs
			]
		)
        
        // Snow to Snowball
		event.shapeless(
		  Item.of('minecraft:snowball', 4), // arg 1: output
			[
				'minecraft:snow_block'
			]
		)
        
        // Quartz
		event.shapeless(
			Item.of('minecraft:quartz', 4), // arg 1: output
			[
				'minecraft:quartz_block',	// arg 2: the array of inputs
			]
		)
    }
    
    
})