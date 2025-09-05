ServerEvents.recipes(event => {
    
    // Missing Blue Dye Recipe from Biomes We've Gone
    event.shapeless(
        Item.of('minecraft:blue_dye', 1), // arg 1: output
        [
            'biomeswevegone:blueberries'	// arg 2: the array of inputs
        ]
    );
    
    // Croptopia Compat
    if (Platform.isLoaded('croptopia')) {
        // Add Blueberry from BWG to Croptopia Recipes
		event.shapeless(
			Item.of('croptopia:blueberry_jam', 1), // arg 1: output
			[
				'biomeswevegone:blueberries',	// arg 2: the array of inputs
				'minecraft:sugar',
				'croptopia:cooking_pot'
			]
		);
        
        
    }
    
});