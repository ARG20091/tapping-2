var MC
var shopOwner
var mcIMG, shopOwnerIMG, bgIMG
var upg, taps
var score = 0
var upgCount = 0
var rate = 1
function preload() {
    mcIMG = loadImage("MainCharacter.png")
    shopOwnerIMG = loadImage("ShopOwner.png")
    bgIMG = loadImage("bgImg.jpg")
    upgImg = loadImage("upgrades.png")
}


function setup() {
    createCanvas(windowWidth, windowHeight)
    MC = createSprite(500, height - 300, 20, 20)
    MC.addImage(mcIMG)
    MC.scale = .5
    shopOwner = createSprite(250, height - 300, 20, 20)
    shopOwner.addImage(shopOwnerIMG)
    shopOwner.scale = .48
    taps = createImg("Taps.png")
    taps.position(width / 2, height - 200)
    taps.size(200, 200)
    taps.mouseClicked(tapsAdd)
    upgGroup= new Group()
    reward1 = createSprite(250, height - 250,20,20)
    reward1.visible = false
}

function draw() {
    background(bgIMG)
    if (keyIsDown(UP_ARROW) && MC.y > height / 2) {
        MC.y = MC.y - 10
    }
    if (keyIsDown(DOWN_ARROW) && MC.y < height - 90) {
        MC.y = MC.y + 10
    }
    if (keyIsDown(LEFT_ARROW) && MC.x > 30) {
        MC.x = MC.x - 10
    }
    if (keyIsDown(RIGHT_ARROW) && MC.x < width - 30) {
        MC.x = MC.x + 10
    }
    if(score>1000){
        reward1.visible = true
        rate = rate + 5
    }
    drawSprites();
    console.log(rate)
    textSize(50)
    fill("black")
    text("Taps: " + score, 20, 50)
    createGems();
    MC.overlap(upgGroup,function(collector, collected){
        collected.remove()
        rate = rate+1
        upgCount = upgCount-1
    })

    
}
function tapsAdd() {
    score = score + rate

}
function createGems() {
    if (frameCount % 60 === 0 && upgCount < 10) {
        upg = createSprite(random(30, width - 30), random(height / 2+ 40, height - 90))
        upgCount = upgCount + 1
        upg.scale = .1
        upg.addImage(upgImg)
        upgGroup.add(upg)
    }

}