// ToDos:

// 1. Find a good avatar SVG
// Done

// 2. Find a lightweight world map SVG
// Done

// 3. Learn to draw line from a to b in SVG
//Done

// 4. Find Catherine's avater
// 5. Make multiple path line

// Get countries location coordinates on the map
const pathBegin = document.getElementById("US").getBBox();

const dest1 = document.getElementById("IT").getBBox();

const dest2 = document.getElementById("GR").getBBox();

const dest3 = document.getElementById("FR").getBBox();

const dest4 = document.getElementById("DE").getBBox();

const dest5 = document.getElementById("AT").getBBox();

// Constructs position dataset of contries for plotting dots
const lineData = [
  [
    [pathBegin.x + pathBegin.width / 2, pathBegin.y + pathBegin.height / 2],
    [dest1.x + dest1.width / 2, dest1.y + dest1.height / 2],
    [dest2.x + dest2.width / 2, dest2.y + dest2.height / 2],
    [dest3.x + dest3.width / 2, dest3.y + dest3.height / 2],
    [dest4.x + dest4.width / 2, dest4.y + dest4.height / 2],
    [dest5.x + dest5.width / 2, dest5.y + dest5.height / 2]
  ],
  [
    [pathBegin.x + pathBegin.width / 2, pathBegin.y + pathBegin.height / 2],
    [dest4.x + dest4.width / 2, dest4.y + dest4.height / 2],
    [dest1.x + dest1.width / 2, dest1.y + dest1.height / 2],
    [dest5.x + dest5.width / 2, dest5.y + dest5.height / 2],
    [dest3.x + dest3.width / 2, dest3.y + dest3.height / 2],
    [dest2.x + dest2.width / 2, dest2.y + dest2.height / 2]
  ],
  [
    [pathBegin.x + pathBegin.width / 2, pathBegin.y + pathBegin.height / 2],
    [dest3.x + dest3.width / 2, dest3.y + dest3.height / 2],
    [dest1.x + dest1.width / 2, dest1.y + dest1.height / 2],
    [dest2.x + dest2.width / 2, dest2.y + dest2.height / 2],
    [dest5.x + dest5.width / 2, dest5.y + dest5.height / 2],
    [dest4.x + dest4.width / 2, dest4.y + dest4.height / 2]
  ],
  [
    [pathBegin.x + pathBegin.width / 2, pathBegin.y + pathBegin.height / 2],
    [dest5.x + dest5.width / 2, dest5.y + dest5.height / 2],
    [dest4.x + dest4.width / 2, dest4.y + dest4.height / 2],
    [dest1.x + dest1.width / 2, dest1.y + dest1.height / 2],
    [dest2.x + dest2.width / 2, dest2.y + dest2.height / 2],
    [dest3.x + dest3.width / 2, dest3.y + dest3.height / 2]
  ],
  [
    [pathBegin.x + pathBegin.width / 2, pathBegin.y + pathBegin.height / 2],
    [dest2.x + dest2.width / 2, dest2.y + dest2.height / 2],
    [dest3.x + dest3.width / 2, dest3.y + dest3.height / 2],
    [dest5.x + dest5.width / 2, dest5.y + dest5.height / 2],
    [dest1.x + dest1.width / 2, dest1.y + dest1.height / 2],
    [dest4.x + dest4.width / 2, dest4.y + dest4.height / 2]
  ]
];

const lineGen = d3
  .line()
  .x(d => d[0])
  .y(d => d[1]);

const mapEle = d3.select("#world-map");

lineData.map((line, i) => {
  let className = i === 1 ? "path-dash" : "path-dash path-to-fade";
  mapEle
    .append("path")
    .attr("d", lineGen(lineData[i]))
    .attr("stroke", "blue")
    .attr("stroke-width", 2)
    .attr("fill", "none")
    .attr("class", className);
});

console.log(document.getElementsByClassName("path-dash")[0].getTotalLength());

lineData[0].map(coor => {
  mapEle
    .append("circle")
    .attr("cx", coor[0])
    .attr("cy", coor[1])
    .attr("r", "5px")
    .attr("fill", "purple")
    .attr("class", "map-plots");
});

console.log(pathBegin, " ", dest1, JSON.stringify(lineData));
console.log(d3);

const story = new TimelineMax();
const animWait = "+=1.5";
story.set(".input-box", { transformPerspective: 800 });
story.set("#world-map", { transformPerspective: 800 });
story.set(".path-dash", {
  strokeDasharray: i => {
    const length = document
      .getElementsByClassName("path-dash")
      [i].getTotalLength();
    console.log(i, " blaah ", length);
    return length;
  },
  strokeDashoffset: 0
});

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
  .from(".holidays", 0.4, {
    opacity: 0,
    y: 30
  })
  .to(
    ".holidays",
    0.3,
    {
      opacity: 0,
      y: 50
    },
    "+=2"
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
  .from(".duration", 0.3, {
    opacity: 0,
    y: 30
  })
  .to(
    ".duration",
    0.2,
    {
      opacity: 0,
      y: 30
    },
    animWait
  )
  .staggerTo(
    ".destinations span",
    0.3,
    {
      opacity: 0,
      x: 20
    },
    0.1,
    "+=0.2"
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
    y: -20
  })
  .from(".inputs", 0.5, {
    opacity: 0,
    y: 30
  })
  .to(".avatar img", 0.3, {
    scale: 0.1,
    opacity: 0
  })
  .from(
    ".input-box",
    0.5,
    {
      opacity: 0,
      scale: 0.7,
      y: 30,
      skewX: "15deg"
    },
    "boxAppear"
  )
  .to(
    ".input-box",
    0.5,
    {
      x: -250
    },
    "boxAppear"
  )
  .to(
    ".inputs",
    0.5,
    {
      x: 250,
      y: 120
    },
    "boxAppear"
  )
  .to(
    ".home-before",
    0.1,
    {
      visibility: "hidden"
    },
    "+=0.4"
  )
  .from(".home-after", 0.2, {
    opacity: 0
  })
  .to(
    ".date-before",
    0.1,
    {
      visibility: "hidden"
    },
    "+=0.3"
  )
  .from(".date-after", 0.2, {
    opacity: 0
  })
  .to(
    ".destination1-before",
    0.1,
    {
      visibility: "hidden"
    },
    "+=0.2"
  )
  .from(".destination1-after", 0.2, {
    opacity: 0
  })
  .to(
    ".stay1-before",
    0.1,
    {
      visibility: "hidden"
    },
    "+=0.1"
  )
  .from(".stay1-after", 0.2, {
    opacity: 0
  })
  .to(".destination2-before", 0.1, {
    visibility: "hidden"
  })
  .from(".destination2-after", 0.2, {
    opacity: 0
  })
  .to(".stay2-before", 0.1, {
    visibility: "hidden"
  })
  .from(".stay2-after", 0.2, {
    opacity: 0
  })
  .to(".destination3-before", 0.1, {
    visibility: "hidden"
  })
  .from(".destination3-after", 0.2, {
    opacity: 0
  })
  .to(".stay3-before", 0.1, {
    visibility: "hidden"
  })
  .from(".stay3-after", 0.2, {
    opacity: 0
  })
  .to(".submit-btn-rect", 0.2, {
    fill: "#7ea1bb"
  })
  .to(".svg-plane", 0.5, {
    x: 800,
    y: 350,
    fill: "#60bcff"
  })
  .to(".svg-plane", 0.5, {
    rotation: -60
  })
  .to(
    ".svg-plane",
    0.5,
    {
      x: 40,
      y: -100,
      scale: 5.5
    },
    "popInput"
  )
  .to(
    ".input-box",
    0.5,
    {
      // rotationX: 10,
      rotationY: 100,
      // x: -200,
      y: 50,
      scale: 0.9,
      opacity: 0
    },
    "+=0.3"
  )
  .from(
    "#world-map",
    0.5,
    {
      opacity: 0,
      scale: 0.9,
      rotationY: -100
    },
    "-=0.2"
  )
  .staggerFrom(
    ".map-plots",
    0.5,
    {
      opacity: 0,
      scale: 0.3,
      ease: Back.easeOut.config(1.7)
    },
    0.1
  )
  .staggerFrom(
    ".path-dash",
    1.5,
    {
      cycle: {
        strokeDashoffset: i =>
          document.getElementsByClassName("path-dash")[i].getTotalLength()
      }
    },
    0.3,
    "drawPath"
  )
  .to(
    ".map-container",
    0.1,
    {
      overflow: "hidden"
    },
    "-=3"
  )
  .to(
    "#world-map",
    3,
    {
      scale: 5
    },
    "drawPath+=0.5"
  )
  .to(".path-to-fade", 0.3, {
    opacity: 0
  })
  .to(
    ".inputs",
    0.3,
    {
      opacity: 0,
      y: 30
    },
    "-=0.6"
  )
  .from(".algo", 0.3, {
    opacity: 0,
    y: 130
  })
  .to(
    ".save",
    0.3,
    {
      opacity: 0,
      y: 20
    },
    animWait
  );

// story.seek("popInput");
