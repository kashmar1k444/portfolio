const line = document.querySelector('.line'),
  header = document.querySelector('.header'),
  headerNav = document.querySelector('.header .nav'),
  burger = document.querySelector('.burger'),
  scrollDownBtn = document.querySelector('.scroll-down__button'),
  anchors = document.querySelectorAll("a[href^='#']"),
  aboutMeBtn = document.querySelector('.about-me__button'),
  aboutMeText = document.querySelector('.about-me__info p'),
  tabs = document.querySelector('.tabs'),
  form = document.querySelector('.contact__form'),
  nameRg = /^.{4,}$/,
  emailRg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;



const setLineStyles = () => {
    const linePositionLeft = scrollDownBtn.offsetLeft + scrollDownBtn.offsetParent.offsetLeft + scrollDownBtn.clientWidth / 2 - 1;
    line.style.left = `${linePositionLeft }px`;
    line.style.height = `${document.body.offsetHeight}px`
}

// const animateScroll = (sel) => {
//     const t = 500,
//     start = document.documentElement.scrollTop,
//     end = document.querySelector(sel).getBoundingClientRect().top,
//     res = start + end;
//     let startTime = null;

//     const animate = (timestep) => {
//         if(!startTime) startTime = timestep;
//         let progress = timestep - startTime,
//         current = document.documentElement.scrollTop;
//         document.documentElement.scrollTop = start + (progress * end  / t)
//         Math.abs(res - current) > 15 ?  requestAnimationFrame(animate) : document.documentElement.scrollTop = res
//     }
//     requestAnimationFrame(animate)
// }

const verifyInput = (value, regex, labelName) => {
    const label =  document.querySelector(`[data-label=${labelName}]`),
        result = regex.test(value);
    result ? label.classList.remove('error') : label.classList.add('error');
    return result
}


const initTabs = (wrapper) => {
    const tabsHeader = wrapper.querySelector('.tabs__header'),
    tabsBody = wrapper.querySelector('.tabs__body'),
    tabsItems = wrapper.querySelectorAll('.tabs__item');

    const setActiveItems = (filter) => {

        const itemsState = Flip.getState(tabsItems),
        tabsBodyState = Flip.getState(tabsBody);

        tabsItems.forEach(el => {
            el.getAttribute('data-filter') == filter || filter == 'all' ? el.style.display = 'inline-flex' : el.style.display = 'none';
        })
        
        Flip.from(tabsBodyState, {
            duration: 1,
        });

        Flip.from(itemsState, {
            duration: 1,
            absolute: true,
            scale: true,
            ease: "power1.inOut",
            stagger: 0.0,
        onEnter: elements => gsap.fromTo(elements, {opacity: 0, scale: 0}, {opacity: 1, scale: 1, duration: 1, transform: 0}),
        onLeave: elements => gsap.to(elements, {opacity: 0, scale: 0, duration: 1}),
        })
    }

    const setFilter = (target) => {
        const filter = target.getAttribute('data-filter');
        tabsHeader.querySelector('.active').classList.remove('active');
        target.classList.add('active');
        setActiveItems(filter)
    }

    tabsHeader.addEventListener('click', (e) => {
        const target = e.target;
        if(target && target.classList.contains('tabs__button')){
            setFilter(target);
        }
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form),
        name = formData.get('name').trim(),
        email = formData.get('email').trim(),
        varifyName= verifyInput(name, nameRg , 'name'),
        varifyEmail = verifyInput(email, emailRg, 'email');
    if(varifyName && varifyEmail) {
        fetch('/send.php', {
            method: 'post',
            body: FormData
        })
        .then(res => {
            console.log('123');
        })
    }

})

scrollDownBtn.addEventListener('click', () => {

    gsap.to(window, {
        scrollTo: {y: document.querySelector('#about'), autoKill: true},
        duration: 1,
    });

})

aboutMeBtn.addEventListener('click', () => {

    let state = Flip.getState(aboutMeText);

    aboutMeText.classList.toggle('active');

    aboutMeText.classList.contains('active') ? aboutMeBtn.innerText = 'Read Less' : aboutMeBtn.innerText = 'Read More';
 
    Flip.from(state, {
        duration: .5,
    });
})

burger.addEventListener('click', () => {

    const state = Flip.getState(headerNav);


    burger.classList.toggle('active');
    headerNav.classList.toggle('active');

    Flip.from(state, {
        duration: 1,
        absolute: true,
        ease: "power1.inOut",
        onEnter: el => gsap.fromTo(el, {x: '-100%'}, {x: '0', duration: 1}),
        onLeave: el => gsap.to(el, {x: '-100%', duration: 1}),
    })

})


window.addEventListener('resize', () => {
    setLineStyles();
})

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if(scrollY > 100){
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
})

anchors.forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        const id = el.getAttribute('href');
        const section = document.querySelector(id);
        gsap.to(window, {
			scrollTo: {y: section, autoKill: true},
			duration: 1,
		});
    })
})

initTabs(tabs);
setLineStyles();
