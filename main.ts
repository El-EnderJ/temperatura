input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    basic.showString("C ")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.lightLevel())
    basic.showString("de 300")
})
