function mk_getCarOpacity() {
	return 40;
}

function mk_getIndicatorCarHeight() {
	return 60;
}

function mk_getCarBackgroundColor() {
	return 'white';
}

function mk_getCarGridLength() {
	return 100;
}

function mk_getThresholdDistance() {
	return 30;
}

function mk_IsBehindCarVisible() {
	const dist = +$prop('IRacingExtraProperties.iRacing_DriverBehind_00_Distance');
	return dist > 0 && dist < mk_getThresholdDistance() && !$prop('SpotterCarLeft') && !$prop('SpotterCarRight');
}

function mk_IsBehindRightCarVisible() {
	const dist = +$prop('IRacingExtraProperties.iRacing_DriverBehind_00_Distance');
	return $prop('SpotterCarRight') == 1 && dist != 0 && dist < mk_getThresholdDistance();
}

function mk_IsBehindLeftCarVisible() {
	const dist = +$prop('IRacingExtraProperties.iRacing_DriverBehind_00_Distance');
	return $prop('SpotterCarLeft') == 1 && dist != 0 && dist < mk_getThresholdDistance();
}

function mk_IsAHeadRightCarVisible() {
	const dist = +$prop('IRacingExtraProperties.iRacing_DriverAhead_00_Distance');
	return $prop('SpotterCarRight') == 1 && dist != 0 && dist < mk_getThresholdDistance();
}

function mk_IsAHeadLeftCarVisible() {
	const dist = +$prop('IRacingExtraProperties.iRacing_DriverAhead_00_Distance');
	return $prop('SpotterCarLeft') == 1 && dist != 0 && dist < mk_getThresholdDistance();
}

function mk_IsAHeadCarVisible() {
	const dist = +$prop('IRacingExtraProperties.iRacing_DriverAHead_00_Distance') * -1;
	return dist > 0 && dist < mk_getThresholdDistance() && !$prop('SpotterCarLeft') && !$prop('SpotterCarRight');
}

function mk_isCarGridVisible() {
	return mk_IsAHeadCarVisible() || mk_IsBehindCarVisible() || mk_IsBehindRightCarVisible();
}

// Experimental - only right indicator

function mk_IsRightCarVisible() {
	if ($prop('SpotterCarRight')) {
		const distAhead = +$prop('IRacingExtraProperties.iRacing_DriverAhead_00_Distance') * -1;
		if (distAhead < mk_getThresholdDistance()) {
			return true;
		}
		const distBehind = +$prop('IRacingExtraProperties.iRacing_DriverBehind_00_Distance');
		if (distBehind < mk_getThresholdDistance()) {
			return true;
		}
	}
	return false;
}

function mk_getTopOfRightCar() {
	const threashold = mk_getThresholdDistance();

	let distance = +$prop('IRacingExtraProperties.iRacing_DriverAhead_00_Distance');
	if (distance < 0 && (distance * -1) < threashold) {
		const ratio = distance / threashold;
		const gridLength = mk_getCarGridLength();
		const r = 200 + gridLength * ratio * 2 - 60;
		return r;
	}

	distance = +$prop('IRacingExtraProperties.iRacing_DriverBehind_00_Distance');
	const ratio = distance / threashold;
	const gridLength = mk_getCarGridLength();
	const r = 200 + gridLength * ratio * 2;
	return r;
}