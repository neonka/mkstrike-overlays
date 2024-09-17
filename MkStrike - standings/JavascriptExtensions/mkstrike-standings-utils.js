function mk_getActualVersion() {
	return '1.0.0';
}

function mk_DefaultBlinkSpeedMs() {
	return 400;
}

function mk_getSuccessColor() {
	return '#009615';
}

function mk_getAlertColor() {
	return '#D50019';
}

function mk_isPlayerTextColor() {
	return '#FFFFE04C';
}

function mk_getPlayerClassOtherCarsTopOffset() {
	return 102;
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

function mk_disconnectedOpacity() {
	return 60;
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

function getClassCount() {
	for (let i = 1; i <= 9; i++) {
		if (+$prop('IRacingExtraProperties.iRacing_ClassInfo_' + getFormattedCarNumber(i) + '_OpponentsWithPosition') === 0) {
			return i - 1;
		}
	}
}

function mk_isPlayerClass(classIndex) {
	const className = $prop('IRacingExtraProperties.iRacing_ClassInfo_' + classIndex + '_Name');
	const playerClassName = $prop('IRacingExtraProperties.iRacing_Player_ClassName');
	return className === playerClassName;
}

function mk_getNumberOfCarsInClass(classIndex) {
	const className = $prop('IRacingExtraProperties.iRacing_ClassInfo_' + classIndex + '_Name');
	const playerClassName = $prop('IRacingExtraProperties.iRacing_Player_ClassName');
	return +$prop('IRacingExtraProperties.iRacing_ClassInfo_' + classIndex + '_OpponentsWithPosition');
	// if (className === playerClassName) { // player class
	// 	return Math.min(+$prop('variable.carCountPlayer'), +$prop('IRacingExtraProperties.iRacing_ClassInfo_' + classIndex + '_OpponentsWithPosition'))
	// } else {
	// 	return Math.min(mk_getClassOtherCarsCount(), +$prop('IRacingExtraProperties.iRacing_ClassInfo_' + classIndex + '_OpponentsWithPosition'));
	// }
}

function mk_getNumberOfCarsInClass1(classIndex) {
	const className = $prop('IRacingExtraProperties.iRacing_ClassInfo_' + classIndex + '_Name');
	const playerClassName = $prop('IRacingExtraProperties.iRacing_Player_ClassName');
	if (className === playerClassName) { // player class
		return Math.min(10, +$prop('IRacingExtraProperties.iRacing_ClassInfo_' + classIndex + '_OpponentsWithPosition'))
	} else {
		return Math.min(3, +$prop('IRacingExtraProperties.iRacing_ClassInfo_' + classIndex + '_OpponentsWithPosition'));
	}
}

function mk_getNumberOfCarsInNonPlayerClass(classIndex) {
	return Math.min(3, +$prop('IRacingExtraProperties.iRacing_ClassInfo_' + classIndex + '_OpponentsWithPosition'));
}

function mk_getTopOffsetForClass(classIndexes) {
	let offset = 0;
	for (let i = 0; i < classIndexes.length; i++) {
		offset += 20 + 25 * mk_getNumberOfCarsInClass1(classIndexes[i]) + 10;
	}
	return offset;
}

function mk_getCarOpacity() {
	return 100;
	// const classIndex = mk_NumberToTwoDigitString($prop('variable.classIndex1'));
	// const driverIndex = mk_NumberToTwoDigitString($prop('variable.driverIndex'));

	// const disconnectedOpacity = mk_disconnectedOpacity();
	// const isConnected = $prop('IRacingExtraProperties.iRacing_Class_' + classIndex + '_Leaderboard_Driver_' + driverIndex + '_IsConnected');

	// if (isConnected)
	// 	return 100;

	// return disconnectedOpacity;
}

function mk_getSRBackgroundColor() {
	const classIndex = mk_NumberToTwoDigitString($prop('variable.classIndex1'));
	const driverIndex = mk_NumberToTwoDigitString($prop('variable.driverIndex'));

	const licence = $prop('IRacingExtraProperties.iRacing_Class_' + classIndex + '_Leaderboard_Driver_' + driverIndex + '_SafetyRating');
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
	const classIndex = mk_NumberToTwoDigitString($prop('variable.classIndex1'));
	const driverIndex = mk_NumberToTwoDigitString($prop('variable.driverIndex'));
	const tireCompound = $prop('IRacingExtraProperties.iRacing_Class_' + classIndex + '_Leaderboard_Driver_' + driverIndex + '_TireCompound');
	const tireCompoundColor = $prop('IRacingExtraProperties.iRacing_Class_' + classIndex + '_Leaderboard_Driver_' + driverIndex + '_TireCompoundColor');

	if (tireCompound == 'M') {
		return '#0065C3';
	}
	return tireCompoundColor;
}

function mk_getTyreTextColor() {
	const classIndex = mk_NumberToTwoDigitString($prop('variable.classIndex1'));
	const driverIndex = mk_NumberToTwoDigitString($prop('variable.driverIndex'));
	const tireCompound = $prop('IRacingExtraProperties.iRacing_Class_' + classIndex + '_Leaderboard_Driver_' + driverIndex + '_TireCompound');

	if (tireCompound == 'M') {
		return 'white';
	}
	return 'black';
}

function mk_getTyreText() {
	const classIndex = mk_NumberToTwoDigitString($prop('variable.classIndex1'));
	const driverIndex = mk_NumberToTwoDigitString($prop('variable.driverIndex'));
	const tireCompound = $prop('IRacingExtraProperties.iRacing_Class_' + classIndex + '_Leaderboard_Driver_' + driverIndex + '_TireCompound');

	if (tireCompound == 'M')
		return 'W';

	return tireCompound;
}

function mk_urlAnalytics(message) {
	const url = 'https://mkstrike.online/overlay/analytics?';
	let params = {
		overlay: 'standings',
		version: $prop('variable.version'),
	};
	if (message && message !== '') {
		params.message = message;
	}
	var esc = encodeURIComponent;
	const query = Object.keys(params)
		.map(k => esc(k) + '=' + esc(params[k]))
		.join('&');

	const completeUrl = url + query;
	log(completeUrl);
	return completeUrl;
}

function mk_isVersionAlertVisible() {
	if (root['block'])
		return false;

	const jsonStr = downloadstringasync(500, 'https://raw.githubusercontent.com/neonka/mkstrike-overlays/1-init/versions.json');

	if (jsonStr) {
		const json = JSON.parse(jsonStr);
		if (json.standings != $prop('variable.version')) {
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