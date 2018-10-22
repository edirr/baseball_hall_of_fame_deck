import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../actions/profileActions';

class Dashboard extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			imgUrl: ''
		};
	}
	componentDidMount() {
		this.props.getCurrentProfile();		
	}
  
	render() {
		const { profile:{profile : profiles} } = this.props;
		const { user } = this.props.auth;
		const { profile } = this.props.profile;
		console.log(this.props)
		return (
			<div>
				<h3>Dashboard</h3>
				{
					!profiles ? [] :
					profiles.map(({name, imgUrl}) => 
						<p>{name} <img src={imgUrl} /></p>
					)
				}
			</div>		
		);
	}
}

Dashboard.propTypes = {
	getCurrentProfile: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	profile: state.profile,
	auth: state.auth
});



export default connect(mapStateToProps, { getCurrentProfile })(Dashboard)


