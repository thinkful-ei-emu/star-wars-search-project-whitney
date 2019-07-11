import React from 'react';
import cuid from 'cuid';

class SpeciesResultCard extends React.Component {

  render() {
    return(
      this.props.results.results.map(result => (
        <div key={cuid()}>
          <h2>{result.name}</h2>
          <ul>
            <li key={cuid()}>Classification: {result.classification}</li>
            <li key={cuid()}>Designation: {result.designation}</li>
            <li key={cuid()}>Average Height: {result.average_height} cm</li>
            <li key={cuid()}>Skin Colors: {result.skin_colors}</li>
            <li key={cuid()}>Hair Colors: {result.hair_colors}</li>
            <li key={cuid()}>Eye Colors: {result.eye_colors}</li>
            <li key={cuid()}>Average Lifespan: {result.average_lifespan} years</li>
            <li key={cuid()}>Language: {result.language}</li>
          </ul>
        </div>
      ))
    )
  }
}

export default SpeciesResultCard;