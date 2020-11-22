import React, { Component } from 'react';
import { Container, Button } from 'reactstrap';
import { addDay, getDaysByDate } from '../actions/dayActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EmotionsListing from './EmotionsListing';

class Day extends Component {

	state = {
		today: new Date(),
		formattedDate: new Date().getFullYear()
					+ '-' 
					+ String("00" + (new Date().getMonth() + 1)).slice(-2)
					+ '-' 
					+ String("00" + new Date().getDate()).slice(-2),
		emotions: []
	}

	emotions = [];


	componentDidMount() {
		// this.props.getDaysByDate(this.state.formattedDate)
		//this.props.getDaysByDate('2020-05-07')
		this.props.getDaysByDate('2020-04-29');
		// this.props.getDaysByDate('2020-04-03');
	};

	// this will only work for emotions right now
	onFormChange = (event) => {
		let em = this.emotions;
		const target = event.target,
				value = target.type === 'checkbox' ? target.checked : target.value,
				name = target.name;
		if (value) {
			em.push(name)
		} else {
			em = em.filter(function(e) { return e !== name })
		}
		this.submitDay(this.state.formattedDate, em);
	}

	submitDay = (today, emotions) => {
		console.log(today);
		const newDay = {
			"date": today,
			"emotions": emotions
		};
		this.props.addDay(newDay);
	}

	render() {
		const { today, formattedDate } = this.state, 
			  { currentDay } = this.props.day;	

			  if (this.props.day === undefined) {
			  	return null;
			  }

			  if (this.props.day.getDaysCalled) {
			  	this.emotions = currentDay.emotions;
			  }

		return (

			<Container>
				<h1>{today.toDateString()}</h1>
				<Button
				onClick={this.submitDay.bind(this, formattedDate)}
				>Save day (only for creating a new day)</Button>
				<EmotionsListing 
					day={currentDay}
					onChangeValue={this.onFormChange}


				/>
				<Button color="dark">Submit</Button>
			</Container>

		)
	}
}

Day.propTypes = {
	addDay: PropTypes.func.isRequired,
	getDaysByDate: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	day: state.day,
});


export default connect(mapStateToProps, {addDay, getDaysByDate})(Day);