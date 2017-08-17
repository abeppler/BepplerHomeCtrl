import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'admin-lte/bootstrap/css/bootstrap.min.css';
import 'admin-lte/dist/css/AdminLTE.min.css'

class App extends Component {
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
                  <div className="col-md-6">
                    Eita col1
                  </div>
                  <div className="col-md-6">
                    Eita col2
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
