function mk_ACC_getDriverCategoryName(realtimeCarUpdate) {
    const driverCategory = realtimeCarUpdate.CarEntry.Drivers[realtimeCarUpdate.DriverIndex].Category;
    if (driverCategory == 0) {
        return 'BR'; //'Bronze'
    } else if (driverCategory == 1) {
        return 'SR'; //'Silver'    
    } else if (driverCategory == 2) {
        return 'GD'; //'Gold'
    } else if (driverCategory == 3) {
        return 'PL'; //'Platinum'
    }
}

function mk_ACC_getDriverCategoryBadgeColor(realtimeCarUpdate) {
    const driverCategory = realtimeCarUpdate.CarEntry.Drivers[realtimeCarUpdate.DriverIndex].Category;
    if (driverCategory == 0) {
        return '#FFCD7F32';
    } else if (driverCategory == 1) {
        return '#FFC0C0C0';
    } else if (driverCategory == 2) {
        return '#FFFFD700';
    } else if (driverCategory == 3) {
        return '#FFE5E4E2';
    }
}

function mk_ACC_getCarCupCategoryName(realtimeCarUpdate) {
    const cupCategory = realtimeCarUpdate.CarEntry.CupCategory;
    if (cupCategory == 0) {
        return 'Overall';
    } else if (cupCategory == 1) {
        return 'ProAm';
    } else if (cupCategory == 2) {
        return 'Am';
    } else if (cupCategory == 3) {
        return 'Silver';
    } else if (cupCategory == 4) {
        return 'National';
    }
}

function mk_ACC_getCarCupCategoryBadgeColor(realtimeCarUpdate) {
    const cupCategory = realtimeCarUpdate.CarEntry.CupCategory;
    // log('cupCategory: ' + cupCategory);
    if (cupCategory == 0) {
        return '#FFFFFFFF';
    } else if (cupCategory == 1) {
        return '#FF000000';
    } else if (cupCategory == 2) {
        return '#D50019';
    } else if (cupCategory == 3) {
        return '#FF666666';
    } else if (cupCategory == 4) {
        return '#FF008F4B';
    }
}

function mk_ACC_getRealtimeCarUpdateByLivePosition(livePosition) {
    const rawData = NewRawData();
    if (rawData && rawData.Cars && rawData.Cars.Count > 0) {
        for (const [key] of Object.entries(rawData.Cars)) {
            if (rawData.Cars[key].LivePosition == livePosition) {
                // log('found: ' + rawData.Cars[key].CarEntry.DriverIndex);
                return rawData.Cars[key];
            }
        }
    }
}

