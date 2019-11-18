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
			let uniqueValues = [...state.beers, ...action.payload.filter((item:any) => state.beers.every((item2:any) => item2._id != item._id))];
			return { ...state, beers: uniqueValues };
		case BeersActionsTypes.GET_DETAILS_RESPONSE:
			return { ...state, beers: action.payload };
		default:
			return state;
	}
};

export default beersReducer;