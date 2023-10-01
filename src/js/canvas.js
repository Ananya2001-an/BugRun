import platform from '../imgs/platform.png'
import platformSmallTall from '../imgs/platformSmallTall.png'
import bg from '../imgs/bg.png'
import objects from '../imgs/objects.png'
import runRight from '../imgs/SpriteRunRight.png'
import runLeft from '../imgs/SpriteRunLeft.png'
import standRight from '../imgs/SpriteStandRight.png'
import standLeft from '../imgs/SpriteStandLeft.png'
import bugRight from '../imgs/BugRight.png'
import bugLeft from '../imgs/BugLeft.png'

//create HTML image object 
function createImage(imageSrc){
    const image = new Image()
    image.src = imageSrc
    return image
}

let skip_btns = document.querySelectorAll('.skip')

skip_btns.forEach(skip_btn =>{
    skip_btn.addEventListener('click', ()=>{
        if(document.querySelector('.tutorial').style.display != 'none')
        {
            document.querySelector('.tutorial').style.display = 'none'
        }
        document.querySelector('canvas').style.opacity = 1
    })
})

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

const gravity = 1.5
let paused = false

class Player{
    constructor(){
        this.position = {
            x: 100,
            y: 100
        }
        this.width =100
        this.height = 200
        this.velocity = {
            x: 0,
            y: 0
        }
        this.speed = 10

        this.sprites = {
            stand :{
                right: createImage(standRight),
                left: createImage(standLeft),
                cropWidth: 170,
                width: 100
            },
            run:{
                right:createImage(runRight),
                left: createImage(runLeft),
                cropWidth: 240,
                width: 140
            }
        }
        this.frames = 0
        this.frameDirection = 'right'
        this.currentSprite = this.sprites.stand.right
        this.currentCropWidth = 170

    }

    draw(){
        c.drawImage(
        this.currentSprite, 
        this.currentCropWidth * this.frames,
        0,
        this.currentCropWidth,
        350,
        this.position.x, 
        this.position.y, 
        this.width, 
        this.height)
    }

    update(){
        if(this.frames < 23 && this.frameDirection == 'right') this.frames ++
        else if(this.frames >= 23) this.frameDirection = 'left'
        if(this.frames > 1 && this.frameDirection == 'left') this.frames --
        else if (this.frames <= 1) this.frameDirection = 'right'
        this.draw()
        
        if(this.position.y + this.velocity.y >= 0)
            this.position.y += this.velocity.y
        else{
            this.velocity.y = 0
        }
        this.position.x += this.velocity.x
        if(this.position.y + this.velocity.y + this.height <= canvas.height) 
            this.velocity.y += gravity //acceleration due to gravity
        
        
    }
}

class Platform{
    constructor({x, y, image}){
        this.position = {
            x, //same as x:x
            y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
        
    }

    draw(){
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

class GenericObjects{
    constructor({x, y, image}){
        this.position = {
            x, //same as x:x
            y
        }
        this.image = image
        this.width = image.width
        this.height = image.height
        
    }

    draw(){
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

class Bug{
    constructor({x, y, speed, distance, direction}){
        this.position={
            x,
            y
        }
        this.width = 70,
        this.height = 50

        this.speed = speed
        this.distance = distance
        this.covered = 0
    
        this.sprites = {
            right: createImage(bugRight),
            left: createImage(bugLeft)
        }

        if(direction == 'right')
        {
            this.currentSprite = this.sprites.right
        }
        else{
            this.currentSprite = this.sprites.left
        }
    }
    draw(){
        c.drawImage(
        this.currentSprite
        ,0
        ,0
        ,110
        ,80
        ,this.position.x
        ,this.position.y
        ,this.width
        ,this.height)
    }

    move(){
        this.draw()
        if(this.covered < this.distance  && this.currentSprite == this.sprites.right){
            this.position.x += this.speed
            this.covered += this.speed
        }
        else if (this.covered >= this.distance && this.currentSprite == this.sprites.right)
        {
            this.currentSprite = this.sprites.left
            this.covered = 0
        }
        else if(this.covered < this.distance  && this.currentSprite == this.sprites.left)
        {
            this.position.x -= this.speed
            this.covered += this.speed
        }
        else if (this.covered >= this.distance && this.currentSprite == this.sprites.left)
        {
            this.currentSprite = this.sprites.right
            this.covered = 0
        }
        
    }
}


let scrollOffset = 0 //for finding the winning point
let player = new Player()

let platformImage = createImage(platform)
let platformSmallTallImage = createImage(platformSmallTall)
let bgImage = createImage(bg)
let objectImage = createImage(objects)

let platforms = []
let genericObjects  = []
let apis = []
let bugs = []
let lastKey

const keys = {
    right:{
        pressed: false
    },
    left:{
        pressed: false
    }
}

function init(){
    document.querySelector('.restart').style.display = 'none'
    scrollOffset = 0 //for finding the winning point
    player = new Player()

    platformImage = createImage(platform)
    platformSmallTallImage = createImage(platformSmallTall)
    bgImage = createImage(bg)
    objectImage = createImage(objects)

    platforms = [new Platform({x:0,y:487, image:platformImage})
    ,new Platform({x:platformImage.width, y:487, image:platformImage})
    ,new Platform({x:2*platformImage.width, y:487, image:platformImage})
    ,new Platform({x:3*platformImage.width, y:487, image:platformImage})
    ,new Platform({x:4*platformImage.width + 400, y:425, image:platformSmallTallImage})
    ,new Platform({x:5*platformImage.width + 800, y:487, image:platformImage})
    ,new Platform({x:6*platformImage.width, y:487, image:platformImage})
    ,new Platform({x:8*platformImage.width + 200, y:487, image:platformImage})
    ,new Platform({x:9*platformImage.width + 200, y:487, image:platformImage})
    ,new Platform({x:10*platformImage.width + 200, y:487, image:platformImage})
    ,new Platform({x:11*platformImage.width + 200, y:487, image:platformImage})
    ,new Platform({x:12*platformImage.width + 200, y:487, image:platformImage})
    ,new Platform({x:13*platformImage.width + 800, y:487, image:platformImage})
    ,new Platform({x:16*platformImage.width + 1300, y:425, image:platformSmallTallImage})
    ,new Platform({x:17*platformImage.width + 1300, y:487, image:platformImage})
    ,new Platform({x:18*platformImage.width + 1300, y:487, image:platformImage})
    ,new Platform({x:19*platformImage.width + 1400, y:425, image:platformSmallTallImage})
    ,new Platform({x:21*platformImage.width + 1400, y:487, image:platformImage})
    ,new Platform({x:22*platformImage.width + 1400, y:487, image:platformImage})
    ,new Platform({x:23*platformImage.width + 1600, y:425, image:platformSmallTallImage})
    ,new Platform({x:7*platformImage.width, y:250, image:platformImage})
    ,new Platform({x:12*platformImage.width + 700, y:240, image:platformImage})
    ,new Platform({x:14*platformImage.width + 1000, y:300, image:platformSmallTallImage})
    ,new Platform({x:15*platformImage.width + 1200, y:250, image:platformImage})
    ,new Platform({x:20*platformImage.width + 1300, y:240, image:platformImage})
    ,new Platform({x:23*platformImage.width + 1800, y:250, image:platformImage})]
    
    genericObjects  = [new GenericObjects({x:0, y:0, image:bgImage})
    ,new GenericObjects({x:bgImage.width, y:0, image:bgImage})
    ,new GenericObjects({x:2*bgImage.width, y:0, image:bgImage})
    ,new GenericObjects({x:3*bgImage.width, y:0, image:bgImage})
    ,new GenericObjects({x:0, y:180, image:objectImage})
    ,new GenericObjects({x:6*platformImage.width + 50, y:180, image:objectImage})]

    bugs = [new Bug({x:3*platformImage.width, y:437, speed:5, distance:2*platformImage.width-70, direction:'left'})
    ,new Bug({x:7*platformImage.width, y:200, speed:2, distance:platformImage.width-70, direction:'right'})
    ,new Bug({x:8*platformImage.width + 200, y:437, speed:3, distance:platformImage.width-70, direction:'right'})
    ,new Bug({x:10*platformImage.width + 200, y:437, speed:4, distance:2*platformImage.width-70, direction:'left'})
    ,new Bug({x:15*platformImage.width + 1200, y:200, speed:3, distance:platformImage.width-70, direction:'right'})
    ,new Bug({x:19*platformImage.width + 1400, y:375, speed:7, distance:platformSmallTallImage.width-70, direction:'right'})
    ,new Bug({x:22*platformImage.width + 1400, y:437, speed:2, distance:platformImage.width-70, direction:'left'})]
}

function animate(){
    if(paused == false)
    {
        requestAnimationFrame(animate)
    }
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)
    
    genericObjects.forEach(obj =>{
        obj.draw()
    })

    platforms.forEach(platform =>{
        platform.draw()
    })

    apis.forEach(api =>{
        api.update()
    })

    bugs.forEach(bug =>{
        bug.move()
    })

    player.update()

    if(keys.right.pressed && player.position.x < 400)
    {
        player.velocity.x = player.speed
    }
    else if((keys.left.pressed && player.position.x > 100) ||
    (keys.left.pressed && player.position.x > 0))
    {
        player.velocity.x = -player.speed
    }
    else{
        player.velocity.x = 0
        if(keys.right.pressed && scrollOffset + 400 < 23*platformImage.width + 1800 + 200) //orginally player covered some distanc of 400px
        {
            scrollOffset += player.speed
            platforms.forEach(platform =>{
                platform.position.x -= player.speed
            })
            genericObjects.forEach(obj =>{
                obj.position.x -= player.speed * 0.66 //parallax effect
            })
            apis.forEach(api =>{
                api.position.x -= player.speed
            })
            bugs.forEach(bug =>{
                bug.position.x -= player.speed
            })
        }
        else if(keys.left.pressed && scrollOffset > 0)
        {
            scrollOffset -= player.speed
            platforms.forEach(platform =>{
                platform.position.x += player.speed
            })
            genericObjects.forEach(obj =>{
                obj.position.x += player.speed * 0.66 //parallax effect
            })
            apis.forEach(api =>{
                api.position.x += player.speed
            })
            bugs.forEach(bug =>{
                bug.position.x += player.speed
            })
        }
    }

    //sprite switching
    if(keys.right.pressed && lastKey === 'right' && player.currentSprite !== player.sprites.run.right)
    {
        player.currentSprite = player.sprites.run.right
        player.currentCropWidth = player.sprites.run.cropWidth
        player.width = player.sprites.run.width
    }
    else if(keys.left.pressed && lastKey === 'left' && player.currentSprite !== player.sprites.run.left)
    {
        player.currentSprite = player.sprites.run.left
        player.currentCropWidth = player.sprites.run.cropWidth
        player.width = player.sprites.run.width
    }
    else if(!keys.right.pressed && lastKey === 'right' && player.currentSprite === player.sprites.run.right)
    {
        player.currentSprite = player.sprites.stand.right
        player.currentCropWidth = player.sprites.stand.cropWidth
        player.width = player.sprites.stand.width
    }
    else if(!keys.left.pressed && lastKey === 'left' && player.currentSprite === player.sprites.run.left)
    {
        player.currentSprite = player.sprites.stand.left
        player.currentCropWidth = player.sprites.stand.cropWidth
        player.width = player.sprites.stand.width
    }

    //win condition
    if(scrollOffset + 400 >= 23*platformImage.width + 1800)
    {
        document.querySelector('.restart').style.display = 'block'
        document.querySelector('.restart-button').addEventListener('click',()=>{
            init()
        })
    }

    //lose condition
    if(player.position.y > canvas.height)
    {
        init() //start again
    }

    //platform collision detection
    platforms.forEach(platform =>{
        
        if(player.position.y + player.height <= platform.position.y && 
            player.position.y + player.height + player.velocity.y >= platform.position.y
            && player.position.x + player.width >= platform.position.x && player.position.x
            <= platform.position.x + platform.width)
            {
                player.velocity.y = 0
            }
    })

    //bug collision
    for(let i=0;i<bugs.length;i++)
    {
        if(player.position.y + player.height <= bugs[i].position.y 
            && player.position.y + player.height + player.velocity.y >= bugs[i].position.y
            && player.position.x + player.width >= bugs[i].position.x 
            && player.position.x <= bugs[i].position.x + bugs[i].width
        )
        {
            bugs.splice(i,1)//kills bug
        }

        // if(player.position.x + player.width == bugs[i].position.x
        // || player.position.x  == bugs[i].position.x + bugs[i].width)
        // {
        //     init()
        // }

    }
  
}

init()
animate()

addEventListener('keydown', ({ keyCode })=>{
     switch(keyCode){
        case 65:{ //key a
            console.log('left')
            keys.left.pressed = true
            lastKey = 'left'
            break
        }
        case 68:{ //key d
            console.log('right')
            keys.right.pressed = true
            lastKey = 'right'
            break
        }
        case 83:{ //key s
            console.log('down')
            break
        }
        case 87:{ //key w
            console.log('up')
            player.velocity.y -= 20
            break
        }
        case 37:{ //key leftarrow
            console.log('left')
            keys.left.pressed = true
            lastKey = 'left'
            break
        }
        case 39:{ //key rightarrow
            console.log('right')
            keys.right.pressed = true
            lastKey = 'right'
            break
        }
        case 40:{ //key downarrow
            console.log('down')
            break
        }
        case 38:{ //key uparrow
            console.log('up')
            player.velocity.y -= 25 
            break
        }
    }
})

addEventListener('keyup', ({ keyCode })=>{
    switch(keyCode){
       case 65:{ //key a
           console.log('left')
           keys.left.pressed = false
           break
       }
       case 68:{ //key d
           console.log('right')
           keys.right.pressed = false
           break
       }
       case 37:{ //key leftarrow
           console.log('left')
           keys.left.pressed = false
           break
       }
       case 39:{ //key rightarrow
           
           console.log('right')
           keys.right.pressed = false
           break
       }
   }
})



