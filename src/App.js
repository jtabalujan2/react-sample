import React, {Component} from "react"
import "./App.css"
import {hot} from "react-hot-loader"
import PropTypes from "prop-types"

import Popular from './Popular'

//parent component that will contain objects to reference by children components
class App extends Component {
    render() {
        return(
            <div>
                <Popular />
            </div>
        )
    }
}


export default App