import * as React from 'react';

export default class Navigation extends React.Component{
  item1 (){
    alert("this is item 1:");
  }
  item2 (){
    alert("this is item 2:");
  }
  item3 (){
    alert("this is item 3:");
  }

  render(){
    return(
      <div className="right">
      <nav>
       <ul>
         <li><a onClick={this.item1} href="#">Item 1</a></li>
         <li><a onClick={this.item2} href="#">Item 2</a></li>
         <li><a onClick={this.item3} href="#">Item 3</a></li>
        </ul>
      </nav>
    </div>
    );
  }
}