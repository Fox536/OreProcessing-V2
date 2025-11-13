ServerEvents.tags('entity_type', allthemods => {
	
	allthemods.remove('c:bosses', "#neoforge:bosses");
	
	allthemods.remove('allthemods:jank_blacklist', 'ars_nouveau:animated_block');
	allthemods.remove('allthemods:jank_blacklist', 'artifacts:mimic');
	allthemods.remove('allthemods:jank_blacklist', 'create:package');
	allthemods.remove('allthemods:jank_blacklist', '#c:bosses');
	allthemods.remove('allthemods:jank_blacklist', '@occultism');
	allthemods.remove('allthemods:jank_blacklist', '@productivebees');
	allthemods.remove('allthemods:jank_blacklist', 'forbidden_arcanus:corrupt_lost_soul');
	allthemods.remove('allthemods:jank_blacklist', 'forbidden_arcanus:lost_soul');
	allthemods.remove('allthemods:jank_blacklist', 'forbidden_arcanus:enchanted_lost_soul');
	
	
	allthemods.remove('apothic_spawners:blacklisted_from_spawners', '#allthemods:jank_blacklist')
	allthemods.remove('enderio:soul_vial_blacklist', '#allthemods:jank_blacklist')
	allthemods.remove('industrialforegoing:mob_duplicator_blacklist', '#allthemods:jank_blacklist')
    allthemods.remove('industrialforegoing:mob_crusher_blacklist', '#allthemods:jank_blacklist')
    allthemods.remove('justdirethings:paradox_deny', '#allthemods:jank_blacklist');
    allthemods.remove('mob_grinding_utils:no_swab', '#allthemods:jank_blacklist')
    allthemods.remove('mob_grinding_utils:no_spawn', '#allthemods:jank_blacklist')
    allthemods.remove('enderio:spawner_blacklist', '#allthemods:jank_blacklist')
    allthemods.remove('ars_additions:source_spawner_denylist', '#allthemods:jank_blacklist')
	
});

ServerEvents.tags('item', allthemods => {
	allthemods.remove('forbidden_arcanus:modifier/eternal_incompatible', 'ars_additions:undying_charm');
	allthemods.remove('forbidden_arcanus:modifier/eternal_incompatible', 'modularbees:electrode_copper');
	allthemods.remove('forbidden_arcanus:modifier/eternal_incompatible', 'modularbees:electrode_iron');
	allthemods.remove('forbidden_arcanus:modifier/eternal_incompatible', 'modularbees:electrode_gold');
	allthemods.remove('forbidden_arcanus:modifier/eternal_incompatible', 'modularbees:electrode_netherite');
})