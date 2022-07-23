input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("MOZEM?")
})
radio.setGroup(1)
