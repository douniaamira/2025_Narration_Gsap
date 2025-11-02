/** GSAP Plugins */
gsap.registerPlugin(ScrollTrigger, Observer, ScrollToPlugin, Draggable, MotionPathPlugin);



/** GSAP Draggable  Section 2  */

Draggable.create("#nefertiti",{
    type:"x,y",
    bounds:'#section2'

})

 gsap.from("#section2__text", {
    scrollTrigger: {
      trigger: "#section2",
      start: "top 60%",
      end:'top 20%',
      /**markers:true**/
      toggleActions:  "play none none none",
      scrub:1,
    },

    x: "-100vw",
    duration: 1,
  });

/** GSAP Animation - Section 3   **/


let tlCarroussel = gsap.timeline({
  scrollTrigger: {
    trigger: "#monuments",   
    start: "top top",
    end: "+=1500",
    scrub: 1,
    pin: "#section3__image",   
  }
});

tlCarroussel
  .to("#section3__image", { x: "-100vw", duration: 10 })
  .to("#section3__image", { x: 0, duration: 10 });

/** GSAP Animation - Section 4 Horizontal Scroll **/



const sections4 = gsap.utils.toArray("#section4__image .culinaire");


gsap.to(sections4, {
  xPercent: -100 * (sections4.length - 1), 
  ease: "none",
  scrollTrigger: {
    trigger: "#plats",            
    pin: true,                
    scrub: 1,                   
    snap: 1 / (sections4.length - 1), 
    end: "+=2000"                  
  }
});



let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: "#plats",
    start: "top 100%",
    end: "top 80%",
    toggleActions: "play none reverse reset",
    scrub: 1,
    
  }
});

tl4.from("#koshari", {x: "-100vw", opacity: 0})
   .from("#molokhia", {x: "100vw", opacity: 0})
   .from("#fesikh", {x: "-100vw", opacity: 0})
   .from("#mahshi", {x: "100vw", opacity: 0});

/*****GSAP Animation Section 5 
 */

gsap.from("#Vacances .destination1", {
  y: 150,              
  opacity: 0,         
  duration: 1.5, 
  scale:0.9,  
  boxShadow:" 0px 8px 20px rgba(0,0,0,0.25)",    
  ease: "power2.out", 
  stagger: 0.3,       
  scrollTrigger: {
    trigger: "#holiday",  
    start: "top 80%",     
    toggleActions: "play none none none",
    once: true           
  }
});
/** GSAP Animation - Section - MatchMedia ---------  */
let mm = gsap.matchMedia();

mm.add(
  {
    mobile: "(max-width: 800px)",
    desktop: "(min-width: 801px)"
  },
  (context) => {
    let { mobile, desktop } = context.conditions;

  
  }
);
