const transition = '.3s linear';
const mainTl = gsap.timeline({
    scrollTrigger: '.main'
});

const headerTl = gsap.timeline({
    scrollTrigger: '.header'
})

const mainImgTl = gsap.timeline({
    scrollTrigger:  '.main__images_abs'
})

headerTl.fromTo('.logo', 
{
    y: -200,
    opacity: 0,
},
{
    x: 0,
    y: 0,
    opacity: 1,
    delay: 1.5
})
.fromTo('.header__content .nav li', 
{
    y: -200,
    opacity: 0,
},
{
    y: 0,
    opacity: 1,
    stagger: .3,
    transition: transition,
})


gsap.utils.toArray('.title').forEach(title => {
    gsap.fromTo(title, {
        x: -300,
        opacity: 0
    },
    {
        x: 0,
        opacity: 1,
        scrollTrigger: title,
        duration: 1.5,
        delay: .5
    })   
});

// MAIN START

mainTl.fromTo('.main__title', 
{
    x: -200,
    opacity: 0,
},
{
    x: 0,
    opacity: 1,
    delay: .4,
})
.fromTo('.main__title_image', 
{
    x: -400,
    opacity: 0
}, 
{
    x: 0,
    opacity: 1
})
.fromTo('.main__title .circle', {
    opacity: 1,
}, {
    motionPath: {
        path: document.querySelector('.main__title_image svg path'),
        align: '.main__title_image-path',
        alignOrigin: [.5, .5],
    },
    opacity: 1
})
.to('.main__title_image path', 
{
    strokeOpacity: 1,
    duration: .4
})
.fromTo('.main__buttons .button_bordered', 
{
    x: 80,
    opacity: 0,
    transition: 0
},
{
    x: 0,
    opacity: 1,
    stagger: .2,
    transition: transition,
    duration: .3
})
.fromTo('.scroll-down__button', 
{
    y: 100,
    opacity: 0,
    transition: 0,
},
{
    x: 0,
    y: 0,
    opacity: 1,
    transition: transition,
    duration: .5
})
.fromTo('.scroll-down__button img', 
{
    rotate: 180
},
{
    rotate: 0
})

mainImgTl.fromTo('.main__images svg path',
{
    y: 10,
    opacity: 0,
},
{
    y: 0,
    opacity: 1,
    stagger: .01,
    delay: .5
})
.fromTo('.main__images_abs', 
{
    y: 120,
    opacity: 0
},
{
    y: 0,
    opacity: 1,
    duration: 2.5
})

// MAIN END

// ABOUT SECTION START 

gsap.fromTo('.about-me__images-bg path',
{
    y: 10,
    opacity: 0,
}, 
{
    y: 0,
    opacity: 1,
    stagger: .01,
    scrollTrigger: '.about-me__images'
})

gsap.fromTo('.about-me__images_abs',
{
    y: 100,
    opacity: 0,
}, 
{
    y: 0,
    opacity: 1,
    duration: 1.5,
    delay: 1.5,
    scrollTrigger: '.about-me__images'
})


gsap.fromTo('.about-me__info p', 
    {
        x: -200,
        opacity: 0,
    }, 
    {
        x: 0,
        opacity: 1,
        duration: 1.5,
        delay: 1.5,
        scrollTrigger: '.about-me__info'
})

gsap.fromTo('.about-me__button', 
    {
        opacity: 0,
        transition: 0,
    }, 
    {
        opacity: 1,
        duration: 1.5,
        delay: .5,
        transition: transition,
        scrollTrigger: '.about-me__info'
})

// ABOUT SECTION END 

// SKILLS SECTION START

gsap.fromTo('.tabs__button', {
    x: 80,
    opacity: 0,
    transition: 0,
}, 
{
    x: 0,
    opacity: 1,
    stagger: .3,
    delay: 1.5,
    transition: transition,
    scrollTrigger: '.tabs'
}) 

gsap.fromTo('.tabs__item ', 
    {
        scale: .5,
        opacity: 0,
    }, 
    {
        scale: 1,
        opacity: 1,
        stagger: .1,
        scrollTrigger: '.tabs'
})

// SKILLS SECTION END

// CONTACT SECTION START

const contactArrowTl = gsap.timeline({
    scrollTrigger: '.contact__text-image'
})

contactArrowTl
.from('.contact__text-image .circle', {
    opacity: 0,
})
.fromTo('.contact__text-image div svg', {
    x: -200,
    opacity: 0 
}, {
    x: 0,
    opacity: 1
})
.fromTo('.contact__text-image .circle', {
    opacity: 1,
}, {
    duration: 1,
    opacity: 1,
    motionPath: {
        path: document.querySelector('.contact__text-image div path'),
        align: '.contact__text-image div path',
        alignOrigin: [.5, .5],
    },
})
.to('.contact__text-image .circle', {
    opacity: 0,
})
.fromTo('.contact__text-image div path', {
    strokeOpacity: .2
}, {
    strokeOpacity: 1
})
.fromTo('.contact__text-image > svg', {
    opacity: 0,
    y: 50
}, {
    opacity: 1,
    y: 0
})

gsap.fromTo('.contact__form-label', {
    opacity: 0,
    transition: 0
}, {
    opacity: 1,
    duration: 2,
    transition: transition,
    scrollTrigger: '.contact__form'
})

gsap.fromTo('.contact__form-input', {
    opacity: 0,
    // transition: 0   
}, {
    opacity: 1,
    duration: 2,
    // transition: transition,
    scrollTrigger: '.contact__form'
})

gsap.fromTo('.contact__form-textarea', {
    opacity: 0,
    transition: 0   
}, {
    opacity: 1,
    transition: transition,
    duration: 2,
    scrollTrigger: '.contact__form'
})

gsap.fromTo('.contact__form-button', {
    scale: .4,
    opacity: 0,
    transition: 0   
}, {
    scale: 1,
    opacity: 1,
    duration: 2,
    transition: transition,
    scrollTrigger: '.contact__form'
})

// CONTACT SECTION END

// FO0TER START 

gsap.fromTo('.footer .nav li', {
    scale: .2,
    opacity: 0,
},
{
    scale: 1,
    opacity: 1,
    stagger: .3,
    transition: transition,
    scrollTrigger: '.footer'
})

gsap.fromTo('.social', {
    opacity: 0,
},
{
    opacity: 1,
    transition: transition,
    scrollTrigger: '.footer',
    delay: 1    
})


// FOOTER END 