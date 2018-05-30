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
  .from(".one img", 0.6, {
    opacity: 0,
    y: 50
  })
  .from(".one p", 0.4, {
    opacity: 0,
    y: 30
  })
  .from(".one p span", 0.3, {
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
  );
