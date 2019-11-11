import { IAction, IPageAction, DetailsAction } from '../../store/action.type';


export enum BeersActionsTypes {
	GET_BEERS_REQUEST = '[Beers] get beers request',
	GET_BEERS_RESPONSE = '[Beers] get beers response',
	GET_DETAILS_REQUEST = '[Details] get details request',
	GET_DETAILS_RESPONSE = '[Details] get details response',
	GET_SEARCH_RESPONSE = '[Search] get search filter',
}


export const getBeersRequest = (pageId: any): IPageAction => {
	return { type: BeersActionsTypes.GET_BEERS_REQUEST, id: pageId };
};

export const getBeersResponse = (beers: any, id: number): IPageAction => {
	return { type: BeersActionsTypes.GET_BEERS_RESPONSE, payload: beers, id: id };
};

export const getDetailsRequest = (beerId: any): DetailsAction => {
	console.log(beerId);
	return { type: BeersActionsTypes.GET_DETAILS_REQUEST, id: beerId };
};

export const getDetailsResponse = (details: any): IAction => {
	return { type: BeersActionsTypes.GET_DETAILS_RESPONSE, payload: details };
};

export const getSearchResponse = (details: any): IAction => {
	return { type: BeersActionsTypes.GET_SEARCH_RESPONSE, payload: details };
};