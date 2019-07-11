import React from 'react';
import cuid from 'cuid';

class FilmResultCard extends React.Component {

  render() {
    return(
      this.props.results.results.map(result => (
        <div key={cuid()}>
          <h2> {result.title} </h2>
          <ul>
            <li key={cuid()}>Episode: {result.episode_id}</li>
            <li key={cuid()}>Intro: {result.opening_crawl}</li>
            <li key={cuid()}>Directors and Producers: {result.director}, {result.producer}</li>
            <li key={cuid()}>Release Date: {result.release_date}</li>
          </ul>
        </div>
      ))
    )
  }
}

export default FilmResultCard;