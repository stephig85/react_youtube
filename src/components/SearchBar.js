import React, { Component } from 'react';

//creates a component. include a render(), it is required
class SearchBar extends Component {

  render() {
    return (
    <div className="search-bar">
      <input onKeyUp={ this.props.onSearchTermChanged } placeholder="Search for videos" />
    </div>
    );
  }
}

export default SearchBar;
