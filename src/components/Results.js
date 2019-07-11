import React from 'react';
import ResultCards from './ResultCards';

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
      <div>
      <h2>
          {randomSaying}
        </h2>
        <div>
          Matching Results: {this.props.results.count}
        </div>
        <ResultCards searchType={this.props.searchType} results = {this.props.results}/>
        </div>
    )
    return(
      <div className='results'>
      {this.props.isLoading ? "Loading..." : 
      (this.props.hasError) ? `Oops! There was an error... Please try again later.` :
      (this.props.results.count === 0) ? `These aren't the droids you're looking for...  No matches found.` :
      (this.props.searchCompleted) ? results : ''}
      </div>
    )
  }
}

export default Results