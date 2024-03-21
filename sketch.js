let anim = true

let cirX = 10
let cirY = 10
let cirR = 50

let sp = 5

let angle = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)

  let btn = createButton("Start")
  btn.position(150,350)

  btn.mouseClicked(() => {
    btn.hide()
  })

  for (let num = 0; num < numCir; num++) {
    let x = random(width)
    let y = random(height)
    let sz = random(20, 50)
  }

}

function draw() {
  background(0);
  
  if (!anim) {
    textSize(40)
    fill(255)
    text("New Animation!", 60, 150)
  } else {

    var numCir = 10;
    fill(0,0,255) 


    
    cirX = cirX + sp
    cirY = cirY + sp
    
    if (cirX > windowWidth) {
      cirX = 0
    } if (cirY > windowHeight) {
      cirY = 0
    }

	  fill(0,0,255)
    translate(150,400)
	  rotate(45)
	  rotate(angle)
	  rect(170, 140, 5, 120)	
    angle++
  }

  class Star {
    constructor() {
      this.x random(width);
    }
  }
}