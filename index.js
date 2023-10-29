// Initialise Kaboom.js with light blue background
kaboom({
    background: [135, 206, 235]
})

// Load game graphics
loadRoot("graphics/")

// UX stuff
loadSprite("title", "ux/title.png")

// Define scenes
scene("title", titleScene)
scene("main", mainScene)

go("title") // Go to title scene on loading
