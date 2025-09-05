ServerEvents.recipes(event => {
    let modID = 'mysticalagriculture';
    if (Platform.isLoaded(modID)) {
        // Crying Obsidian
        event.shaped(
            Item.of('minecraft:crying_obsidian', 4), // arg 1: output
                [
					'OOO',
					'OWO', // arg 2: the shape (array of strings)
					'OOO'
				],
				{
					O: modID + ':obsidian_essence',
					W: modID + ':water_essence'
				}
		);
   }
   
});