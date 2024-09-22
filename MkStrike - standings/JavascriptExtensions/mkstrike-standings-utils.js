function mk_getPlayerClassOtherCarsTopOffset() {
	return 102;
}

function mk_disconnectedOpacity() {
	return 60;
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

	return mk_getSRBackgroundColorImpl(licence);
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
