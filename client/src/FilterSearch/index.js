import React from "react";
import "./style.css";

class FilterSearch extends React.Component {
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
          <button id="submit-button" type="submit" className="button">
            <strong>Search</strong>
          </button>
        </div>
        <h1 className='filtered-names'>{filteredCards.map((card)=>{
          return <div>{card.name}</div>
        })}</h1>
        <hr className="line" />
      </div>
    );
  }
}

export default FilterSearch;

