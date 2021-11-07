const tl4 = gsap.timeline({defaults: {ease:"power1.out"}});


tl4.to('.text',{y:'0%', duration: 1, stagger: 0.25});
tl4.to('.slider', {y:'-100%', duration: 1.5, delay: 0.5 });
tl4.to('.intro', {y:'-100%',duration:1}, '-=1.5')
tl4.fromTo('.navbar',{opacity:0}, {opacity:1, duration:1})
tl4.fromTo('.title',{opacity:0}, {opacity:1, duration:.5}, '-=.5')
tl4.fromTo('.logo',{opacity:0}, {opacity:1, duration:1}, '-=1.5')

let tl = gsap.timeline({
    scrollTrigger:{
        trigger: ".home",
        start:"0%",
        end: "100%",
        scrub: 1,
    },
});


let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: ".home",
        start:"0%",
        end: "80%",
        scrub: 1,
    },
});


let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger: ".home",
        start:"0%",
        end: "150%",
        scrub: 1,
        pin: true,
        pinSpacing:false,
    },
});

tl.fromTo('#sliding-text', { y:0 }, { y: -1000 });
tl2.fromTo('.logo',{scale:6}, {scale:1, top: '1.7rem', left:'8.5em', x:"50%", y:"50%"});


