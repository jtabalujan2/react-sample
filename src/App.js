import React, {Component} from "react"
import "./App.css" 
import {hot} from "react-hot-loader"
import PropTypes from "prop-types"

//parent component that will contain objects to reference by children components
class App extends Component {
    render() {
        return(
            <div>
                <Name name={this.props.profile.name}/>
                <Avatar img={this.props.profile.img}/>
                <Username username={this.props.profile.username}/>
            </div>
        )
    }
}

export default App