/**
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
        . . . . . . . . . . . . . . . .
        . . . . 5 5 . . . 5 5 . . . . .
        . . . . 5 3 5 f 5 3 5 . . . . .
        . . . . f 5 9 5 9 f 5 . . . . .
        . . . . 5 5 5 3 5 5 5 . . . . .
        . . . . 5 f 5 5 5 5 f . . . . .
        . . . . . . 5 5 f . . . . . . .
        . . . . . 5 5 5 5 5 . . f . . .
        . . . . . 5 f 5 5 f . 5 5 . . .
        . . . . . 5 5 5 5 5 . f . . . .
        . . . . . 5 5 5 f 5 . 5 f . . .
        . . . . . 5 f 5 5 5 . . 5 . . .
        . . . . 5 f 5 5 5 5 5 f 5 . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
    //% blockIdentity=images._tile
    export const tile2 = img`
        . . 4 5 . . . . . . . . . . . .
        . 5 5 5 5 5 5 4 . . . . . . . .
        . 5 5 . . 4 5 5 4 . . . . . . .
        . 4 5 5 . . 4 5 5 . . . . . . .
        . . . 4 5 5 5 5 4 . . . . . . .
        . . . . . 4 5 5 4 . . . . . . .
        . . . . . . 4 5 5 . . . . . . .
        . . . . . . . 4 5 . . . . . . .
        . . . . . 5 5 5 . . . . . . . .
        . . . . . 5 . . . . . . . . . .
        . . . . . 4 5 5 5 4 . . . . . .
        . . . . . . 4 4 4 5 5 . . . . .
        . . . . . . . . . . 4 5 . . . .
        . . . . . . . . . . . 4 5 . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    music.siren.play()
    tiles.setTileAt(location, sprites.dungeon.floorLight0)
    info.changeScoreBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    music.magicWand.play()
    tiles.setTileAt(location, sprites.dungeon.floorLight0)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    music.baDing.play()
    tiles.setTileAt(location, sprites.dungeon.floorLight0)
    info.changeScoreBy(1)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . f f 5 f f . . . . . .
    . . . . f f 5 2 5 f f . . . . .
    . . . f f 2 2 2 2 2 f f . . . .
    . . . f f d d d d d f f . . . .
    . . . f f d e d e d f f . . . .
    . . f f f d d d d d f f f . . .
    . f f f f f d d d f f f f f . .
    . f f f f d 2 2 2 d f f f f . .
    . . . f f 5 2 5 2 5 f f . . . .
    . . . . f d 8 8 8 d f . . . . .
    . . . . . . 8 8 8 . . . . . . .
    . . . . . . d . d . . . . . . .
    . . . . . . 2 . 2 . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 150)
scene.setBackgroundColor(11)
tiles.setTilemap(tiles.createTilemap(
            hex`100010000a09090909090909090909090909090b0500000000000000000000000011000c0e03000303030303030303030303000c0e03000303030303030000000003000c0e03110000000007000003000703000c0e03030003030003030003000603000c0e03030000071103030003000303000c0e03030003030303030003000303000c0e00000000031100000003000000000c0e00030300030003030003030303030c0e11030300030003030000000700060c0e00030300030003030311030303000c0e00030600030003030300030303000c0e00030303031103030300000000000c0e0000000000000000000003030300040d0f0f0f0f0f0f0f0f0f0f0f0f0f0f10`,
            img`
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
                . . . . . . . . . . . . . . . 2
                2 2 . 2 2 2 2 2 2 2 2 2 2 2 . 2
                . 2 . 2 2 2 2 2 2 . . . . 2 . 2
                . 2 . . . . . . . . 2 . . 2 . 2
                . 2 2 . 2 2 . 2 2 . 2 . . 2 . 2
                . . 2 . . . . 2 2 . 2 . 2 2 . 2
                2 2 2 . 2 2 2 2 2 . 2 . 2 2 . 2
                2 . . . . 2 . . . . 2 . . . . 2
                2 . 2 2 . 2 . 2 2 . 2 2 2 2 2 2
                2 . 2 2 . 2 . 2 2 . . . . . . 2
                2 . 2 2 . 2 . 2 2 2 . 2 2 2 . 2
                2 . 2 . . 2 . 2 . 2 . 2 2 2 . 2
                2 . 2 2 2 2 . 2 2 2 . . . . . 2
                2 . . . . . . . . . . 2 2 2 . .
                2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2
            `,
            [myTiles.tile0,myTiles.tile0,myTiles.tile0,sprites.dungeon.darkGroundCenter,sprites.dungeon.stairLarge,sprites.dungeon.stairWest,sprites.dungeon.collectibleBlueCrystal,myTiles.tile1,sprites.dungeon.floorLight0,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthWest,myTiles.tile2],
            TileScale.Sixteen
        ))
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairWest)
scene.cameraFollowSprite(mySprite)
info.startCountdown(20)
info.setScore(0)
**/
