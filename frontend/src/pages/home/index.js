/**
 * Created by rodrigo.wippel on 29/03/2017.
 */
import React, {Component} from 'react'
import Title from 'components/title'

import style from './home.styl'

class Home extends Component {

    render() {
        return (
            <div className={style.container}>
                <Title>Home page</Title>
            </div>
        )
    }
}

export default Home