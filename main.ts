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
            hex`100010000a09090909090909090909090909090b0508080808080808080808080811080c0e03080303030303030303030303080c0e03080303030303030808080803080c0e03110808080808080803080703080c0e03030803030803030803080603080c0e03030808071103030803080303080c0e03030803030303030803080303080c0e08080808030808080803080808080c0e08030308030703030803030303030c0e08030308030803030808080708060c0e08030308030803030311030303080c0e08030608030803030308030303080c0e08030303030803030308080808080c0e0808080808080808080803030308040d0f0f0f0f0f0f0f0f0f0f0f0f0f0f10`,
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
