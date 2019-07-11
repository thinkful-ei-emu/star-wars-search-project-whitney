import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {

  state = {
    isLoading: false,
    error: null,
    hasError: false,
    //searchInput: '',
    searchType: 'people',
    searchCompleted: false,
    results: {}
  }

  handleFetch = (searchTerm, searchTypeTerm) => {

    this.setState({
      isLoading: true,
      error: null,
    })

    const searchType = encodeURI(searchTypeTerm)
    const searchInput = encodeURI(searchTerm)
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
          isLoading: false,
          results: resJson
        })
      })
      .catch(error => {
        this.setState({
          error: error.message,
          hasError: true,
          isLoading: false,
        })
      })
  }

  // updateSearchInput = (userInput) => {
  //   this.setState({
  //     searchInput: userInput
  //   })
  // }

  updateSearchType = (userInput) => {
    this.setState({
      searchType: userInput,
    })
  }

  handleSubmit = (event, searchType, searchInput) => {
    event.preventDefault();

    document.getElementById('search-input').value = '';
    this.updateSearchType(searchType)
   
    this.handleFetch(searchInput, searchType);

    this.setState({
      searchCompleted: true,
    }) 
  }

  render() {
    return (
      <div className='app-container'>
        <div className="App">
          <Header />
          <SearchBar 
            handleSubmit={this.handleSubmit}
            />
          <Results 
            searchType={this.state.searchType} 
            results={this.state.results} 
            hasError={this.state.hasError} 
            isLoading={this.state.isLoading}
            searchCompleted={this.state.searchCompleted}/>
          <Footer />
        </div>
      </div>
    );
  } 
}

export default App;
