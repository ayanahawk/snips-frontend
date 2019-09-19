import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
    };
  }

  // uses newer arrow sytnax to bind method to this
  handleChange = event => {
    // capture the input data from the event
    // update state
    this.setState({
      searchText: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log('Submitting.');
    this.props.onSearch(this.state.searchText);

  };

  render() {
    return (
      <form id="search" onSubmit={this.handleSubmit}>
        <label htmlFor="search-text">
          <span className="icon">🔎</span>
        </label>
        
        <input
          type="text"
          name="search-text"
          id="search-text"
          value={this.state.searchText}
          onChange={this.handleChange}
        />
      
        <button type="submit">Search</button>
      </form>
    );
  }
}

