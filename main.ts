namespace SpriteKind {
    export const Helicopter = SpriteKind.create()
    export const Cloud = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.vy += -1
})
sprites.onCreated(SpriteKind.Cloud, function (newCloud) {
    newCloud.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 8 . . . . . . 
        . . . 1 1 8 8 8 1 1 1 1 1 1 . . 
        . 8 1 1 8 8 8 8 8 8 8 8 8 1 1 . 
        . 1 8 8 8 1 8 8 8 1 1 8 8 8 1 . 
        1 1 8 8 1 1 1 1 1 8 8 8 1 1 1 . 
        1 1 8 8 8 8 8 1 1 8 1 8 1 1 . . 
        . 1 1 1 1 8 8 8 8 8 8 8 1 8 . . 
        . . . . 1 1 8 8 1 1 8 8 1 . . . 
        . . . . . . 8 8 8 1 1 1 1 . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    newCloud.x = randint(16, scene.screenWidth() - 16)
    newCloud.y = randint(20, scene.screenHeight() - 75)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.vx += -1
})
sprites.onOverlap(SpriteKind.Helicopter, SpriteKind.Cloud, function (sprite, otherSprite) {
    sprite.x += -1 * sprite.vx
    sprite.y += -1 * sprite.vy
    sprite.vx = 0
    sprite.vy = 0
    otherSprite.y += -1
    pause(100)
    otherSprite.y += 1
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.vx += 1
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.vy += 1
})
let agent: Sprite = null
game.splash("Generated Clouds", "on Sprite created")
scene.setBackgroundColor(9)
agent = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ......................ffff......
    .....ffff.........fffffff.......
    .......fffffffffffff............
    ...............f................
    ...............f................
    ..............ef..eee...........
    ....f.........e..eeff11.........
    ..ffffffff....eee2f.1111........
    .....f......eee222f11111........
    .....f...eee222222f11111e.......
    .....feeee22222222ff11f2e.......
    .....ee22222222222fffff2e.......
    .....e222222222222fffff2e.......
    .....ee22222222222fffff2e.......
    ......ee222222e222222ff2e.......
    .......ee22222ee2222222ee.......
    ........eeee2eee222222ee........
    ...........fe...eeeeee..........
    ...........f........f...........
    ......f....f........f.....f.....
    ......ffffffffffffffffffff......
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Helicopter)
let cloud1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Cloud)
let cloud2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Cloud)
let cloud_3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Cloud)
let cloud4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Cloud)
