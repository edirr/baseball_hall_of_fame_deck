import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SingleCard from '../SingleCard/';
import { getCurrentProfile } from '../actions/profileActions';
import "./style.css";

class Dashboard extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			imgUrl: '',
			search: '',
		};
		this.updateSearch = this.updateSearch.bind(this);
	}
	componentDidMount() {
		this.props.getCurrentProfile();
	}
	updateSearch(event){
  const self = this;
  self.setState({search: event.target.value});
}

	render() {
		// const cards = this.props.profile.profile
		// let filteredCards = cards.filter(
  //    (card)=> {
  //     return card.name.toLowerCase().indexOf(
  //       this.state.search.toLowerCase()) !== -1;
  //    }
  //    );
		const { profile:{profile : profiles} } = this.props;
		const { user } = this.props.auth;
		const { profile } = this.props.profile;
		console.log({profiles});

let filteredCards = !profiles
	? []
	: profiles.filter(card => {
			return (
				card.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
			);
	  });



		return (
			<div className="container">
        <hr className="line" />
        <h1 className="search-heading">Search for a Card</h1>
        <div className="control tile is-6 search-form ">
          <input value={this.state.search} onChange={this.updateSearch} className="input" type="text" placeholder="Search Players" />
        </div>
        <div className="columns card-tainer" />
        <div className='card-list filtered-names column is-two-fifths'>{
          filteredCards.map((card)=>
            <Link to="/view/card"><img id="player-img" className="card-img" api_id={card.apiId} src={card.imgUrl} style={{ paddingRight: '25px'}}/><p className="player-name"><strong>{card.name}</strong></p></Link>
          )
        }</div>
        <div className='column is-three-fifths'>
        <SingleCard/>
        </div>
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


