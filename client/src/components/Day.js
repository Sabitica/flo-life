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
					+ String("00" + new Date().getDate()).slice(-2)
	}


	componentDidMount() {
		//this.props.getDaysByDate(this.state.formattedDate)
		//this.props.getDaysByDate('2020-05-07')
		this.props.getDaysByDate('2020-04-29');
	};

	submitDay = (today) => {
		console.log(today);
		const newDay = {
			"date": today
		};
		this.props.addDay(newDay);
	}

	render() {
		const { today, formattedDate } = this.state, 
			  { currentDay } = this.props.day;	

		//console.log(currentDay);

		return (

			<Container>
				<h1>{today.toDateString()}</h1>
				<Button
				onClick={this.submitDay.bind(this, formattedDate)}
				>Save day (only for creating a new day)</Button>
				<EmotionsListing day={currentDay} />
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
	day: state.day
});


export default connect(mapStateToProps, {addDay, getDaysByDate})(Day);