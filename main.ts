namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
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
    `
    //% blockIdentity=images._tile
    export const tile1 = img`
        c c c c c 4 4 c c c 4 4 c c c c
        c c c c c 4 5 5 5 5 5 4 c c c c
        c c c c c c 5 6 5 6 5 c c c c c
        c c c c c 5 5 5 4 5 5 5 c c c c
        c c c c c c f 5 5 5 5 c c c 5 c
        c c c c c c c 5 5 f c c c c f c
        c c c c c f 5 5 5 5 5 5 c 5 5 c
        c c c c c 5 5 5 5 5 5 5 c f c c
        c c c c c 5 5 f 5 5 f 5 c 5 c c
        c c c c c 5 5 5 5 5 5 5 c 5 f c
        c c c c 5 f 5 5 f 5 f 5 c c 5 c
        c c c c 5 5 5 5 5 5 5 5 c c 5 c
        c c c 5 5 5 f 5 5 5 5 5 f 5 5 c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
    `
    //% blockIdentity=images._tile
    export const tile2 = img`
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c 2 2 5 8 c c c c c c 8 5 2 2 c
        c c 2 5 8 c c c c c c 8 5 2 c c
        c c 2 5 8 c c c c c c 8 5 2 c c
        c c 2 2 5 c c 8 8 c c 5 2 2 c c
        c c c 2 5 8 8 5 5 8 8 5 2 c c c
        c c c 2 2 5 5 2 2 5 5 2 2 c c c
        c c c c 2 2 2 2 2 2 2 2 c c c c
        c c c c 2 2 2 c c 2 2 2 c c c c
        c c c c c 2 c c c c 2 c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c
    `
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    music.siren.play()
    tiles.setTileAt(location, sprites.dungeon.darkGroundCenter)
    info.changeScoreBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    music.magicWand.play()
    tiles.setTileAt(location, sprites.dungeon.darkGroundCenter)
    info.changeScoreBy(1)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . f f f . . . . . . .
    . . . . f f f 5 f f f . . . . .
    . . . . f f 5 2 5 f f . . . . .
    . . . f f 2 2 2 2 2 f f . . . .
    . . . f f d d d d d f f . . . .
    . . f f f d e d e d f f f . . .
    . . f f f d d d d d f f f . . .
    . f f f f f d d d f f f f f . .
    . f f f f d 2 2 2 d f f f f . .
    . f f . . 5 2 5 2 5 . . f f . .
    . . . . . d 8 8 8 d . . . . . .
    . . . . . . 8 8 8 . . . . . . .
    . . . . . . d . d . . . . . . .
    . . . . . . 2 . 2 . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 150)
tiles.setTilemap(tiles.createTilemap(
            hex`10001000010101010101010101010101010101030c0b0b0b0b0b0b0b0b0b0b0b0b0f0f04080b0f0f0f0f0f0f0f0f0f0b120f0f04080b0f0f0f0f0f0f0f0f0b0b0b0b0b04080b0f0f130f0f0f0f0f0b0f0f0f0b04080b0f0f0b0f0f0f0f0b0b0f0f0f0b04080b0b0b0b0b0b0b0b0b0b0f0f0f1304080f0f0f0f0f0f0f0f0b0b0f0f0f0f04080f0f0b0b0b0b0b0f0b0b0f0f0b0f04080f0f0b0f0f0f0b0f0b0b0f0f0b0f04080f0f0b0f0b0b0b0f0b0b0b0b0b0f04080f0f0b0f0f0f0f0f0b0f0f0f0b0f04080f0f0b0b0b0b0b0b0b0f0f0f0b0f04080f0f0b0b0f0f0f0f0b0f0f0f0b0f04080f0f130b0f0f0f0f120b0b0b0b0b0e07060606060606060606060606060605`,
            img`
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
                . . . . . . . . . . . . . 2 . .
                2 . 2 2 2 2 2 2 2 2 2 . . 2 2 2
                2 . 2 2 2 2 . . . 2 . . . . . 2
                2 . 2 2 . 2 . . 2 2 . 2 2 2 . 2
                2 . 2 2 . 2 2 2 2 . . 2 . 2 . 2
                2 . . . . . . . . . . 2 . 2 . 2
                2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2
                . . 2 . . . . . 2 . . 2 2 . 2 .
                . . 2 . 2 2 2 . 2 . . 2 2 . 2 .
                . . 2 . 2 . . . 2 . . . . . 2 .
                . . 2 . 2 2 2 2 2 . 2 2 2 . 2 .
                . . 2 . . . . . . . 2 . 2 . 2 .
                . . 2 . . 2 2 2 2 . 2 2 2 . 2 2
                . . 2 . . 2 . . 2 . . . . . . .
                . . 2 2 2 2 . . 2 2 2 2 2 2 2 2
            `,
            [myTiles.tile0,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.darkGroundCenter,sprites.dungeon.stairWest,sprites.dungeon.stairLadder,sprites.dungeon.stairLarge,sprites.dungeon.floorDark2,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.chestClosed,myTiles.tile1,myTiles.tile2],
            TileScale.Sixteen
        ))
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairWest)
scene.cameraFollowSprite(mySprite)
info.setScore(0)
info.startCountdown(20)
