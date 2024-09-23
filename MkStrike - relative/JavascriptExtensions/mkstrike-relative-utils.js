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
    if (mk_isIRacing()) {
        const rawData = NewRawData();
        if (rawData.Telemetry) {
            const w = rawData.Telemetry["TrackWetness"];
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
    }

    if (mk_isACC()) {
        var grip = $prop('DataCorePlugin.GameRawData.Graphics.trackGripStatus');

        if (grip == 0) {
            return 'Green';
        } else if (grip == 1) {
            return 'Fast';
        } else if (grip == 2) {
            return 'Optimum';
        } else if (grip == 3) {
            return 'Greasy';
        } else if (grip == 4) {
            return 'Damp';
        } else if (grip == 5) {
            return 'Wet';
        } else if (grip == 6) {
            return 'Flooded';
        }
    }
    return '-';
}

function mk_getRoadWetnessTextColor() {
    if (mk_isIRacing()) {
        const rawData = NewRawData();
        if (rawData.Telemetry) {
            const w = rawData.Telemetry["TrackWetness"];
            if (w == 2) {
                return '#4FAEE3';
            }
            if (w >= 3) {
                return '#0065C3'
            }
        }
    }
    if (mk_isACC()) {
        var grip = $prop('DataCorePlugin.GameRawData.Graphics.trackGripStatus');
        if (grip == 2) {
            return mk_getSuccessColor();
        }
        if (grip == 3) {
            return '#4FAEE3';
        }
        if (grip >= 4) {
            return '#0065C3'
        }
    }
    return 'white';
}

function mk_footerFuelBackgroundColor() {
    return '#FF262626';
}

function mk_footerFuelTextColor() {
    return 'white';
}

function mk_get_Car_TextColor() {
    const color_sameLap = '#FFFFFF';
    const color_ahead = '#FF7400';
    const color_behind = '#00BFFF';

    if ($prop('variable.isPlayer')) {
        return mk_getPlayerTextColor();
    }

    if (mk_isIRacing()) {
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
    else if (mk_isACC()) {
        const direction = $prop('variable.direction');
        const driverIndex = mk_NumberToTwoDigitString(+$prop('variable.driverIndex'));

        const driver_gap = drivergaptoplayer($prop('PersistantTrackerPlugin.Driver' + direction + '_' + driverIndex + '_Position'));
        const driver_lap = timespantoseconds(driverlastlap($prop('DataCorePlugin.GameData.BestLapOpponentPosition')));

        if (driver_lap > 0 && $prop('DataCorePlugin.GameData.SessionTypeName') == 'RACE') {
            const currentLap = $prop('DataCorePlugin.GameData.CurrentLap');
            const driverLap = $prop('PersistantTrackerPlugin.Driver' + direction + '_' + driverIndex + '_CurrentLap');

            if (driverLap - currentLap >= 2) {
                return color_ahead;
            } else if (driverLap - currentLap <= -2) {
                return color_behind;
            } else {
                if (driver_lap + driver_gap < (driver_lap * 0.15)) {
                    return color_ahead;
                } else if (driver_lap + driver_gap > driver_lap + (driver_lap * 0.85)) {
                    return color_behind;
                } else
                    return color_sameLap;
            }
        } else
            return color_sameLap;
    }
}

function mk_get_Car_Position() {
    let position;
    const direction = $prop('variable.direction');
    const driverIndex = +$prop('variable.driverIndex');

    if (mk_isIRacing()) {
        if ($prop('variable.isPlayer'))
            position = $prop('IRacingExtraProperties.iRacing_Player_PositionInClass')
        else {
            const driverIndex1 = mk_NumberToTwoDigitString(driverIndex);
            position = $prop('IRacingExtraProperties.iRacing_Driver' + direction + '_' + driverIndex1 + '_PositionInClass');
        }
    } else if (mk_isACC()) {
        if ($prop('variable.isPlayer'))
            position = $prop('DataCorePlugin.GameData.Position');
        else {
            let driverIndex1 = driverIndex + 1; // ACC driver index is 1-based, iRacing is 0-based
            if (direction == 'AHead') {
                driverIndex1 *= -1;
            }
            position = getopponentleaderboardposition_aheadbehind(driverIndex1);
        }
    }

    if (position == 0)
        return '-';

    return position;
}

function mk_get_Car_Position_BackgroundColor() {
    let color;
    const direction = $prop('variable.direction');
    const driverIndex = +$prop('variable.driverIndex');

    if (mk_isIRacing()) {
        if ($prop('variable.isPlayer'))
            color = $prop('IRacingExtraProperties.iRacing_Player_ClassColor');
        else {
            const driverIndex1 = mk_NumberToTwoDigitString(driverIndex);
            color = $prop('IRacingExtraProperties.iRacing_Driver' + direction + '_' + driverIndex1 + '_ClassColor');
        }
    } else if (mk_isACC()) {
        let position;
        if ($prop('variable.isPlayer')) {
            position = $prop('DataCorePlugin.GameData.Position');
        } else {
            let driverIndex1 = driverIndex + 1; // ACC driver index is 1-based, iRacing is 0-based
            if (direction == 'AHead') {
                driverIndex1 *= -1;
            }
            position = getopponentleaderboardposition_aheadbehind(driverIndex1);
        }
        if (position) {
            color = drivercarclasscolor(position);
        }
    }
    // log('mk_get_Car_Position_BackgroundColor: ' + color);
    return color;
}

function mk_get_Car_Position_TextColor() {
    const color = mk_get_Car_Position_BackgroundColor();
    if (color && color == '#CA2B30') {
        return 'white';
    } else {
        return 'black';
    }
}

function mk_get_Car_CarModelImageName() {
    if ($prop('variable.isPlayer')) {
        return mk_getCarImageName($prop('CarModel'));
    }
    else {
        const direction = $prop('variable.direction');
        const driverIndex = mk_NumberToTwoDigitString(+$prop('variable.driverIndex'));
        const carName = $prop('PersistantTrackerPlugin.Driver' + direction + '_' + driverIndex + '_CarName');
        return mk_getCarImageName(carName);
    }
}

function mk_get_Car_LastLapTime() {
    const direction = $prop('variable.direction');
    const driverIndex = mk_NumberToTwoDigitString(+$prop('variable.driverIndex'));

    let lastLapTime;
    if ($prop('variable.isPlayer')) {
        //lastLapTime = $prop('IRacingExtraProperties.iRacing_Player_LastLapTime');
        lastLapTime = '' + $prop('DataCorePlugin.GameData.LastLapTime');
    }
    else {
        if (mk_isIRacing()) {
            lastLapTime = '' + $prop('IRacingExtraProperties.iRacing_Driver' + direction + '_' + driverIndex +
                '_LastLapTime');
        } else if (mk_isACC()) {
            lastLapTime = '' + $prop('PersistantTrackerPlugin.Driver' + direction + '_' + driverIndex +
                '_LastLapTime');
        }
    }
    if ('00:00:00' == lastLapTime || !lastLapTime)
        return '-';
    if (('' + lastLapTime).substring(0, 2) > 0) {
        // fastest lap is greater than hour.. dont care display empty
        return '-';
    }

    return lastLapTime.substring(3, lastLapTime.length - 4);
}

function mk_get_Car_CarNumber() {
    let carNumber;
    if ($prop('variable.isPlayer')) {
        if (mk_isIRacing()) {
            carNumber = $prop('IRacingExtraProperties.iRacing_Player_CarNumber');
        } else if (mk_isACC()) {
            carNumber = drivercarnumber($prop('DataCorePlugin.GameData.Position'));
        }
    }
    else {
        const direction = $prop('variable.direction');
        const driverIndex = mk_NumberToTwoDigitString(+$prop('variable.driverIndex'));
        carNumber = $prop('PersistantTrackerPlugin.Driver' + direction + '_' + driverIndex + '_CarNumber');
    }

    if (!carNumber)
        return '-';

    return '#' + carNumber;
}

function mk_get_Car_Gap() {
    if ($prop('variable.isPlayer'))
        return '0.0';

    const direction = $prop('variable.direction');
    const driverIndex = mk_NumberToTwoDigitString(+$prop('variable.driverIndex'));
    let gap = 0;
    if (mk_isIRacing()) {
        gap = +$prop('IRacingExtraProperties.iRacing_Driver' + direction + '_' + driverIndex + '_RelativeGapToPlayer')
    } else if (mk_isACC()) {
        gap = +$prop('PersistantTrackerPlugin.Driver' + direction + '_' + driverIndex + '_Gap')
    }
    return Math.abs(gap);
}

function mk_get_Car_LapsSinceLastPit() {
    let laps;
    const direction = $prop('variable.direction');
    const driverIndex = +$prop('variable.driverIndex');
    if (mk_isIRacing()) {
        if ($prop('variable.isPlayer'))
            laps = $prop('IRacingExtraProperties.iRacing_Player_LapsSinceLastPit');
        else {
            const driverIndex1 = mk_NumberToTwoDigitString(driverIndex);
            laps = $prop('IRacingExtraProperties.iRacing_Driver' + direction + '_' + driverIndex1 +
                '_LapsSinceLastPit');
            // log('laps: ' + laps);
        }
    } else if (mk_isACC()) {
        let position;
        if ($prop('variable.isPlayer')) {
            position = $prop('DataCorePlugin.GameData.Position');
        } else {
            let driverIndex1 = driverIndex + 1; // ACC driver index is 1-based, iRacing is 0-based
            if (direction == 'AHead') {
                driverIndex1 *= -1;
            }
            position = getopponentleaderboardposition_aheadbehind(driverIndex1);
        }
        if (position) {
            laps = driverlapsdonesincelastpitout(position);
        }
    }

    if (laps && laps > 0)
        laps = Math.round(laps);

    return 'L' + laps;
}

function mk_get_Car_LapsSinceLastPit_Visibility() {
    let laps;
    const direction = $prop('variable.direction');
    const driverIndex = +$prop('variable.driverIndex');
    if (mk_isIRacing()) {
        if ($prop('variable.isPlayer'))
            laps = $prop('IRacingExtraProperties.iRacing_Player_LapsSinceLastPit');
        else {
            const driverIndex1 = mk_NumberToTwoDigitString(driverIndex);
            laps = $prop('IRacingExtraProperties.iRacing_Driver' + direction + '_' + driverIndex1 +
                '_LapsSinceLastPit');
        }
    } else if (mk_isACC()) {
        let position;
        if ($prop('variable.isPlayer')) {
            position = $prop('DataCorePlugin.GameData.Position');
        } else {
            let driverIndex1 = driverIndex + 1; // ACC driver index is 1-based, iRacing is 0-based
            if (direction == 'AHead') {
                driverIndex1 *= -1;
            }
            position = getopponentleaderboardposition_aheadbehind(driverIndex1);
        }
        if (position) {
            laps = driverlapsdonesincelastpitout(position);
        }
    }

    if (!laps || laps < 0)
        return false;

    return true;
}

function mk_Acc_get_Car_DriverCategory() {
    const direction = $prop('variable.direction');
    const driverIndex = +$prop('variable.driverIndex');

    let position;
    if ($prop('variable.isPlayer')) {
        position = $prop('DataCorePlugin.GameData.Position');
    } else {
        let driverIndex1 = driverIndex + 1; // ACC driver index is 1-based, iRacing is 0-based
        if (direction == 'AHead') {
            driverIndex1 *= -1;
        }
        position = getopponentleaderboardposition_aheadbehind(driverIndex1);
    }
    const realtimeCarUpdate = mk_ACC_getRealtimeCarUpdateByLivePosition(position);
    return mk_ACC_getDriverCategoryName(realtimeCarUpdate);
}

function mk_ACC_get_Car_DriverCategoryBackgroundColor() {
    const direction = $prop('variable.direction');
    const driverIndex = +$prop('variable.driverIndex');

    let position;
    if ($prop('variable.isPlayer')) {
        position = $prop('DataCorePlugin.GameData.Position');
    } else {
        let driverIndex1 = driverIndex + 1; // ACC driver index is 1-based, iRacing is 0-based
        if (direction == 'AHead') {
            driverIndex1 *= -1;
        }
        position = getopponentleaderboardposition_aheadbehind(driverIndex1);
    }
    const realtimeCarUpdate = mk_ACC_getRealtimeCarUpdateByLivePosition(position);
    return mk_ACC_getDriverCategoryBadgeColor(realtimeCarUpdate);
}

function mk_ACC_get_Car_CupCategory() {
    const direction = $prop('variable.direction');
    const driverIndex = +$prop('variable.driverIndex');

    let position;
    if ($prop('variable.isPlayer')) {
        position = $prop('DataCorePlugin.GameData.Position');
    } else {
        let driverIndex1 = driverIndex + 1; // ACC driver index is 1-based, iRacing is 0-based
        if (direction == 'AHead') {
            driverIndex1 *= -1;
        }
        position = getopponentleaderboardposition_aheadbehind(driverIndex1);
    }
    const realtimeCarUpdate = mk_ACC_getRealtimeCarUpdateByLivePosition(position);
    return mk_ACC_getCarCupCategoryName(realtimeCarUpdate);
}

function mk_ACC_get_car_CupCategoryBackgroundColor() {
    const direction = $prop('variable.direction');
    const driverIndex = +$prop('variable.driverIndex');

    let position;
    if ($prop('variable.isPlayer')) {
        position = $prop('DataCorePlugin.GameData.Position');
    } else {
        let driverIndex1 = driverIndex + 1; // ACC driver index is 1-based, iRacing is 0-based
        if (direction == 'AHead') {
            driverIndex1 *= -1;
        }
        position = getopponentleaderboardposition_aheadbehind(driverIndex1);
    }
    const realtimeCarUpdate = mk_ACC_getRealtimeCarUpdateByLivePosition(position);
    return mk_ACC_getCarCupCategoryBadgeColor(realtimeCarUpdate);
}

function mk_get_Footer_FuelLaps() {
    let laps;
    if (mk_isIRacing()) {
        laps = $prop('DataCorePlugin.Computed.Fuel_RemainingLaps');
        if (laps) {
            laps = parseFloat(laps).toFixed(1);
        }
    } else if (mk_isACC()) {
        laps = $prop('DataCorePlugin.GameRawData.Graphics.fuelEstimatedLaps').toFixed(1);
    }
    return laps + ' laps';
}


