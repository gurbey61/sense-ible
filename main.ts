input.onButtonPressed(Button.A, function () {
    tempPast = input.temperature()
    basic.pause(2000)
    tempCurrent = input.temperature()
})
// Reads the temperature when Button A is pressed.
//  Checks whether the temperature has gone up or down since the last reading.
//  If the temperature has gone up since the last reading, the micro:bit turns on a fan (represented by the Standard Servo in your Core Training kit).
let tempCurrent = 0
let tempPast = 0
pins.servoWritePin(AnalogPin.P0, 0)
basic.forever(function () {
    if (tempCurrent > tempPast) {
        pins.servoWritePin(AnalogPin.P0, 180)
    } else {
        pins.servoWritePin(AnalogPin.P0, 0)
    }
})
