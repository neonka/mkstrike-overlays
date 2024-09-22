function mk_getHeaderFontSize() {
    return 15;
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
    return mk_getSRBackgroundColorImpl(licence);
}

// TODO: refactor to base
function mk_getTyreBackground() {
    const tireCompoundColor = $prop('IRacingExtraProperties.iRacing_Player_TireCompoundColor');
    const tireCompound = $prop('IRacingExtraProperties.iRacing_Player_TireCompound');

    if (tireCompound == 'M') {
        return '#0065C3';
    }
    return tireCompoundColor;
}

// TODO: refactor to base
function mk_getTyreTextColor() {
    const tireCompoundColor = $prop('IRacingExtraProperties.iRacing_Player_TireCompoundColor');
    const tireCompound = $prop('IRacingExtraProperties.iRacing_Player_TireCompound');

    if (tireCompound == 'M') {
        return 'white';
    }
    return 'black';
}

// TODO: refactor to base
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

function mk_getCarRowTextColor() {
    const color_sameLap = '#FFFFFF';
    const color_ahead = '#FF7400';
    const color_behind = '#00BFFF';

    if ($prop('variable.isPlayer')) {
        return mk_getPlayerTextColor();
    }

    if ($prop('DataCorePlugin.GameData.SessionTypeName') == 'Race') {
        const direction = $prop('variable.direction');
        const driverIndex = mk_NumberToTwoDigitString(+$prop('variable.driverIndex'));

        const lapDifference = +$prop('IRacingExtraProperties.iRacing_Driver' + direction + '_' + driverIndex + '_LapDifference');

        if (lapDifference) {
            if (lapDifference > 0.6) {
                return color_behind;
            } else if (lapDifference < -0.6) {
                return color_ahead;
            }
            return color_sameLap;
        }

    } else {
        return color_sameLap;
    }
}

function mk_footerFuelBackgroundColor() {
    return '#FF262626';
}

function mk_footerFuelTextColor() {
    return 'white';
}