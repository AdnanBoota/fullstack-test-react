import React, { useEffect, useState } from 'react';
import {
	Container, Row, Col, InputGroup, Input, InputGroupAddon, Button
} from 'reactstrap';
import styles from './beers-dashboard.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getBeersRequest, getSearchResponse } from '../store/beers.actions';
import Beer from '../components/beer.component';
import InfiniteScroll from 'react-infinite-scroller';
import { RouteComponentProps, withRouter } from 'react-router-dom';



const BeersDashboard = () => {

	const dispatch = useDispatch();
	var beers = useSelector((state: any) => state.beersReducer.beers);
	useEffect(() => {
		if (!beers.length) {
			// dispatch(getBeersRequest(1));
		}
	});
	console.log(beers)

	const [searchString, setValue] = useState('');
	// setValue(beers);
	// console.log(beers)
	const searchCharts = (value: any) => {
		// on type find the beer which contain string, or fetch all beers using dispatch
		console.log(value);
		setValue(value);

		dispatch(getSearchResponse({ search: value, beers: beers }));
	}

	const loadItems = (page: any) => {
		console.log(page, searchString);
		// if (searchString === "" && page !== 1) page = 1;
		if (searchString === "") {
			dispatch(getBeersRequest(page));
		}
	}

	const loader = <div className="loader">Loading ...</div>;


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

			<InfiniteScroll
				pageStart={0}
				loadMore={loadItems}
				hasMore={true}
				loader={loader}>

				{/* <div className="tracks"> */}
				{/* {items} */}
				{/* </div> */}
				<Row>
					{beers.map((el: any, index: number) =>
						<Beer key={el.id} beer={el} />
					)}
				</Row>
			</InfiniteScroll>

		</Container>
	)
};


export default withRouter(BeersDashboard);