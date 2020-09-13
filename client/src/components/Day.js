import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { addDay } from '../actions/dayActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EmotionsListing from './EmotionsListing';

class Day extends Component {

	state = {
			today: new Date()
		}


	componentDidMount() {
		
	};

	submitDay = (today) => {
		console.log(today);
		const newDay = {
			"date": today
		};
		this.props.addDay(newDay);
	}

	render() {
		const { today } = this.state;

		const dayToDate = today.getDate() 
					+ '/' 
					+ today.getMonth() 
					+ '/' 
					+ today.getFullYear()

		return (

			<Container>
				<h1>{dayToDate}</h1>
				<Button
				onClick={this.submitDay.bind(this, dayToDate)}
				>Save day</Button>
				<EmotionsListing />
				<Button color="dark">Submit</Button>
			</Container>

		)

	}

}

Day.propTypes = {
	addDay: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	
});


export default connect(mapStateToProps, {addDay})(Day);