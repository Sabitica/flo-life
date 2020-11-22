import React, { Component } from 'react';
import { Container, ListGroup, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux'; // allows us to get state from redux into react
import { getEmotions } from '../actions/emotionActions';
import PropTypes from 'prop-types';

class EmotionsListing extends Component {

	componentDidMount() {
		this.props.getEmotions();
	};

	render() {

		const { emotions } = this.props.emotion,
				{ day } = this.props;

		if (day.emotions === undefined || day === undefined) {
			return null;
		}

		// submit should be like ...day, emotions 

		// TransitionGroup wrapped around {emotions.map}

		emotions.map(({_id}, index) => {
			if(day.emotions.includes(_id)) {
				emotions[index]['selected'] = true;
			} else {
				emotions[index]['selected'] = false;
			}			
		})

		return (

			<Container>

				<h1>Select an option from below</h1>

				<ListGroup>
						{emotions.map(({ _id, name, good, selected }) => (

									<div key={_id}>
										{selected &&
											<input 
												defaultChecked="checked"
												type="checkbox" 
												onChange={this.props.onChangeValue}
												name={ _id } />
										}
										{!selected &&
											<input 
												type="checkbox" 
												onChange={this.props.onChangeValue}
												name= { _id } />
										}

										
										<label htmlFor="emotion">{name}</label>
									</div>
							))
						}
				</ListGroup>

			</Container>

		)

	}

}

EmotionsListing.propTypes = {
	emotion: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	emotion: state.emotion
});

export default connect(mapStateToProps, { getEmotions })(EmotionsListing);