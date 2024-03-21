let stars = [];
let numStars = 190;

let meteors = [];
let numMet = 50;


function setup() {
    createCanvas(windowWidth, windowHeight);

    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: random(width),
            y: random(-200,-100),
            size: random(1,4),
            speed: random(0.1,4),
            opacity: random(150, 255)
        });
    };

    for (let i = 0; i < numMet; i++) {
        meteors.push({
            x: random(width),
            y: random(-100, -200),
            size: random(2, 5),
            speed: random(2,10)
        });
    };
};

function draw() {
    background(0);

    for (let i = 0; i < stars.length; i++) {
        displayStar(stars[i]);
        updateStar(stars[i]);
    };

    for (let i = 0; i < meteors.length; i++) {
        displayMeteors(meteors[i]);
        updateMeteors(meteors[i]);
    };

    fill(255);
    console.log(mouseX)

}

function updateStar(stars) {
    stars.y += stars.speed;

    if (stars.y > height + 20) {
        stars.y = random(-200,-100);
    };
}

function displayStar(stars) {
    fill(255, 190);
    ellipse(stars.x,stars.y,stars.size,stars.size);
}

function updateMeteors(meteors) {
    //meteors.x += meteors.speed;
    meteors.y += meteors.speed;

    if (meteors.x > width + 20) {
        meteors.x = random(width);
    } if (meteors.y > height+ 20) {
        meteors.y = random(-100, -200);
    };
};

function displayMeteors(meteors) {
    
    fill(255,220,0);
    ellipse(meteors.x, meteors.y, meteors.size, meteors.size);
};