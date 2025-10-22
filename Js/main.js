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