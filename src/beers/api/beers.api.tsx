import axios from 'axios';

const fetchBeers = (params: any): Promise<any> => {
	return axios.get(`${process.env.REACT_APP_API_URL}/beers?page=${params.id}`)
		.then(res => res.data.docs);
};

const fetchBeerDetails = (params: any): Promise<any> => {
	return axios.get(`${process.env.REACT_APP_API_URL}/beers/${params.id}`)
		.then(res => res.data);
};

export { fetchBeers, fetchBeerDetails };