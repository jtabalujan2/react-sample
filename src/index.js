import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'

let user = {
    "name": 'Julian Tabalujan',
    "img": 'https://avatars1.githubusercontent.com/u/44414444?s=460&v=4',
    "username": 'jtabalujan2'
}


ReactDOM.render(<App profile={user}/>, document.getElementById("root"))