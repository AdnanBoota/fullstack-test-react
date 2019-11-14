import React from 'react';

// import history from '../../utils/History';
import { withRouter } from "react-router";
import { useHistory } from 'react-router-dom';
import {
	Col, Card, CardImg, CardText, CardBody,
	CardTitle, CardSubtitle, Button
} from 'reactstrap';
import styles from './beer.module.scss';
const Details = (props: any, history: any) => {
	history.push(`/details/${props.id}`, { id: props.id });
}

const Beer = (props: any) => {
	let test = useHistory()
	const { beer, history } = props;
	return (
		<Col md="3">
			<Card className={styles.card} onClick={(e) => Details(beer, test)}>
				<CardImg className={styles.cardimg} src={beer.image_url} alt={'beer img'} />
				<CardBody>
					<CardTitle>{beer.name}</CardTitle>
					<CardSubtitle>{beer.tagline}</CardSubtitle>
				</CardBody>
			</Card>
		</Col>
	);
};

export default withRouter(Beer);