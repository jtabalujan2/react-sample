import React, {Component} from "react"
import "./App.css"
import {hot} from "react-hot-loader"
import PropTypes from "prop-types"
import { Route, Switch} from "react-router-dom";

import Popular from './Popular'
import Nav from './nav'
import Battle from './Battle'


//parent component that will contain objects to reference by children components
class App extends Component {
    render() {
        return(
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Popular}/>
                    <Route exact path="/battle" component={(Battle)}/>
                    <Route render={() => {
                        return (
                            <h1>404: Not Found</h1>
                            )
                        }   
                    } 
                    />
                </Switch>
            </div>
        )
    }
}


export default App