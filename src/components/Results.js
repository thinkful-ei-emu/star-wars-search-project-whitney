import React from 'react';
import ResultCards from './ResultCards';

class Results extends React.Component {

  render() {
    const randomSaying = 'The force is strong with this one...'
    return(
      <div className='results'>
        <h2>
          {randomSaying}
        </h2>
        <div>
          Matching Results: {this.props.results.count}
        </div>
        <ResultCards searchType={this.props.searchType} results = {this.props.results}/>
      </div>
    )
  }
}

export default Results