import React, {Component} from "react"
import ReactDOM from "react-dom"
import "./App.css"
import { Route, Switch, BrowserRouter} from "react-router-dom";

import Popular from './Popular'
import Nav from './nav'
import Battle from './Battle'
import Result from './result'


//parent component that will contain objects to reference by children components
class App extends Component {
    render() {
        return(
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Popular}/>
                    <Route exact path="/battle" component={(Battle)}/>
                    <Route path="/battle/results" component={Result}/>
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

ReactDOM.render(<BrowserRouter>
                    <App />
                </BrowserRouter>, document.getElementById("root")
)