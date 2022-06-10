import * as React from 'react';


export default class Footer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      year: 2022,
      company: "By Company"
    };
  }

  render(){
    return(
      <footer>
        <a href="#">Copyright {this.state.company}! | {this.state.year}</a>
        <br />
        <a href=""><strong>{this.props.warning}</strong></a>
      </footer>
    );
  }
}