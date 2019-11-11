import axios from 'axios';

const fetchBeers = (): Promise<any> => {
	return axios.get(`${process.env.REACT_APP_API_URL}/beers`)
		.then(res => res.data);
};

const fetchBeerDetails = (params: any): Promise<any> => {
	return axios.get(`${process.env.REACT_APP_API_URL}/beers/${params.id}`)
		.then(res => res.data);
};

export { fetchBeers, fetchBeerDetails };