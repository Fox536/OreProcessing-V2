//Platform.mods.kubejs.name = 'TFCreate'
//StartupEvents.registry('item', (event) => {
//ServerEvents.highPriorityRecipes(event => {
ItemEvents.modification(event => {
    let items = [
        'scguns:arc_worker',
		'scguns:astella',
		'scguns:auvtomag',
		'scguns:big_bore',
		'scguns:blasphemy',
		'scguns:blunderbuss',
		'scguns:bomb_lance',
		'scguns:boomstick',
		'scguns:brawler',
		'scguns:bruiser',
		'scguns:callwell_conversion',
		'scguns:callwell',
		'scguns:carapice',
		'scguns:cogloader',
		'scguns:combat_shotgun',
		'scguns:cr4k_mining_laser',
		'scguns:cyclone',
		'scguns:crusader',
		'scguns:dark_matter',
		'scguns:defender_pistol',
		'scguns:dozier_rl',
		'scguns:earths_corpse',
		'scguns:echoes_2',
		'scguns:empty_blasphemy',
		'scguns:felix_memorial',
		'scguns:flayed_god',
		'scguns:flintlock_pistol',
		'scguns:floundergat',
		'scguns:forlorn_hope',
		'scguns:freyr',
		'scguns:gale',
		'scguns:gattaler',
		'scguns:gauss_rifle',
		'scguns:grandle',
		'scguns:grapeshot',
		'scguns:greaser_smg',
		'scguns:gyrojet_pistol',
		'scguns:handcannon',
		'scguns:howler_conversion',
		'scguns:howler',
		'scguns:inertial',
		'scguns:iron_javelin',
		'scguns:iron_spear',
		'scguns:krauser',
		'scguns:jackhammer',
		'scguns:laser_musket',
		'scguns:llr_director',
		'scguns:lockewood',
		'scguns:locust',
		'scguns:lone_wonder',
		'scguns:m22_waltz',
		'scguns:m3_carabine',
		'scguns:makeshift_rifle',
		'scguns:mangalitsa',
		'scguns:marlin',
		'scguns:mas_55',
		'scguns:mk43_rifle',
		'scguns:musket',
		'scguns:nervepinch',
		'scguns:newborn_cyst',
		'scguns:niami',
		'scguns:osgood_50',
		'scguns:pax',
		'scguns:plasgun',
		'scguns:plasmabuss',
		'scguns:prima_materia',
		'scguns:prush_gun',
		'scguns:pulsar',
		'scguns:pyroclastic_flow',
		'scguns:rat_king_and_queen',
		'scguns:raygun',
		'scguns:repeating_musket',
		'scguns:rocket_rifle',
		'scguns:rusty_gnat',
		'scguns:saketini',
		'scguns:scrapper',
		'scguns:scratches',
		'scguns:sculk_resonator',
		'scguns:sequoia',
		'scguns:shard_culler',
		'scguns:shellurker',
		'scguns:soul_drummer',
		'scguns:spitfire',
		'scguns:super_shotgun',
		'scguns:thunderhead',
		'scguns:trenchur',
		'scguns:ultra_knight_hawk',
		'scguns:umax_pistol',
		'scguns:uppercut',
		'scguns:valora',
		'scguns:venturi',
		'scguns:vulcanic_repeater',
		'scguns:waltz_conversion',
		'scguns:whispers',
		'scguns:winnie',
		
		'scguns:blank_mold',
		'scguns:small_casing_mold',
		'scguns:medium_casing_mold',
		'scguns:large_casing_mold',
		'scguns:bullet_mold',
		'scguns:disc_mold',
		'scguns:gun_parts_mold',
		
    ];
	
	items.forEach((itemID) => {
        event.modify(itemID, item => {
			item.maxDamage = -1
			//item.unbreakable()
			//item.glint = false
		})
    })
});

ItemEvents.modification(event => {
	
	
	
	
})

/*

ServerEvents.highPriorityRecipes(event => {
    
})

*/