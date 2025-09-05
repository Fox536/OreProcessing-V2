ServerEvents.recipes(event => {
	
	//-------------------------------------
	// Compat Variables
	//let compatFarmersDelight 			= true
	//-------------------------------------
	
	//-------------------------------------
	/*
	
	if (Platform.isLoaded('alltheores')) {
		
	event.shapeless(
		Item.of('croptopia:blueberry_jam', 1), // arg 1: output
		[
			'biomeswevegone:blueberries',	// arg 2: the array of inputs
			'minecraft:sugar',
			'croptopia:cooking_pot'
		]
	)
		
	*/
	
	// Cold Sweat Recipes
	if (false) {
		// Lantern
		event.shaped(
			Item.of('cold_sweat:soulspring_lamp', 1), // arg 1: output
				[
					'OOO',
					'OWO', // arg 2: the shape (array of strings)
					'OOO'
				],
				{
					O: 'minecraft:diamond',
					W: 'minecraft:lantern'
				}
		)
	}
	
	
	let addRecipe_TinkerAlloy = function(inputList, outputMetal, outputAmount) {
		
		inputs = []
		for (let i = 0; i < inputList.length; i++) {
			inputs.push({tag: inputList[0], amount: inputList[1]})
		}
		
		event.custom({
			type:			'tconstruct:alloy',
			temperature:	1000,
			inputs: 		inputs,
			result: 		{fluid:outputMetal, amount:outputAmount}
		});
	}
	
	
	// Remove Certain Recipes
	if (true) {
		let inputList
		let alloyDustList
		
		// Remove Alloy Dust Recipes
		alloyDustList = ['bronze', 'electrum', 'brass', 'enderium', 'constantan', 'invar']
		// 'steel', 'lumium', 'signalum'
		for (let i = 0; i < alloyDustList.length; i++) {
			let alloyRecipeID = alloyDustList[i]
			event.remove({ id: 'alltheores:' + alloyRecipeID + '_dust_from_alloy_blending' })
		}
		
		// Signalum
		//inputList = [ ]
		//addRecipe_TinkerAlloy(inputList, 'tconstruct:molten_signalum', 360)
		
		
		
	}
	
	event.remove({ id: 'born_in_chaos_v1:smoked_flesh_k' })
	
	
	//-------------------------------------
	
})

// Listen to item tag event
ServerEvents.tags('item', event => {
	// Add the new Crushed Ores to the dusts Tag
	/*
	let itemIds = ['farm_and_charm:tomato']
	let tag 	= ['forge:tomatoes']
	for (let i = 0; i < itemIds.length; i++) {
		let itemId = itemIds[i]
		event.add(tag, itemId)
	}
	event.add(tag, itemId)
	*/
	
	event.add('forge:tomatoes', 	'farm_and_charm:tomato')
	event.add('forge:onions', 		'farm_and_charm:onion')
})