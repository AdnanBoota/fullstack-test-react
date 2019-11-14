import { call, put, takeLatest } from 'redux-saga/effects'
import { getBeersResponse, getDetailsResponse, BeersActionsTypes } from './beers.actions';
import { fetchBeers, fetchBeerDetails } from '../api/beers.api';

function* fetchBeersEffect(props: any) {
	try {
		const beers = yield call(fetchBeers, { id: props.id });
		yield put(getBeersResponse(beers));
	} catch (e) {
		// TODO return some action.
	}
}

function* fetchBeersDetailsEffect(props: any) {
	try {
		const beers = yield call(fetchBeerDetails, { id: props.id });
		yield put(getDetailsResponse(beers));
	} catch (e) {
		// TODO return some action.
	}
}

function* searchBeersEffect(props: any) {
	var searchBeers = props.payload.beers.filter((k: any) => {
		if (k.name.includes(props.payload.search)) return k;
	});

	if (props.payload.search !== "")
		yield put(getDetailsResponse(searchBeers));
	else {
		const beers = yield call(fetchBeers, { id: 1 });	// by default just load 1st-page
		yield put(getDetailsResponse(beers));
	}
}

function* beersSagas() {
	yield takeLatest(BeersActionsTypes.GET_BEERS_REQUEST, fetchBeersEffect);
}

function* beerDetailsSagas() {
	yield takeLatest(BeersActionsTypes.GET_DETAILS_REQUEST, fetchBeersDetailsEffect);
}

function* beerSearchSagas() {
	yield takeLatest(BeersActionsTypes.GET_SEARCH_RESPONSE, searchBeersEffect);
}

export { beersSagas, beerDetailsSagas, beerSearchSagas };