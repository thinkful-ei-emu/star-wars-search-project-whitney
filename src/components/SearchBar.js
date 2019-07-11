import React from 'react';

class SearchBar extends React.Component {

  
  render() {
    return(
      <form 
        className='search-bar'
        onSubmit={(e) => {this.props.handleSubmit(e)}}
        >
        <label htmlFor='search-type'>
          I'm looking for a 
        </label>
        <select 
          id='search-type' 
          //onChange={(e) => this.props.updateSearchType(e.target.value)}
          >
          <option value='people'>character</option>
          <option value='planets'>planet</option>
          <option value='species'>species</option>
          <option value='starships'>spaceship</option>
          <option value='vehicles'>vehicle</option>
          <option value='films'>film</option>
        </select>
        <label htmlFor='search-input'> called
          <input 
            id='search-input' 
            type='text' 
            placeholder='Skywalker' 
            required
            onChange={(e) => this.props.updateSearchInput(e.target.value)}
            />
        </label>
        <button type='submit' disabled={this.props.updateSearchInput}>Search</button>
      </form>
    )
  }
}

export default SearchBar;