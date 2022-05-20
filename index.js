// Adds background colors
function backdrop(src, left, bottom, width, height) {
    for(let h = 0; h < height; h++){
        for(let w = 0; w < width; w++){
            newImage(src, left +w*100, bottom+h*100)
        }
    }
}

// Adds images
function newImage(src, left, bottom) {
    pic = document.createElement('img')
    pic.src = src
    pic.style.position = 'fixed'
    pic.style.left = left + 'px'
    pic.style.bottom = bottom + 'px'
    document.body.append(pic)
    return pic
}

//Adds clickable items
function newItem(src, left, bottom) {
    let pic = newImage(src, left, bottom)
    pic.addEventListener('dblclick', function () {
        pic.remove()
    })
}

let horizon = window.innerHeight / 1.75
let heightOfSky = window.innerHeight-horizon
let heightOfGrass = horizon

backdrop('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100)
backdrop('assets/grass.png', 0, 0, window.innerWidth/100, heightOfGrass/100)

newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)


newItem('assets/sword.png', 500, 405)
newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 100)

console.log(window.innerHeight)
console.log(window.innerWidth)