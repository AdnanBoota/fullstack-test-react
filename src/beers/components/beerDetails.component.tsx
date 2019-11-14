import React, { useState } from 'react';
import {
	Button, Row, Col,
	CardImg, Badge, Alert, Toast, ToastBody, ToastHeader
} from 'reactstrap';
import styles from './beer.module.scss';
// import history from '../../utils/History';
import { withRouter } from "react-router";

const BeerDetails = (props: any) => {
	const [value, setValue] = useState(false);
	const { beer } = props;
	const showGravityDiff = () => {
		const newValue = !value;
		setValue(newValue);
	}

	return (
		<Row>
			<Col md="9">
				<h3>{beer.name}</h3>
				<p className={styles.textJustify}>{beer.description}</p>
				<p><span className={styles.bold}>abv: </span><Badge color="secondary">{beer.abv}</Badge> - <span className={styles.bold}>ibu: </span><Badge color="secondary">{beer.ibu}</Badge></p>
				<p><span className={styles.bold}>Food Pairing: </span>{beer.food_pairing.map((k: any, index: any) => <Badge className={styles.foodPair} key={index} color="warning">{k}</Badge>)}</p>
				<Alert color="success"><span className={styles.bold}>First Brewed: </span>{beer.first_brewed}</Alert>
				<Toast>
					<ToastHeader>
						Contributed By
					</ToastHeader>
					<ToastBody>
						{beer.contributed_by}
					</ToastBody>
				</Toast>
				<Button showGravityDiff={showGravityDiff} onClick={showGravityDiff} color="info" size="sm">Show Difference</Button>
				{value === true ? <p className={styles.gravityDiff}><span className={styles.bold}>Gravity diff. is:</span> {beer.target_og} - {beer.target_fg} = {Math.round((beer.target_og - beer.target_fg) * 100) / 100}</p> : null}
			</Col>
			<Col md="3"><CardImg className={styles.detailsImg} width="50px" height="300px" src={beer.image_url} alt="beer img" /></Col>
		</Row >

	);
};

export default withRouter(BeerDetails);