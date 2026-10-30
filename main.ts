input.onButtonPressed(Button.A, function () {
    voeding += 5
})
input.onButtonPressed(Button.B, function () {
    knuffel += 5
})
let voeding = 20
let knuffel = 20
let dood = 0
loops.everyInterval(1000, function () {
    knuffel += -1
    voeding += -1
})
basic.forever(function () {
    if (knuffel > 10 || voeding > 10) {
        basic.showIcon(IconNames.Happy)
    }
    if (voeding <= 0 || knuffel <= 0) {
        dood += 1
    }
    if (dood >= 1) {
        basic.showIcon(IconNames.Asleep)
    }
    if (knuffel <= 10 && knuffel > 0) {
        basic.showIcon(IconNames.Sad)
    }
    if (voeding <= 10 && voeding > 0) {
        basic.showIcon(IconNames.Sad)
    }
})
