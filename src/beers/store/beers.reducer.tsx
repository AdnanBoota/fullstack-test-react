import { BeersActionsTypes } from './beers.actions';
import { IAction } from '../../store/action.type';


interface IBeersStateType {
	beers: []
}


const initialState: IBeersStateType = {
	beers: []
};

const beersReducer = (state = initialState, action: IAction) => {
	switch (action.type) {
		case BeersActionsTypes.GET_BEERS_RESPONSE:
			console.log('coming here', action)
			return { ...state, beers: action.payload };
		case BeersActionsTypes.GET_DETAILS_RESPONSE:
			console.log('coming here', action)
			return { ...state, beers: action.payload };
		default:
			console.log('default state', state)
			return state;
	}
};

export default beersReducer;