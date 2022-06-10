import * as React from 'react';
import './style.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';




export default function App() {
  return (
    <div id="wrapper">
      <Header notification=" Dosla nova roba!"  text="OBAVIJEST:" />
      <Main />
      <Footer warning="Don't copy our stuff!"/>
    </div> 
  );
}
