import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'admin-lte/bootstrap/css/bootstrap.min.css';
import 'admin-lte/dist/css/AdminLTE.min.css'

class App extends Component {

  constructor() {
    super()

    this.state = {
      valor: 'valor inicial'
    }
  }

  save = (event) => {
    this.setState({
      valor: event.target.value
    })
  }

  render() {
    return (
      <div> 
        <div className="App">
          <div className="App-header">
            <div className="row">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="content">
            <div className="box box-default">
              <div className="box-header with-border">
                Meu Header
              </div>
              <div className="box-body">
                <div className="row">
                  <div className="col-md4">
                    {this.state.valor}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md4">
                    Campo:
                  </div>
                  <div className="col-md8">
                    <input type="text" onChange={this.save}/>
                  </div>
                </div>
              </div>
              Hello AdminLTE World!
            </div>            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
