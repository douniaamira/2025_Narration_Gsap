/** GSAP Plugins */
gsap.registerPlugin(ScrollTrigger, Observer, ScrollToPlugin, Draggable, MotionPathPlugin);

/** GSAP Draggable */

Draggable.create("#nefertiti",{
    type:"x,y",
    bounds:'#section2'

})

Draggable.create("#key",{
    type:"x,y",
    bounds:'#section2'

})
 gsap.from("#section2__text", {
    scrollTrigger: {
      trigger: "#section2",
      start: "top 60%",
      end:'top 20%',
      markers:true,
      toggleActions:  "play none none none",
      scrub:1,
    },

    x: "-100vw",
    duration: 1,
  });