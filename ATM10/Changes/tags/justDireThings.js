ServerEvents.tags('block', event => {
  // Just Dire Things - XRay
  event.add('c:ores', 'allthemodium:allthemodium_ore')
  event.add('c:ores', 'allthemodium:allthemodium_slate_ore');
  
  event.add('c:ores', 'allthemodium:vibranium_ore');
  event.add('c:ores', 'allthemodium:other_vibranium_ore');
  
  event.add('c:ores', 'allthemodium:unobtainium_ore');
  
  // Modular Bees
  event.remove('justdirethings:tick_speed_deny', 'modularbees:modular_beehive_core');
})

ServerEvents.tags('entity_type', event => {
	//event.remove(tag, block)
	
    // Productive Bees
	event.remove('justdirethings:paradox_deny', /productivebees:/)
	
	// Allthemodium
	event.remove('justdirethings:paradox_deny', 'allthemodium:piglich')
    
    // Occultism
    event.remove('justdirethings:paradox_deny', /occultism:/)
	
	// Create
	event.remove('justdirethings:paradox_deny', 'create:package')

    // Mekanism
    event.remove('justdirethings:paradox_deny', 'mekanism:robit');

    // Ars 
    event.remove('justdirethings:paradox_deny', 'ars_nouveau:animated_block');
	
});