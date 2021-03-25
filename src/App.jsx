import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Lifecycle from './lifecycles-component';

class App extends Component {
  constructor(props)
  {
    super(props);

    this.state = {
      showChild: true,
      text: ''
    };
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className='App-logo' alt='Logo'/>
          <button
            onClick={() => 
              this.setState(state => ({
                showChild: !state.showChild
              }))
            }
          >
          Toggle lifecycle
          </button>
          <button
            onClick={() => 
              this.setState(state => ({
                text: state.text + '_helo'
              }))
            }
          >
          Update text
          </button>
          {this.state.showChild ? <Lifecycle text={this.state.text}/> : null}
        </header>
      </div>
    );
    }
}

export default App;
