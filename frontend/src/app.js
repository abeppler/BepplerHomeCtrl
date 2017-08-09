'use strict'
import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {BrowserRouter as Router} from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

//Pages
import Home from 'pages/home'

import style from './css/style.styl'

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className={style.container}>
                    <Router>
                        <Route path="/" component={Home}/>
                    </Router>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default App
