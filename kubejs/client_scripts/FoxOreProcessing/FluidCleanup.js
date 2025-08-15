JEIEvents.hideFluids(event => {
	let itemsToHide = [];
	itemsToHide.push('iron');
	itemsToHide.push('copper');
	itemsToHide.push('gold');
	itemsToHide.push('netherite');
	itemsToHide.push('zinc');
	itemsToHide.push('brass');
	itemsToHide.push('bismuth');
	itemsToHide.push('silver');
	itemsToHide.push('mercury');
	itemsToHide.push('electrum');
	itemsToHide.push('necromium');
	itemsToHide.push('tin');
	itemsToHide.push('bronze');
	itemsToHide.push('steel');
	itemsToHide.forEach(item => {
		event.hide('molten_metals:molten_' + item);
	});
})