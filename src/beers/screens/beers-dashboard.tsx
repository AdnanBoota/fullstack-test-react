import React, { useEffect, useState } from 'react';
import {
	Container, Row, Col, InputGroup, Input, InputGroupAddon, Button
} from 'reactstrap';
import styles from './beers-dashboard.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getBeersRequest, getSearchResponse } from '../store/beers.actions';
import Beer from '../components/beer.component';
import { RouteComponentProps, withRouter } from 'react-router-dom';



const BeersDashboard = () => {

	const dispatch = useDispatch();
	var beers = useSelector((state: any) => state.beersReducer.beers);
	useEffect(() => {
		if (!beers.length) {
			dispatch(getBeersRequest());
		}
	});
	console.log(beers)

	// const [beers, setValue] = useState(beers);
	// setValue(beers);
	// console.log(beers)
	const searchCharts = (value: any) => {
		// on type find the beer which contain string, or fetch all beers using dispatch
		console.log(value);

		dispatch(getSearchResponse({ search: value, beers: beers }));
	}

	console.log(beers);


	return (
		<Container className={styles.container}>
			<Row>
				<h1 className={styles.shopTitle}>Welcome to the Beer Shop</h1>
				<Col xs="12" sm="12" md={{ size: 6, offset: 3 }}>
					<InputGroup>
						<Input onChange={(e) => searchCharts(`${e.target.value}`)} />
						<InputGroupAddon addonType="append">
							<Button color="secondary">Search</Button>
						</InputGroupAddon>
					</InputGroup>
				</Col>
			</Row>
			<Row>
				{beers.map((el: any, index: number) =>
					<Beer key={index} beer={el} />
				)}
			</Row>
		</Container>
	)
};


export default withRouter(BeersDashboard);