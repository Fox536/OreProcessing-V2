StartupEvents.registry('item', event => {
	let items = [];

	if (Platform.isLoaded('alltheores')) {
		items.push(['crushed_raw_iridium', 'Crushed Raw Iridium']);
	}

	if (Platform.isLoaded('allthemodium')) {
		items.push(['crushed_raw_allthemodium', 'Crushed Raw Allthemodium']);
		items.push(['crushed_raw_vibranium', 'Crushed Raw Vibranium']);
		items.push(['crushed_raw_unobtainium', 'Crushed Raw Unobtainium']);
	}
	
	if (Platform.isLoaded('tconstruct')) {
		items.push(['crushed_raw_cobalt', 'Crushed Raw Cobalt']);
	}

	if (Platform.isLoaded('silentgear')) {
		items.push(['crushed_raw_crimson_iron', 'Crushed Raw Crimson Iron']);
		items.push(['crushed_raw_azure_silver', 'Crushed Raw Azure Silver']);
	}
	
	items.forEach(item => {
		event.create(item[0]).displayName(item[1]);
	});
});