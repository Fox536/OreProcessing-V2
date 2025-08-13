let Fox = Fox || {};
//----------------------------------------------------------------------------------------------------
// * Processing
//----------------------------------------------------------------------------------------------------
// Namespaces

// Main Function
(function() {
	
	/*
	ServerEvents.tags('item', event => {
		event.remove('forge:dusts/allthemodium', 'kubejs:crushed_raw_allthemodium')
		event.remove('forge:dusts/vibranium', 'kubejs:crushed_raw_vibranium')
		event.remove('forge:dusts/unobtainium', 'kubejs:crushed_raw_unobtainium')
	}) */

	ServerEvents.tags('item', event => {
		// Add the new Crushed Ores to the dusts Tag
		(function() {

			return;
			
			let itemIds = [];
			if (Platform.isLoaded('alltheores')) {
				itemIds.push('iridium')
			}
			if (Platform.isLoaded('allthemodium')) {
				itemIds.push('allthemodium')
				itemIds.push('vibranium')
				itemIds.push('unobtainium')
			}
			if (Platform.isLoaded('tconstruct')) {
				itemIds.push('cobalt')
			}
			if (Platform.isLoaded('silentgear')) {
				itemIds.push('crimson_iron')
				itemIds.push('azure_silver')
			}
			for (let i = 0; i < itemIds.length; i++) {
				let itemId = itemIds[i]
				event.add('forge:dusts/' + itemId, 'kubejs:crushed_raw_' + itemId)
			}
		})();
	})


	ServerEvents.tags('fluid', event => {
		
		return;
		
		let addRecipe = function(oreName) {
			event.add('forge:molten_' + oreName, 'molten_metals:molten_' + oreName)
			event.add('forge:molten_' + oreName, 'createmetallurgy:molten_' + oreName)
		}
		
		//-------------------------------------
		// Molten Metal Liquids
		let oreName;
		if (true) {
			let ores = ['iron', 'gold', 'copper', 'zinc', 'brass', 'steel', 'netherite', 'aluminum', 'lead', 'nickel', 'osmium', 'silver', 'tin', 'invar', 'electrum', 'bronze', 'constantan', 'bronze']
			ores.forEach(oreName => {
				addRecipe(oreName)
			})
		}
	})
	
})();