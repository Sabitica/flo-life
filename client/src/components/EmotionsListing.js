import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux'; // allows us to get state from redux into react
import { getEmotions } from '../actions/emotionActions';
import PropTypes from 'prop-types';
import {v1 as uuid} from 'uuid';

class EmotionsListing extends Component {

	componentDidMount() {
		this.props.getEmotions();
	};

	state = {
			emotions: [
				{id: uuid(), name: 'Happy', good: true},
				{id: uuid(), name: 'Calm', good: true},
				{id: uuid(), name: 'Anxious', good: false},
				{id: uuid(), name: 'Angry', good: false},

			]
		}


	render() {

		const { emotions } = this.props.emotion;

		return (

			<Container>

				<h1>Select an option from below</h1>

				<ListGroup>

					<TransitionGroup className="shopping-list">

						{emotions.map(({ id, name, good }) => (
								<CSSTransition key={id} timeout={500} classNames="fade">

									<Button 
										style={{ backgroundColor: 'pink', color: 'black'}}

										>										
										{name} is {good ? 'good' : 'not good'}
									</Button>

								</CSSTransition>
							))
						}

					</TransitionGroup>

				</ListGroup>

			</Container>

		)

	}

}

EmotionsListing.propTypes = {
	getItems: PropTypes.func.isRequired,
	emotion: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	emotion: state.emotion
});

export default connect(mapStateToProps, { getEmotions })(EmotionsListing);