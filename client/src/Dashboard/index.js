import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../actions/profileActions';

class Dashboard extends Component {
	  constructor(props) {
    super(props);
    };

	componentDidMount() {

		this.props.getCurrentProfile();
	}

	render() {
		const {user} = this.props.auth;
		const{profile, loading} = this.props.profile;
		console.log(this.props.profile);

		let dashboardContent;

		if (profile === null || loading) {
			dashboardContent = <h4>Loading...</h4>
		} else {
			dashboardContent = <h1>Hello!</h1>
		}

		return (
			<h3>Dashboard</h3>


			)
	}
}

Dashboard.propTypes = {
	getCurrentProfile: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	profile: state.profile,
	auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard)
