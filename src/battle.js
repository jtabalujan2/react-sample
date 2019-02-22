import React, {Component} from 'react'

function PlayerProfile(props) {
return(
  
  //Container
  //Label of Player Number
  //Image
  //Username
  //Reset button
  <div className="column">
      <h2 className="label">{props.id}</h2> 
      <img
      className="avatar" 
      src={props.avatar} 
      alt={'Profile picture of ' + props.username}
      />
      <h2>{'@' + props.username}</h2>
  </div>
)
}

class PlayerInput extends Component {

constructor(props){
  super(props)
  this.state = {
      username:''
  }

  this.handleChange = this.handleChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
}

//uses helper function to manage state so the value of the input field is based on the state
handleChange(event) {
  let value = event.target.value

  this.setState(() => {
      return {
          username: value
      }
  })
}

handleSubmit(event) {
  event.preventDefault();
    //calls handleSubmit via the onSubmit action in Battle render component
  this.props.onSubmit(this.props.id,this.state.username)
}


render() {
  return(

      //Original Form to Submit GitHub Username
      //Will display: Player # - Form Input - Submit Button
      <form className="column" onSubmit={this.handleSubmit}>
      <label className="header" htmlFor="username">
          {this.props.label}
      </label>
      <input 
          id="username"
          placeholder="GitHub Username"
          type="text"
          autoComplete="off"
          value={this.state.username}
          onChange={this.handleChange}>
      </input>
      <button 
      className="button" 
      type="submit"
      disabled={!this.state.username}>
          Submit
      </button>

      </form>
  )
}
}


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

      newState[id+'Name'] = username
      newState[id+'Image']= 'https://github.com/' + username + '.png?size=200'
      return newState
  })
}


render() {

  //Allows access to the state of the main Battle component and attaching to variables
  let playerOneName = this.state.playerOneName
  let playerTwoName = this.state.playerTwoName
  let playerOneImage = this.state.playerOneImage
  let playerTwoImage = this.state.playerTwoImage

  return(
      <React.Fragment>
          <div className="row">
            
            {/* displays Input form only if player[One/Two]Name is false */}
              {!playerOneName && 
              <PlayerInput 
              id="playerOne" 
              label="Player One" 
              onSubmit={this.handleSubmit} />
              }

              {!playerTwoName && 
              <PlayerInput 
              id="playerTwo" 
              label="Player Two" 
              onSubmit={this.handleSubmit} />
              }

              {/* Renders PlayerProfile component once player[One/Two]Image is not null; Passes in avatar url and username to generate preview */}
              {playerOneImage !== null && 
              <PlayerProfile 
              avatar={playerOneImage}
              id="Player One"
              username={playerOneName} />
              }

              {playerTwoImage !== null && 
              <PlayerProfile 
              avatar={playerTwoImage}
              id="Player Two"
              username={playerTwoName} />
              } 

          </div>
      </React.Fragment> 
  )
}

}

export default Battle