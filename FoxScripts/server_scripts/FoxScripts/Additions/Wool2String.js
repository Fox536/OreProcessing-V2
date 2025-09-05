ServerEvents.recipes(event => {
    // Wool to String
    event.shapeless(
        Item.of('minecraft:string', 4), // arg 1: output
        [
            '#minecraft:wool',	// arg 2: the array of inputs
        ]
    )
})