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
        return '#C46A38'; // '#FFCD7F32'
    } else if (driverCategory == 1) {
        return '#A6A9AC'; //'#FFC0C0C0'
    } else if (driverCategory == 2) {
        return '#FFD95B'; //'#FFFFD700'
    } else if (driverCategory == 3) {
        return '#EAE2D7'; //'#FFE5E4E2'
    }
}

function mk_ACC_getDriverCategoryBadgeTextColor(realtimeCarUpdate) {
    const driverCategory = realtimeCarUpdate.CarEntry.Drivers[realtimeCarUpdate.DriverIndex].Category;
    if (driverCategory == 0) {
        return 'white'; // '#FFCD7F32'
    } else if (driverCategory == 1) {
        return 'white'; //'#FFC0C0C0'
    } else if (driverCategory == 2) {
        return 'black'; //'#FFFFD700'
    } else if (driverCategory == 3) {
        return 'black'; //'#FFE5E4E2'
    }
}

function mk_ACC_getCarCupCategoryName(realtimeCarUpdate) {
    const cupCategory = realtimeCarUpdate.CarEntry.CupCategory;
    if (cupCategory == 0) {
        return 'Overall';
    } else if (cupCategory == 1) {
        return 'PRO-AM';
    } else if (cupCategory == 2) {
        return 'AM';
    } else if (cupCategory == 3) {
        return 'SILVER';
    } else if (cupCategory == 4) {
        return 'National';
    }
}

function mk_ACC_getCarCupCategoryBadgeColor(realtimeCarUpdate) {
    const cupCategory = realtimeCarUpdate.CarEntry.CupCategory;
    // log('cupCategory: ' + cupCategory);
    if (cupCategory == 0) {
        return '#85BFCA'; //'#FFFFFFFF'
    } else if (cupCategory == 1) {
        return '#7C72BD'; // '#FF000000'
    } else if (cupCategory == 2) {
        return '#E3494D'; //'#D50019'
    } else if (cupCategory == 3) {
        return '#7A7574'; // '#FF666666'
    } else if (cupCategory == 4) {
        return '#FA98CB'; //'#FF008F4B'
    }
}

function mk_ACC_getCarCupCategoryBadgeTextColor(realtimeCarUpdate) {
    const cupCategory = realtimeCarUpdate.CarEntry.CupCategory;
    // log('cupCategory: ' + cupCategory);
    if (cupCategory == 0) {
        return 'black'; //'#FFFFFFFF'
    } else if (cupCategory == 1) {
        return 'white'; // '#FF000000'
    } else if (cupCategory == 2) {
        return 'white'; //'#D50019'
    } else if (cupCategory == 3) {
        return 'white'; // '#FF666666'
    } else if (cupCategory == 4) {
        return 'black'; //'#FF008F4B'
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

