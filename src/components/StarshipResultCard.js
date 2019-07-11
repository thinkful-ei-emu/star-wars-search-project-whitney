import React from 'react';
import cuid from 'cuid';
import '../styles/ResultCards.css';

class StarshipResultCard extends React.Component {

  render() {
    return (
      this.props.results.results.map(result => (
        <div key={cuid()} className='result-card'>
          <h2>{result.name}</h2>
          <ul>
            <li key={cuid()}>Model: {result.model}</li>
            <li key={cuid()}>Manufacturer: {result.manufacturer}</li>
            <li key={cuid()}>Cost: {result.cost_in_credits === 'unknown' ? result.cost_in_credits : this.props.numberWithCommas(result.cost_in_credits)} credits</li>
            <li key={cuid()}>Length: {result.length} meters</li>
            <li key={cuid()}>Max Atmosphering Speed: {result.max_atmosphering_speed}</li>
            <li key={cuid()}>Crew: {result.crew === 'unknown' ? result.crew : this.props.numberWithCommas(result.crew)}</li>
            <li key={cuid()}>Passengers: {result.passengers === 'unknown' ? result.passengers : this.props.numberWithCommas(result.passengers)}</li>
            <li key={cuid()}>Cargo Capacity: {result.cargo_capacity === 'unkown' ? result.cargo_capacity : this.props.numberWithCommas(result.cargo_capacity)}</li>
            <li key={cuid()}>Hyperdrive Rating: {result.hyperdrive_rating}</li>
            <li key={cuid()}>Starship Class: {result.starship_class}</li>
          </ul>
        </div>
      ))
    )
  }
}

export default StarshipResultCard;