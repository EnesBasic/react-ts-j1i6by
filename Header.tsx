import * as React from 'react';
import Logotype from './Logotype';
import Navigation from './Navigation';

export default function Header(props){
  return(
    <header>
      <span> {props.text} {props.notification}</span>
     <Logotype />
     <Navigation />
    </header>
  );
}
