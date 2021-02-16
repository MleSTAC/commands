input.onButtonPressed(Button.A, function () {
    radio.sendString("C")
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendString("B")
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("R")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("I")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("J")
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("L")
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendString("F")
})
radio.setGroup(162)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
