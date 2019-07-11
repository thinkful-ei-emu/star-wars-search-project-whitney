import React from 'react';
import VehicleResultCard from './VehicleResultCard';
import StarshipResultCard from './StarshipResultCard';
import SpeciesResultCard from './SpeciesResultCard';
import PlanetResultCard from './PlanetResultCard';
import PeopleResultCard from './PeopleResultCard';
import FilmResultCard from './FilmResultCard';

class ResultCards extends React.Component {

  //Source: Stack Overflow - https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
  numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

  resultCard = () => {
    
    const type = this.props.searchType
    //console.log(this.props.results);
    //console.log(type);
    
    if(!this.props.results.results) {
      return (<p>THESE AREN'T THE DROIDS YOU'RE LOOKING FOR...</p>)
    } else
    if(type === 'films') {
      return(
        <FilmResultCard results={this.props.results}/>
      )
    } else
    if(type === 'people') {
      return (
        <PeopleResultCard results={this.props.results}/>
      )
    } else
    if(type === 'planets') {
      return (
        <PlanetResultCard numberWithCommas={this.numberWithCommas} results={this.props.results}/>
      ) 
    } else
    if(type === 'species') {
      return(
        <SpeciesResultCard results={this.props.results}/>
      )
    } else
    if(type === 'starships') {
      return(
        <StarshipResultCard numberWithCommas={this.numberWithCommas} results={this.props.results}/>
      )
    } else
    if(type === 'vehicles') {
      return(
        <VehicleResultCard numberWithCommas={this.numberWithCommas} results={this.props.results}/>
      )
    } 
  }
  

  render() {
    
    return (
      <div className='result-cards-container'>
        {this.resultCard()}
      </div>
    )
  }
}

export default ResultCards