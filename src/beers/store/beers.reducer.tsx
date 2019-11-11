import { BeersActionsTypes } from './beers.actions';
import { IAction, IPageAction } from '../../store/action.type';


interface IBeersStateType {
	beers: []
}


const initialState: IBeersStateType = {
	beers: []
};

const beersReducer = (state = initialState, action: IPageAction) => {
	switch (action.type) {
		case BeersActionsTypes.GET_BEERS_RESPONSE:
			console.log('coming here', action, state.beers.concat(action.payload))
			return { ...state, beers: state.beers.concat(action.payload) };
		case BeersActionsTypes.GET_DETAILS_RESPONSE:
			console.log('coming here', action)
			return { ...state, beers: action.payload };
		default:
			console.log('default state', state)
			return state;
	}
};

export default beersReducer;