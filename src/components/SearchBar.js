import React from 'react';
import '../styles/SearchBar.css';

class SearchBar extends React.Component {

  state = {
    searchInput: '',
    searchType: 'people',
  }

  updateSearchInput = (userInput) => {
    this.setState({
      searchInput: userInput
    })
  }

  updateSearchType = (userInput) => {
    this.setState({
      searchType: userInput
    })
  }

  render() {
    return(
      <form 
        className='search-bar'
        onSubmit={(e) => {this.props.handleSubmit(e, this.state.searchType, this.state.searchInput)}}
        >
        <label htmlFor='search-type' className='label'>
          I'm looking for a 
        </label>
        <select 
          id='search-type' 
          onChange={(e) => this.updateSearchType(e.target.value)}>
          <option value='people'>character</option>
          <option value='planets'>planet</option>
          <option value='species'>species</option>
          <option value='starships'>spaceship</option>
          <option value='vehicles'>vehicle</option>
          <option value='films'>film</option>
        </select>
        <label htmlFor='search-input' className='label'> called
          <input 
            id='search-input' 
            type='text' 
            placeholder='Skywalker' 
            onChange={(e) => this.updateSearchInput(e.target.value)}
            />
        </label>
        <div className='spelling-help'>
          If you're not sure how to spell it, just type in the first few letters!
        </div>
        <button type='submit' id='subBtn'>Search</button>
      </form>
    )
  }
}

export default SearchBar;