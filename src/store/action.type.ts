export interface IAction {
	type: string;
	payload?: any;
}

export interface DetailsAction {
	id: number;
	type: string;
	payload?: any;
}