function mk_isPitInfoVisible() {
	const toPitEntry = $prop('IRacingExtraProperties.iRacing_DistanceToPitEntry');
	return toPitEntry && toPitEntry < mk_getActivationDistance() || $prop('IsInPitLane');
}

function mk_getActivationDistance() {
	return 100;
}

function mk_isDistanceBarVisible() {
	const toPitEntry = $prop('IRacingExtraProperties.iRacing_DistanceToPitEntry');
	// log(toPitEntry);
	return toPitEntry && toPitEntry < mk_getActivationDistance() && !$prop('IsInPitLane');
}

function mk_getDistanceBarHeightConst() {
	return 300;
}

function mk_getDistanceBarToPitEntryHeight() {
	// 
	// 
	if (!$prop('IsInPitLane') && !$prop('IsInPit')) {
		const limit = mk_getActivationDistance();
		const toPitEntry = $prop('IRacingExtraProperties.iRacing_DistanceToPitEntry');
		if (limit > toPitEntry) {
			return toPitEntry / limit * mk_getDistanceBarHeightConst();
		}
	}
	return mk_getDistanceBarHeightConst();
}

function mk_isCurrentSpeedUnderLimit() {
	return $prop('SpeedKmh') <= $prop('PitLimiterSpeed');
}

function mk_getPitInfoBackgroundColor() {
	if (mk_isCurrentSpeedUnderLimit()) {
		return '#54AB00';
	} else {
		return '#D50019';
	}
}

// function mk_getDistanceBarToPitEntryHeight() {
// 	if ($prop('IsInPitLane') && !$prop('IsInPit')) {
// 		const limit = mk_getActivationDistance();
// 		const toPitEntry = $prop('IRacingExtraProperties.iRacing_DistanceToPitBox');
// 		if (limit > toPitEntry) {
// 			return toPitEntry / limit * mk_getDistanceBarHeightConst();
// 		}
// 	}
// 	return mk_getDistanceBarHeightConst();
// }

function mk_getDistanceBarColor() {
	return '#FF580F'
}

function mk_getPitLimiterBackgroundColor() {
	return '#D50019';
}

// function mk_getPitLimitSpeedBackgroundColor() {
// 	return 'black'; //#F7E200
// }