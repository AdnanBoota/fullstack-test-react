import React, { useEffect } from 'react';
import {
	Container, Row
} from 'reactstrap';
import styles from './beers-dashboard.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailsRequest } from '../store/beers.actions';
import BeerDetailsComponent from '../components/beerDetails.component';
import { RouteComponentProps } from 'react-router-dom';
import { withRouter } from "react-router";

// Type whatever you expect in 'this.props.match.params.*'
type PathParamsType = {
	param1: string,
}

// Your component own properties
type PropsType = RouteComponentProps<PathParamsType> & {
	someString: string,
}

const BeerDetails = (props: any) => {
	console.log(props);
	const dispatch = useDispatch();
	let beers = useSelector((state: any) => state.beersReducer.beers);
	const beerId = parseInt(props.match.params.id);

	beers = beers.filter((k: any) => k.id === beerId);
	console.log(beers, beers.length);

	useEffect(() => {
		if (beers.length !== 1) {
			dispatch(getDetailsRequest(beerId));
		}
	});

	return (
		<Container className={styles.container}>
			<h1 className={styles.shopTitle}>Welcome to the Beer Shop</h1>
			{beers.map((el: any, index: number) =>
				<BeerDetailsComponent key={index} beer={el} />
			)}
		</Container>
	)
};

export default withRouter(BeerDetails);