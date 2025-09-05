ServerEvents.recipes(event => {
    
    // Hookshot Compat
    if (Platform.isLoaded('alltheores')) {
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
    }
    
    // Mastersword Compat
    if (Platform.isLoaded('mastersword')) {
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
    }
    
});