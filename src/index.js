import React from 'react';
import { render } from 'react-dom';
import './index.css';
 
import Getdata from './App';
import * as serviceWorker from './serviceWorker';



class Searchhome extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        userInput : ""
      };
      this.print = this.print.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState ({
          userInput: event.target.value
        });
    }

    print() {
      console.log(this.state.userInput)
    }


    render() {
      return (
        <div>
          <div className="search" id="search">
              <input type="text" id="searchBox" className="search" value={this.state.userInput} onChange={this.handleChange} />
              <button className="search" id="searchButton" onClick={this.print} >Search</button>
          </div>
          <Getdata input={this.state.userInput}/>
        </div>
      );
    }
  }

render(<Searchhome />, document.getElementById('root'));

serviceWorker.unregister();
