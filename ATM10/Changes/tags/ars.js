// Drygmy Functions
const DRYGMY_UUID = '7400926d-1007-4e53-880f-b43e67f2bf29';
function onlyDrygmy(event, entity) {
    return event.addEntityModifier(entity).matchAttackerCustom((attacker) => attacker.uuid.toString() == DRYGMY_UUID);
}

ServerEvents.tags('entity_type', event => {
	
	// Remove Restriction on Iron Golem
	event.remove("ars_nouveau:drygmy_blacklist", ["minecraft:iron_golem"]);
	
})

LootJS.modifiers((event) => {
	// Add Wither Drops
    onlyDrygmy(event, 'minecraft:wither').addLoot('minecraft:nether_star');
});