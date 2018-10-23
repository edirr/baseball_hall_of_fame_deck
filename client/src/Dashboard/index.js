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
    this.dynamicSingleCard = this.dynamicSingleCard.bind(this);
  }
  componentDidMount() {
    this.props.getCurrentProfile();
  }
  updateSearch(event){
  const self = this;
  self.setState({search: event.target.value});
}

dynamicSingleCard(card){
    // console.log(card.target)


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
          {
            filteredCards.map((card)=>
              <div className="columns card-tainer" >
                <div className='card-list filtered-names column is-two-fifths'>
                  <img id="player-img" onClick={(card)=>{this.dynamicSingleCard(card)}} className="card-img" api_id={card.apiId} src={card.imgUrl} style={{ paddingRight: '25px'}}/><p className="player-name"><strong>{card.name}</strong></p>
                </div>
                <div id="statsContain" className='column is-three-fifths'>
                  <SingleCard api_id={card.apiId} name={card.name} />
                </div>
              </div>
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
