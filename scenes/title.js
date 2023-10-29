/* Title screen
- Display title graphic of game
- Show instructions on how to proceed
- Go to main scene when button pressed
*/

function titleScene() {
    // Add title graphic to top middle of screen
    add([
        sprite("title"),
        pos(center().x, 10),
        anchor("top")
    ])

    // Tell player to press button on their controller to start
    add([
        text("Press any button on controller to start...", { size: 20 }),
        color(230, 230, 230),
        pos(center()), // Centre of screen
        anchor("center")
    ])

    onGamepadButtonPress(() => { // Any button on controller pressed
        go("main") // Go to main scene
    })
}
