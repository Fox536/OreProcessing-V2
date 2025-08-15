JEIEvents.hideFluids(event => {
	let itemsToHide = [];
	itemsToHide.push('bronze');
    itemsToHide.push('constantan');
    itemsToHide.push('electrum');
    itemsToHide.push('enderium');
    itemsToHide.push('lumium');
    itemsToHide.push('signalum');
    itemsToHide.push('invar');
    itemsToHide.push('brass');
	itemsToHide.forEach(item => {
		event.hide('alltheores:' + item + '_dust');
	});
})