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
	const beers = useSelector((state: any) => state.beersReducer.beers);
	const beerId = props.match.params.id;

	useEffect(() => {
		if (!beers.length) {
			dispatch(getDetailsRequest(beerId));
		}
	});

	console.log('beer details page', beers);

	return (
		// <div className={`container ${styles.container}`}>
		// 	<div className={styles.beers}>
		// 		{beers.map((el: any, index: number) =>
		// 			<BeerDetailsComponent key={index} beer={el} />
		// 		)}
		// 	</div>
		// </div>
		<Container className={styles.container}>
			<h1 className={styles.shopTitle}>Welcome to the Beer Shop</h1>
			{beers.map((el: any, index: number) =>
				<BeerDetailsComponent key={index} beer={el} />
			)}
		</Container>
	)
};

export default withRouter(BeerDetails);