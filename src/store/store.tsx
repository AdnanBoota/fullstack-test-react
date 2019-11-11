import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import beersReducer from '../beers/store/beers.reducer';
import { composeWithDevTools } from 'redux-devtools-extension'
import { beersSagas, beerDetailsSagas, beerSearchSagas } from '../beers/store/beers.saga';
import { all } from 'redux-saga/effects'


const reducers = combineReducers(
	{
		beersReducer: beersReducer
	}
);
export const sagaMiddleware = createSagaMiddleware();

export default createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));

function* rootSaga() {
	yield all([
		beersSagas(), beerDetailsSagas(), beerSearchSagas()
	])
}

sagaMiddleware.run(rootSaga);