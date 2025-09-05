ServerEvents.recipes(event => {
    
    let soulLanternFix  = true;
    let fixChestRecipes = true;
    
    // Fix Soul Lantern Recipe
    if (soulLanternFix) {
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
    
    // Fix Chest Recipes
    if (fixChestRecipes) {
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
        );
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
        );
    }
    
    
});