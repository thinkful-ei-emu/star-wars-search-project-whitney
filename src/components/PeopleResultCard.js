import React from 'react';
import cuid from 'cuid';

class PeopleResultCard extends React.Component {

  render() {
    return(
      this.props.results.results.map(result => (
        <div>
        <h2>
          {result.name}
        </h2>
        <ul>
          <li key={cuid()}>Height: {result.height}</li>
          <li key={cuid()}>Mass: {result.mass}</li>
          <li key={cuid()}>Hair Color: {result.hair_color}</li>
          <li key={cuid()}>Skin Color: {result.skin_color}</li>
          <li key={cuid()}>Eye Color: {result.eye_color}</li>
          <li key={cuid()}>Birth Year: {result.birth_year}</li>
          <li key={cuid()}>Gender: {result.gender}</li>
        </ul>
        </div>
        ))
    )
  }
}

export default PeopleResultCard;