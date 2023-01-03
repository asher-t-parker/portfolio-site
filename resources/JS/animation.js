let animation = anime.timeline({
    loop: true
    });

// ADJ 1
animation.add({
    targets: '.adj1 span',
    translateY: 20,
    opacity: 1,
    delay: anime.stagger(50),
})
animation.add({
    targets: 'adj1 span',
    duration: 800
})
animation.add({
    targets: '.adj1 span',
    translateY: -20,
    opacity: 0,
    delay: anime.stagger(80),
})

//ADJ 2
animation.add({
    targets: '.adj2 span',
    translateY: 20,
    opacity: 1,
    delay: anime.stagger(50),
})
animation.add({
    targets: 'adj2 span',
    duration: 800
})
animation.add({
    targets: '.adj2 span',
    translateY: -20,
    opacity: 0,
    delay: anime.stagger(80),
})

//ADJ 3
animation.add({
    targets: '.adj3 span',
    translateY: 20,
    opacity: 1,
    delay: anime.stagger(50),
})
animation.add({
    targets: 'adj3 span',
    duration: 800
})
animation.add({
    targets: '.adj3 span',
    translateY: -20,
    opacity: 0,
    delay: anime.stagger(80),
})