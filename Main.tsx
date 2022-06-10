import * as React from 'react';

export default class Main extends React.Component{
  render(){
    var a = 10;
    var text;
    if (a==10){
      text = "a is 10!";
    }else{
      text = "A is not 10!";
    }

    return(
      <main>
        <h1>Hello from app! </h1>
        <p>Today is {7+10}th of May</p>
        <p>{text}</p>
      </main>
    );
  }
}
