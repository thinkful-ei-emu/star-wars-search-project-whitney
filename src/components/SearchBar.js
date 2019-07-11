import React from 'react';

class SearchBar extends React.Component {

  render() {
    return(
      <form className='search-bar'>
        <label htmlFor='search-type'>
          I'm looking for a 
        </label>
        <select id='search-type'>
          <option value='character'>character</option>
          <option value='planet'>planet</option>
          <option value='species'>species</option>
          <option value='spaceship'>spaceship</option>
          <option value='vehicle'>vehicle</option>
          <option value='film'>film</option>
        </select>
        <label htmlFor='search-input'> called
          <input id='search-input' type='text' placeholder='Skywalker' required/>
        </label>
        <button type='submit'>Search</button>
      </form>
    )
  }
}

export default SearchBar;