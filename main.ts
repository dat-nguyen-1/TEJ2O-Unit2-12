/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Dat Nguyen
 * Created on: Mar 2026
 * This program will change the neopixel colors to match the distance detected.
*/

// define color constants
const BLACK: NeoPixelColors = NeoPixelColors.Black
const RED: NeoPixelColors = NeoPixelColors.Red
const GREEN: NeoPixelColors = NeoPixelColors.Green

// initialize variables
let distance_cm: number = 0

// initialize Neopixel strip instance
const neopixelStrip: neopixel.Strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, BLACK)
neopixelStrip.setPixelColor(1, BLACK)
neopixelStrip.setPixelColor(2, BLACK)
neopixelStrip.setPixelColor(3, BLACK)
neopixelStrip.show()

// initialize display
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// handle button A press
input.onButtonPressed(Button.A, function() {
    // calculate distance
    distance_cm = sonar.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.Centimeters)

    if (distance_cm < 10) {

        // turn all neopixels red
        neopixelStrip.setPixelColor(0, RED)
        neopixelStrip.setPixelColor(1, RED)
        neopixelStrip.setPixelColor(2, RED)
        neopixelStrip.setPixelColor(3, RED)
    } else {
        // turn all neopixels green
        neopixelStrip.setPixelColor(0, GREEN)
        neopixelStrip.setPixelColor(1, GREEN)
        neopixelStrip.setPixelColor(2, GREEN)
        neopixelStrip.setPixelColor(3, GREEN)
    }

    // show neopixels
    neopixelStrip.show()

})