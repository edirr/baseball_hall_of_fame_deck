import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

class MyDeck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
    this.updateSearch = this.updateSearch.bind(this);
  }

updateSearch(event){
  const self = this;
  self.setState({search: event.target.value});
}

  render() {
    let filteredCards = this.props.cards.filter(
     (card)=> {
      return card.name.toLowerCase().indexOf(
        this.state.search.toLowerCase()) !== -1;
     }
     );
    console.log(filteredCards)
    return (
      <div className="container">
        <hr className="line" />
        <h1 className="search-heading">Search for a Card</h1>
        <div className="control tile is-6 search-form ">
          <input value={this.state.search} onChange={this.updateSearch} className="input" type="text" placeholder="Search Players" />
        </div>
        <div className='card-list filtered-names'>{filteredCards.map((card)=>{
          return(
      <Link to="/view/card"><img id="player-img" className="card-img" id={card.id} src={card.img} /><p className="player-name"><strong>{card.name}</strong></p></Link>
          )

        })}</div>
        <hr className="line" />
      </div>
    );
  }
}

export default MyDeck;
