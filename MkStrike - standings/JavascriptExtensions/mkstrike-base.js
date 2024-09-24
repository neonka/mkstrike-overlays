function mk_getActualVersion() {
    return '1.1.0';
}

function mk_getBranchName() {
    return '5-v110';
}

function mk_isIRacing() {
    return $prop('DataCorePlugin.CurrentGame') == 'IRacing';
}

function mk_isACC() {
    return $prop('DataCorePlugin.CurrentGame') == 'AssettoCorsaCompetizione';
}

function mk_DefaultBlinkSpeedMs() {
    return 400;
}

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

function mk_getPlayerTextColor() {
    return '#FFFFE04C';
}

function mk_getSuccessColor() {
    return '#81D540';
}

function mk_getAlertColor() {
    return '#D50019';
}

function mk_getBackgroundCarModel() {
    return '#FFF0F8FF';
}


function mk_getBackground1() {
    return '#C8000000';
}

function mk_getBackground2() {
    return '#C80F0F0F';
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
    if (carName.startsWith('Lexus'))
        return 'Lexus';
    if (carName.startsWith('Maserati'))
        return 'Maserati';
    if (carName.startsWith('Bentley'))
        return 'Bentley';

    log('Relative, missing: ' + carName);

    return carName;
}

function mk_getSRBackgroundColorImpl(licence) {
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

function mk_isVersionAlertVisible(overlayName) {
    if (!overlayName || overlayName == '') {
        log('mk_isVersionAlertVisible() -> overlayName must be provided.');
        return;
    }
    if (root['block'])
        return false;

    const url = 'https://raw.githubusercontent.com/neonka/mkstrike-overlays/' + mk_getBranchName() + '/versions.json';
    // log('mk_isVersionAlertVisible() -> checking new version: ' + url);
    const jsonStr = downloadstringasync(500, url);

    if (jsonStr) {
        const json = JSON.parse(jsonStr);
        if (json[overlayName] != mk_getActualVersion()) {
            let start;
            if (!root['stamp']) {
                root['stamp'] = Date.now();
            }
            start = root['stamp'];
            const curr = Date.now();
            if (((curr - start) / 1000) < 6)
                return true;
        } else {
            root['block'] = true;
        }
    }

    return false;
}