import React, {Component} from 'react'

class Battle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            playerOneName: '',
            playerTwoName: '',
            playerOneImage: null,
            playerTwoImage: null
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(id, username) {
        this.setState(() => {
            let newState = {}

            newState[id+'name'] = username
            newState[id+'Image']= 'https://github.com/' + username + '.png?size=200'
            return newState
        })
    }


    render() {
        let playerOneName = this.playerOneName
        let playerTwoName = this.playerTwoName

        return(
            <React.Fragment>
                <div className="row">
                    
                </div>
            </React.Fragment> 
        )
    }

}

export default Battle