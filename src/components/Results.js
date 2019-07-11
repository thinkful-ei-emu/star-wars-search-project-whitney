import React from 'react';
import ResultCards from './ResultCards';
import '../styles/Results.css';

class Results extends React.Component {

  render() {
    const randomSayings = [
      'The force is strong with this one...',
      `These are the droids you're looking for!`,
      'I find your lack of faith disturbing...',
      'The Force will be with you...',
      'Do.  Or do not.  There is no try...',
      'I have a bad feeling about this...',
      'Why, you stuck-up, half-witted, scruffy-looking nerf herder!',
      'Never tell me the odds!',
      `There's always a bigger fish...`,
      `Well, if droids could think, there'd be none of us here, would there?`,
      'Power!  Unlimited power!',
      'So, this is how liberty dies.  With thunderous applause...',
      `I'm one with the Force.  The Force is with me.`,
      `I'll be there for you.  Cassian said I had to...`
    ]

    //Source: Stack Overflow - https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
    const randomSaying = randomSayings[Math.floor(Math.random() * randomSayings.length)];

    const results = (
      <div className='results'>
      <h2 className='random-saying'>
          {randomSaying}
        </h2>
        <div className='matching-results'>
          Matching Results: {this.props.results.count}
        </div>
        <ResultCards searchType={this.props.searchType} results = {this.props.results}/>
        </div>
    )
    return(
      <div className='results-container'>
      {this.props.isLoading ? <div className='loading'>Loading...</div> : 
      (this.props.hasError) ? <div className='error'>Oops! There was an error... Please try again later.</div> :
      (this.props.results.count === 0) ? <div className='no-results'>These aren't the droids you're looking for...  No matches found.</div> :
      (this.props.searchCompleted) ? results : ''}
      </div>
    )
  }
}

export default Results