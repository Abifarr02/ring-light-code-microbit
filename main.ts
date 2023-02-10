let v1 = 0
let stip = neopixel.create(DigitalPin.P1, 24, NeoPixelMode.RGB)
stip.clear()
stip.show()
basic.forever(function () {
    v1 = 0
    v1 = Math.round(v1)
    if (pins.map(
    input.soundLevel(),
    0,
    100,
    0,
    12
    ) > 0) {
        for (let index = 0; index <= v1; index++) {
            stip.setPixelColor(index, neopixel.colors(NeoPixelColors.Green))
            stip.show()
            basic.pause(30)
        }
        stip.clear()
        stip.show()
    }
})
