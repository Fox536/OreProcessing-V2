ServerEvents.recipes((allthemods) => {
  allthemods
    .custom({
      type: "occultism:crushing",
      ingredient: {
        item: "geore:coal_shard"
      },
      result: {
        type: "occultism:item",
        item: "mekanism:dust_coal",
        count: 1
      },
      crushing_time: 100,
      ignore_crushing_multiplier: true
    })
    .id("allthemods:occultism/crushing/coal_dust_from_shard")
});