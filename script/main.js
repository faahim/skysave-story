// ToDos:

// 1. Find a good avatar SVG
// Done

// 2. Find a lightweight world map SVG
// 3. Learn to draw line from a to b in SVG
// 4. Make the animation timeline

const story = new TimelineMax();

story
  .to(".story-container", 0.1, {
    visibility: "visible"
  })
  .from(".avatar img", 0.6, {
    opacity: 0,
    y: 50
  })
  .to(
    ".avatar img",
    0.3,
    {
      x: 0,
      width: 150
    },
    "+=0.5"
  )
  .from(".meet", 0.4, {
    opacity: 0,
    y: 30
  })
  .from(".meet span", 0.3, {
    opacity: 0,
    y: 20
  })
  .to(
    ".one p",
    0.3,
    {
      opacity: 0,
      y: 30
    },
    "+=2"
  )
  .to(
    ".one img",
    0.3,
    {
      opacity: 0,
      y: 50
    },
    "-=0.1"
  )
  .from(".destinations", "0.4", {
    opacity: 0,
    y: 30,
    skew: "25deg"
  })
  .staggerFrom(
    ".destinations span",
    0.5,
    {
      opacity: 0,
      x: 20
    },
    0.2
  )
  .staggerTo(
    ".destinations span",
    0.3,
    {
      opacity: 0,
      x: 20
    },
    0.1,
    "+=1.5"
  )
  .to(".destinations", 0.3, {
    opacity: 0,
    y: 30,
    skew: "25deg"
  })
  .staggerFrom(
    ".two p",
    0.4,
    {
      opacity: 0,
      y: 30
    },
    0.2
  )
  .staggerTo(
    ".two p",
    0.3,
    {
      opacity: 0,
      y: 30
    },
    -0.2,
    "+=2.2"
  )
  .from(".save", 0.4, {
    opacity: 0,
    scale: 0.1,
    y: 20
  })
  .to(
    ".save",
    0.3,
    {
      opacity: 0,
      scale: 0.1,
      y: 20
    },
    "+=1.5"
  )
  .from(".inputs", 0.5, {
    opacity: 0
  })
  .to(
    ".inputs",
    0.3,
    {
      opacity: 0
    },
    "+=1.5"
  );
