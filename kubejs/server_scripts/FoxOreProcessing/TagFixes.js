// Listen to item tag event
ServerEvents.tags('item', event => {
	
	if (!platform.modIsLoaded('scguns')) {
		// Anthralite Tags
		event.add('forge:ingots/anthralite', 'scguns:anthralite_ingot');
		event.add('forge:storage_blocks/raw_anthralite', 'scguns:raw_anthralite_block');
		event.add('forge:ores/anthralite', 'scguns:anthralite_ore');
		event.add('forge:ores/anthralite', 'scguns:deepslate_anthralite_ore');
		
		// Sulfur Tags
		event.add('forge:ores/sulfur', 'scguns:sulfur_ore');
		event.add('forge:ores/sulfur', 'scguns:deepslate_sulfur_ore');
		event.add('forge:ores/sulfur', 'scguns:nether_sulfur_ore');
		event.add('forge:gems/sulfur', 'scguns:sulfur_chunk');
	}
	
	if (!platform.modIsLoaded('butcher')) {
		event.add('forge:ores/sulfur', 'butcher:sulfurore');
		event.add('forge:ores/sulfur', 'butcher:deepslatesulfurore');	
	}
})