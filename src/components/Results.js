import React from 'react';
import ResultCard from './ResultCard';

class Results extends React.Component {

  render() {
    const randomSaying = 'The force is strong with this one...'
    return(
      <div className='results'>
        <h2>
          {randomSaying}
        </h2>
        <ResultCard />
      </div>
    )
  }
}

export default Results