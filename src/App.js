import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import './App.css';

class App extends React.Component {

  state = {
    isLoading: false,
    error: null,
    hasError: false,
    searchInput: '',
    searchType: 'people',
    results: {}
  }

  handleFetch = () => {
    const searchType = encodeURI(this.state.searchType)
    const searchInput = encodeURI(this.state.searchInput)
    const url = `https://swapi.co/api/${searchType}/?search=${searchInput}`
    console.log(url);
    fetch(url)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(res.statusText)
      })
      .then(resJson => {
        this.setState({
          results: resJson
        })
      })
      .catch(error => {
        this.setState({
          error: this.error,
          hasError: true,
        })
      })
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

  handleSubmit = (event) => {
    event.preventDefault();

    document.getElementById('search-input').value = '';
    const type = document.getElementById('search-type').value;
    this.updateSearchType(type)
    this.handleFetch(); 
    //NEED TO WORK ON ~ ASYNC ISSUES   
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar 
          updateSearchInput={this.updateSearchInput} 
          updateSearchType={this.updateSearchType}
          handleSubmit={this.handleSubmit}
          />
        <Results searchType={this.state.searchType} results={this.state.results}/>
      </div>
    );
  } 
}

export default App;
