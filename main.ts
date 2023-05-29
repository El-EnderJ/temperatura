input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    basic.showString("C ")
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(input.acceleration(Dimension.Strength))
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.lightLevel())
    basic.showString("de 300")
})
let Pasos = 0
basic.forever(function () {
    basic.showNumber(0)
    if (input.acceleration(Dimension.Strength) > 100) {
        Pasos += 1
    }
})
