function page1Animation(){
    var tl=gsap.timeline()
tl.from("nav h1,nav h4, nav button",{
    y:-40,
    opacity:0,
    duration:0.8,
    delay:0.5,
    stagger:0.20

})

tl.from(".center-part1 h1",{
    x:-200,
    opacity:0,
    duration:0.5,
    ease: "bounce.out",
})

tl.from(".center-part1 p",{
    x:-100,
    opacity:0,
    duration:0.4,
    ease: "bounce.out",
})

tl.from(".center-part1 button",{
    opacity:0
})

tl.from(".center-part2 img",{
    opacity:0,
    duration:0.5,
    x:200
},"-=1")

tl.from(".section1bottom img",{
    opacity:0,
    y:30,
    stagger:0.20,
    duration:0.7
})

}
page1Animation()


var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".container",
      start: "top 80%",
      end: "top 50%",
      scrub: 2,
      markers: true
    }
  });


  tl2.from(".services",{
    y:30,
    opacity:0
})


  tl2.from(".elem.line1.left", {
    x: -300,
    opacity: 0,
    duration: 1
  }, "anim1");
  
  tl2.from(".elem.line1.right", {
    x: 300,
    opacity: 0,
    duration: 1
  }, "anim1");
  
  tl2.from(".elem.line2.left", {
    x: -300,
    opacity: 0,
    duration: 1
  }, "anim2");
  
  tl2.from(".elem.line2.right", {
    x: 300,
    opacity: 0,
    duration: 1
  }, "anim2");