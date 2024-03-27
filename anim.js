let stars = []
let numStars = 600

let meteors = []
let numMet = 600

let ast = []
let numAst = 10

function setup() {
    createCanvas(windowWidth, windowHeight)

    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: random(width),
            y: random(-200,-100),
            size: random(1, 4),
            speed: random(0.1,4),
            opacity: random(150, 255)
        })
    }

    for (let i = 0; i < numMet; i++) {
        meteors.push({
            x: random(width),
            y: random(-100, -200),
            size: random(0.1, 4),
            speed: random(0.1,4)
        })
    }
  
    for(let i = 0; i < numAst; i++) {
        ast.push({
            x: random(width),
            y: random(-5000,-6500),
            size: random(0.7,4),
            speed: random(10,30),
            opacity: random(100, 255)
        })
    }
  
}

function draw() {
    background(0)

    for (let i = 0; i < stars.length; i++) {
        displayStar(stars[i])
        updateStar(stars[i])
    }

    for (let i = 0; i < meteors.length; i++) {
        displayMeteors(meteors[i])
        updateMeteors(meteors[i])
    }

    for (let i = 0; i < ast.length; i++) {
        displayAst(ast[i])
        updateAst(ast[i])
    }
}

function updateStar(star) {
    star.y += star.speed

    if (star.y > height + 20) {
        star.y = random(-200,-100)
    }
}

function displayStar(stars) {
    fill(150, 190, 255, stars.opacity)
           ellipse(stars.x,stars.y,stars.size,stars.size)
}

function updateMeteors(meteors) {
    //meteors.x += meteors.speed
    meteors.y += meteors.speed

    if (meteors.x > width + 20) {
        meteors.x = random(width)

    } if (meteors.y > height+ 20) {
        meteors.y = random(-100, -200)
    }
}

function displayMeteors(meteors) {
    fill(0,random(0,255),255,stars.opacity)
    ellipse(meteors.x, meteors.y, meteors.size, meteors.size)
}

function updateAst(ast) {
    fill(random(['#FFCC00',255]))
    ellipse(ast.x,ast.y,ast.size,ast.size)
}

function displayAst(ast) {
    ast.y += ast.speed

    if (ast.y > height + 20) {
        ast.y = random(-100,1000)
        ast.x = random(width)
    }
}

// In help with ChatGPT, and P5 Documentation

let stars = []
let numStars = 600

let meteors = []
let numMet = 600

let ast = []
let numAst = 10

function setup() {
    createCanvas(windowWidth, windowHeight)

    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: random(width),
            y: random(-200,-100),
            size: random(1, 4),
            speed: random(0.1,4),
            opacity: random(150, 255)
        })
    }

    for (let i = 0; i < numMet; i++) {
        meteors.push({
            x: random(width),
            y: random(-100, -200),
            size: random(0.1, 4),
            speed: random(0.1,4)
        })
    }
  
    for(let i = 0; i < numAst; i++) {
        ast.push({
            x: random(width),
            y: random(-5000,-6500),
            size: random(0.7,4),
            speed: random(10,30),
            opacity: random(100, 255)
        })
    }
  
}

function draw() {
    background(0)

    for (let i = 0; i < stars.length; i++) {
        displayStar(stars[i])
        updateStar(stars[i])
    }

    for (let i = 0; i < meteors.length; i++) {
        displayMeteors(meteors[i])
        updateMeteors(meteors[i])
    }

    for (let i = 0; i < ast.length; i++) {
        displayAst(ast[i])
        updateAst(ast[i])
    }
}

function updateStar(star) {
    star.y += star.speed

    if (star.y > height + 20) {
        star.y = random(-200,-100)
    }
}

function displayStar(stars) {
    fill(150, 190, 255, stars.opacity)
           ellipse(stars.x,stars.y,stars.size,stars.size)
}

function updateMeteors(meteors) {
    //meteors.x += meteors.speed
    meteors.y += meteors.speed

    if (meteors.x > width + 20) {
        meteors.x = random(width)

    } if (meteors.y > height+ 20) {
        meteors.y = random(-100, -200)
    }
}

function displayMeteors(meteors) {
    fill(0,random(0,255),255,stars.opacity)
    ellipse(meteors.x, meteors.y, meteors.size, meteors.size)
}

function updateAst(ast) {
    fill(random(['#FFCC00',255]))
    ellipse(ast.x,ast.y,ast.size,ast.size)
}

function displayAst(ast) {
    ast.y += ast.speed

    if (ast.y > height + 20) {
        ast.y = random(-100,1000)
        ast.x = random(width)
    }
}
// In help with ChatGPT, and P5 Documentation

let stars = []
let numStars = 600

let meteors = []
let numMet = 600

let ast = []
let numAst = 10

function setup() {
    createCanvas(windowWidth, windowHeight)

    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: random(width),
            y: random(-200,-100),
            size: random(1, 4),
            speed: random(0.1,4),
            opacity: random(150, 255)
        })
    }

    for (let i = 0; i < numMet; i++) {
        meteors.push({
            x: random(width),
            y: random(-100, -200),
            size: random(0.1, 4),
            speed: random(0.1,4)
        })
    }
  
    for(let i = 0; i < numAst; i++) {
        ast.push({
            x: random(width),
            y: random(-5000,-6500),
            size: random(0.7,4),
            speed: random(10,30),
            opacity: random(100, 255)
        })
    }
  
}

function draw() {
    background(0)

    for (let i = 0; i < stars.length; i++) {
        displayStar(stars[i])
        updateStar(stars[i])
    }

    for (let i = 0; i < meteors.length; i++) {
        displayMeteors(meteors[i])
        updateMeteors(meteors[i])
    }

    for (let i = 0; i < ast.length; i++) {
        displayAst(ast[i])
        updateAst(ast[i])
    }
}

function updateStar(star) {
    star.y += star.speed

    if (star.y > height + 20) {
        star.y = random(-200,-100)
    }
}

function displayStar(stars) {
    fill(150, 190, 255, stars.opacity)
           ellipse(stars.x,stars.y,stars.size,stars.size)
}

function updateMeteors(meteors) {
    //meteors.x += meteors.speed
    meteors.y += meteors.speed

    if (meteors.x > width + 20) {
        meteors.x = random(width)

    } if (meteors.y > height+ 20) {
        meteors.y = random(-100, -200)
    }
}

function displayMeteors(meteors) {
    fill(0,random(0,255),255,stars.opacity)
    ellipse(meteors.x, meteors.y, meteors.size, meteors.size)
}

function updateAst(ast) {
    fill(random(['#FFCC00',255]))
    ellipse(ast.x,ast.y,ast.size,ast.size)
}

function displayAst(ast) {
    ast.y += ast.speed

    if (ast.y > height + 20) {
        ast.y = random(-100,1000)
        ast.x = random(width)
    }
}



// In help with ChatGPT, and P5 Documentation

let stars = []
let numStars = 600

let meteors = []
let numMet = 600

let ast = []
let numAst = 10

function setup() {
    createCanvas(windowWidth, windowHeight)

    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: random(width),
            y: random(-200,-100),
            size: random(1, 4),
            speed: random(0.1,4),
            opacity: random(150, 255)
        })
    }

    for (let i = 0; i < numMet; i++) {
        meteors.push({
            x: random(width),
            y: random(-100, -200),
            size: random(0.1, 4),
            speed: random(0.1,4)
        })
    }
  
    for(let i = 0; i < numAst; i++) {
        ast.push({
            x: random(width),
            y: random(-5000,-6500),
            size: random(0.7,4),
            speed: random(10,30),
            opacity: random(100, 255)
        })
    }
  
}

function draw() {
    background(0)

    for (let i = 0; i < stars.length; i++) {
        displayStar(stars[i])
        updateStar(stars[i])
    }

    for (let i = 0; i < meteors.length; i++) {
        displayMeteors(meteors[i])
        updateMeteors(meteors[i])
    }

    for (let i = 0; i < ast.length; i++) {
        displayAst(ast[i])
        updateAst(ast[i])
    }
}

function updateStar(star) {
    star.y += star.speed

    if (star.y > height + 20) {
        star.y = random(-200,-100)
    }
}

function displayStar(stars) {
    fill(150, 190, 255, stars.opacity)
           ellipse(stars.x,stars.y,stars.size,stars.size)
}

function updateMeteors(meteors) {
    //meteors.x += meteors.speed
    meteors.y += meteors.speed

    if (meteors.x > width + 20) {
        meteors.x = random(width)

    } if (meteors.y > height+ 20) {
        meteors.y = random(-100, -200)
    }
}

function displayMeteors(meteors) {
    fill(0,random(0,255),255,stars.opacity)
    ellipse(meteors.x, meteors.y, meteors.size, meteors.size)
}

function updateAst(ast) {
    fill(random(['#FFCC00',255]))
    ellipse(ast.x,ast.y,ast.size,ast.size)
}

function displayAst(ast) {
    ast.y += ast.speed

    if (ast.y > height + 20) {
        ast.y = random(-100,1000)
        ast.x = random(width)
    }
}
