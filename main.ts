radio.onReceivedValueDeprecated(function (ontvangenNaam, value) {
    if (ontvangenNaam == "x") {
        waardeX = value / 8
    }
    if (ontvangenNaam == "y") {
        waardeY = value / 8
    }
})
let snelheidM2Links = 0
let snelheidM1Rechts = 0
let waardeY = 0
let waardeX = 0
radio.setGroup(1)
led.plot(2, 2)
basic.forever(function () {
    snelheidM1Rechts = waardeY - waardeX
    snelheidM2Links = waardeY + waardeX
    if (snelheidM1Rechts > 0) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CCW, snelheidM1Rechts)
    } else {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, Math.abs(snelheidM1Rechts))
    }
    if (snelheidM2Links > 0) {
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CCW, snelheidM2Links)
    } else {
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, Math.abs(snelheidM2Links))
    }
})
