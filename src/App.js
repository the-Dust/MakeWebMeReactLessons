import React, { Component } from 'react';
import Profile from './Profile';
import './logo.svg';
import './App.css';

class App extends Component {
    constructor(props){
      super(props);
      this.state = {
          age:25
      }
  }
  newRandomAge = ()=>{
      let a = Math.ceil(Math.random()*100)
      console.log("age", a)

      this.setState({
          age: a
      })
  }

  render(){
      return(
          <div>
              <button onClick={this.newRandomAge}>Rerender</button>
              {
                  this.state.age<50?
                  (
                      <Profile
                          age={this.state.age}
                          gender='man'
                          about='something about me...'
                      />
                  ):null
              }
          </div>
      )
  }
}

export default App;
