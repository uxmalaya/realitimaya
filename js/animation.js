var tl = gsap.timeline().repeat(-1).repeatDelay(5);

tl.addLabel('bg', 0);
tl.addLabel('img', 2);
tl.addLabel('text', 3);
tl.addLabel('top', 4);
tl.addLabel('bottom', 5);

tl.from('.bg1', {left: '100%' , duration: 3, ease:'expo.inOut'}, 'bg');
tl.from('.bg2', {left: '100%' , duration: 3, ease:'expo.inOut', delay: .5}, 'bg');

tl.from('.banner', {x: 100, opacity:0, duration: 4 , ease:'expo.out'}, 'img');
tl.from('.anim-text', {y: 25, opacity:0, duration:4, ease:'expo.out', stagger: .3}, 'text');

tl.from('.logo', {y: 25, opacity:0, duration: 3, ease:'expo.out'}, 'top');
tl.from('.menu ul li', {y: 25, opacity:0, duration:3, ease:'expo.out', stagger: .3}, 'top');


tl.from('.bottom', {y: 25, opacity:0, duration: 3, ease:'expo.out'}, 'bottom');
tl.from('.social .inner a', {y: 25, opacity:0, duration:3, ease:'expo.out', stagger: .3}, 'bottom');

