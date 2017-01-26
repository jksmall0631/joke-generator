import React, {Component} from 'react';

export default class JokesSection extends Component{
  constructor(){
    super();
    this.state = {
      jokes: null,
    }
  }


  render(){
    console.log(this.state.jokes);
    // let jokes = this.state.jokes.map((joke) => {
    //   console.log(joke);
    // })
    return(
      <p>bla</p>
    )
  }
}
