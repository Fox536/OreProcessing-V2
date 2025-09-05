ServerEvents.recipes(event => {
    // Snow to Snowball
    event.shapeless(
        Item.of('minecraft:snowball', 4), // arg 1: output
        [
            'minecraft:snow_block'
        ]
    )
})