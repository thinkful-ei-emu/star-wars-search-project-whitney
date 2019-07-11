import React from 'react';
import cuid from 'cuid';

class VehicleResultCard extends React.Component {

  render() {
    return(
      this.props.results.results.map(result => (
        <div key={cuid()}>
          <h2>{result.name}</h2>
          <ul>
            <li key={cuid()}>Model: {result.model}</li>
            <li key={cuid()}>Manufacturer: {result.manufacturer}</li>
            <li key={cuid()}>Cost: {result.cost_in_credits === 'unknown' ? result.cost_in_credits : this.props.numberWithCommas(result.cost_in_credits)} credits</li>
            <li key={cuid()}>Length: {result.length}</li>
            <li key={cuid()}>Max Atmosphering Speed: {result.max_atmosphering_speed}</li>
            <li key={cuid()}>Crew: {result.crew}</li>
            <li key={cuid()}>Passengers: {result.passengers}</li>
            <li key={cuid()}>Cargo Capacity: {result.cargo_capacity}</li>
            <li key={cuid()}>Vehicle Class: {result.vehicle_class}</li>
          </ul>
        </div>
      ))
    )
  }
}

export default VehicleResultCard;