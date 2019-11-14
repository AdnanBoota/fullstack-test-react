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
	const beerId = props.match.params.id;
	const dispatch = useDispatch();
	let beers = useSelector((state: any) => state.beersReducer.beers);
	beers = beers.filter((k: any) => k._id == beerId);

	useEffect(() => {
		if (!beers.length) {
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