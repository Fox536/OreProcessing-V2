ServerEvents.recipes((allthemods) => {
	allthemods
    .custom({
      type: "mekanism:crushing",
      input: {
        item: "geore:coal_shard"
      },
      output: {
        id: "mekanism:dust_coal",
        count: 1
      }
    })
    .id("allthemods:mekanism/crushing/coal_dust_from_shard")
})