function mk_BorderBlinkSpeedMs() {
    return 400;
}

function mk_getRowHeight() {
    return 25;
}

function mk_getBadgeHeight() {
    return 18;
}

function mk_getCarFontSize() {
    return 15;
}

function mk_getHeaderFontSize() {
    return 15;
}

function mk_getBackground1() {
    return '#C8000000';
}

function mk_getBackground2() {
    return '#C80F0F0F';
}

function mk_getBackgroundCarModel() {
    return '#FFF0F8FF';
}


function mk_NumberToTwoDigitString(number) {
    if (number < 10) {
        return ('0' + number).slice(-2);
    } else {
        return '' + number;
    }
}

function mk_IsCarVisible() {
    let position;
    if ($prop('variable.isPlayer'))
        return true;
    else {
        const direction = $prop('variable.direction');
        const driverIndex = mk_NumberToTwoDigitString(+$prop('variable.driverIndex'));
        position = $prop('PersistantTrackerPlugin.Driver' + direction + '_' + driverIndex + '_CarNumber');
    }

    if (!position || position === 0 || position === '' || position === '-')
        return false;

    return true;
}

function mk_getFlagBackgroundColor() {
    if ($prop('Flag_Black') || mk_isBlackFlag()) {
        return '#FFFFFF';
    }
    if ($prop('Flag_Blue')) {
        return '#00ABE0';
    }
    if ($prop('Flag_Green')) {
        return '#61BB00';
    }
    if ($prop('Flag_Checkered')) {
        return '#FFFFFF';
    }
    if ($prop('Flag_White')) {
        return '#FFFFFF';
    }
    if ($prop('Flag_Yellow')) {
        return '#FBD800';
    }
}

function mk_isBlackFlag() {
    return ('' + $prop('IRacingExtraProperties.iRacing_Flags_AllActiveFlags')).includes('furled');
}

function mk_getFlagTextColor() {
    if ($prop('Flag_Black') || mk_isBlackFlag()) {
        return '#000000';
    }
    if ($prop('Flag_Blue')) {
        return '#000000';
    }
    if ($prop('Flag_Green')) {
        return '#000000';
    }
    if ($prop('Flag_Checkered')) {
        return '#000000';
    }
    if ($prop('Flag_White')) {
        return '#000000';
    }
    if ($prop('Flag_Yellow')) {
        return '#000000';
    }
}

function mk_getFlagText() {
    let r = '';
    if ($prop('Flag_Black') || mk_isBlackFlag()) {
        r = 'BLACK FLAG';
    }
    if ($prop('Flag_Blue')) {
        r = 'BLUE FLAG';
    }
    if ($prop('Flag_Green')) {
        r = 'GREEN FLAG';
    }
    if ($prop('Flag_Checkered')) {
        r = 'CHECKERED FLAG';
    }
    if ($prop('Flag_White')) {
        r = 'WHITE FLAG';
    }
    if ($prop('Flag_Yellow')) {
        r = 'YELLOW FLAG';
    }
    if (r && r !== '') {
        return '//   ' + r + '   //';
    }
    return '';
}

function mk_IsFlagBorderVisible() {
    return $prop('Flag_Black') || mk_isBlackFlag() || $prop('Flag_Blue') || $prop('Flag_Green') || $prop('Flag_Checkered') || $prop('Flag_White') || $prop('Flag_Yellow');
}

function mk_getFlagImage() {
    if ($prop('Flag_Checkered')) {
        return 'checkered_flag';
    }
    if ($prop('Flag_Black') || mk_isBlackFlag()) {
        return 'black_flag';
    }
}

function mk_getSRBackgroundColor() {
    let licence;
    if ($prop('variable.isPlayer'))
        licence = $prop('IRacingExtraProperties.iRacing_Player_SafetyRating');
    else {
        const direction = $prop('variable.direction');
        const driverIndex = mk_NumberToTwoDigitString(+$prop('variable.driverIndex'));
        licence = $prop('IRacingExtraProperties.iRacing_Driver' + direction + '_' + driverIndex + '_SafetyRating');
    }
    // R - #D50019
    // D - #F45C10
    // C - #FBD800
    // B - #85CD00
    // A - #00ABE0
    if (licence.startsWith('R')) {
        return '#D50019';
    } else if (licence.startsWith('D')) {
        return '#F45C10';
    } else if (licence.startsWith('C')) {
        return '#FBD800';
    } else if (licence.startsWith('B')) {
        return '#85CD00';
    } else if (licence.startsWith('A')) {
        return '#006FCB';
    }
}

function mk_getCarImageName(carName) {
    if (!carName || carName === '')
        return carName;

    if (carName.startsWith('Ferrari'))
        return 'Ferrari';
    if (carName.startsWith('Acura'))
        return 'Acura';
    if (carName.startsWith('Dallara'))
        return 'Dalara';
    if (carName.startsWith('Audi'))
        return 'Audi';
    if (carName.startsWith('BMW'))
        return 'BMW';
    if (carName.startsWith('Chevrolet'))
        return 'Chevrolet';
    if (carName.startsWith('Corvette'))
        return 'Chevrolet';
    if (carName.startsWith('Ford'))
        return 'Ford';
    if (carName.startsWith('Honda'))
        return 'Honda';
    if (carName.startsWith('Lamborghini'))
        return 'Lamborghini';
    if (carName.startsWith('McLaren') || carName.startsWith('Mclaren'))
        return 'Mclaren';
    if (carName.startsWith('Mercedes'))
        return 'Mercedes';
    if (carName.startsWith('Porsche'))
        return 'Porsche';
    if (carName.startsWith('Toyota'))
        return 'Toyota';
    if (carName.startsWith('Radical'))
        return 'Radical';
    if (carName.startsWith('Mazda') || carName.startsWith('MX-5'))
        return 'Mazda';
    if (carName.startsWith('Aston Martin'))
        return 'Aston Martin';
    if (carName.startsWith('Subaru'))
        return 'Subaru';
    if (carName.startsWith('Nissan'))
        return 'Nissan';
    if (carName.startsWith('Porsche'))
        return 'Porsche';
    if (carName.startsWith('Lotus'))
        return 'Lotus';
    if (carName.startsWith('Kia'))
        return 'Kia';
    if (carName.startsWith('Cadillac'))
        return 'Cadillac';
    if (carName.startsWith('VW') || carName.startsWith('Volkswagen'))
        return 'Volkswagen';
    if (carName.startsWith('Pontiac'))
        return 'Pontiac';
    if (carName.startsWith('Renault'))
        return 'Renault';
    if (carName.startsWith('Ray'))
        return 'Ray';

    log('Relative, missing: ' + carName);

    return carName;
}

function mk_getTyreBackground() {
    const tireCompoundColor = $prop('IRacingExtraProperties.iRacing_Player_TireCompoundColor');
    const tireCompound = $prop('IRacingExtraProperties.iRacing_Player_TireCompound');

    if (tireCompound == 'M') {
        return '#0065C3';
    }
    return tireCompoundColor;
}

function mk_getTyreTextColor() {
    const tireCompoundColor = $prop('IRacingExtraProperties.iRacing_Player_TireCompoundColor');
    const tireCompound = $prop('IRacingExtraProperties.iRacing_Player_TireCompound');

    if (tireCompound == 'M') {
        return 'white';
    }
    return 'black';
}

function mk_getTyreText() {
    const tireCompound = $prop('IRacingExtraProperties.iRacing_Player_TireCompound');
    if (tireCompound == 'M')
        return 'W';

    return tireCompound;
}

function mk_getRoadWetness() {
    if (NewRawData().Telemetry) {
        const w = NewRawData().Telemetry["TrackWetness"];
        if (w == 1) {
            return 'Dry';
        } else if (w == 2) {
            return 'Mostly dry';
        } else if (w == 3) {
            return 'Light wet'; //Very light wet, Very damp track
        } else if (w == 4) {
            return 'Wet track';
        } else if (w == 5) {
            return 'Very wet track';
        } else if (w == 6) {
            return 'Waterlogged track';
        }
        return 'R: ' + w;
    }
    return '';
}

function mk_getRoadWetnessTextColor() {
    if (NewRawData().Telemetry) {
        const w = NewRawData().Telemetry["TrackWetness"];
        if (w >= 3) {
            return '#0065C3'
        }
        if (w == 2) {
            return '#4FAEE3';
        }
    }
    return 'white';
}