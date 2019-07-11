import React from 'react';
import cuid from 'cuid';
import '../styles/ResultCards.css';

class PlanetResultCard extends React.Component {

  render() {
    return(
      this.props.results.results.map(result => (
        <div key={cuid()} className='result-card'>
          <h2>{result.name}</h2>
          <ul>
            <li key={cuid()}>Rotation Period: {result.rotation_period} hours</li>
            <li key={cuid()}>Orbital Period: {result.orbital_period} days</li>
            <li key={cuid()}>Diameter: {result.diameter} km</li>
            <li key={cuid()}>Climate: {result.climate}</li>
            <li key={cuid()}>Gravity: {result.gravity}</li>
            <li key={cuid()}>Terrain: {result.terrain}</li>
            <li key={cuid()}>Surface Water: {result.surface_water}%</li>
            <li key={cuid()}>Population: {result.population === 'unknown' ? result.population : this.props.numberWithCommas(result.population)}</li>
          </ul>
        </div>
      ))
    )
  }
}

export default PlanetResultCard;