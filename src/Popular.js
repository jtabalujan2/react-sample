import React, {Component} from "react"
import PropTypes from 'prop-types'
import Methods from './util/api'

function SelectedLang(props) {

    const tabs = ['All','Java','Javascript','Ruby','Python']

    return(
        <ul className="languages">
            { tabs.map((selected) => {
                return (
                <li 
                    //turns selected item red
                    style = {selected === props.currentState ? {color: '#d0021b'}: null}
                    //invokes updateTab function to update state
                    onClick={props.onSelect.bind(null, selected)} 
                    key={selected}>
                    {selected}
                </li>
                )
                })}
        </ul>
    )
}

function RepoGrid(props) {
   return(
      <ul className="repo-grid">
        {props.repos.map((repo) =>
            {
               return(
               <p>{repo.name}</p>
               )
            })}
    </ul>
   )
}

SelectedLang.propTypes = {
    currentState: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
}

class Popular extends Component {
        
    //sets default state for this component when loaded should be 'All'
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 'All',
            repos: null
        }

        this.updateTab = this.updateTab.bind(this)
    }

   updateTab(choice) {
    this.setState(() => { 
        return { 
            selectedTab: choice,
            repos: null
        }
    })
        
    Methods.fetchPopularRepos(choice)
    .then((response) => {
        this.setState(() => {
            return {
                repos: response
            }
        })
    })

   }

   componentDidMount() {    
       this.updateTab(this.state.selectedTab)
   }

    render() {
        
        return (
            <React.Fragment>
                <SelectedLang 
                    //references constructor that sets state object
                    currentState = {this.state.selectedTab}
                    //references updateTab function to be invoked by bind
                    onSelect = {this.updateTab}
                />
                {!this.state.repos ? <p>Loading...</p> : <RepoGrid repos={this.state.repos}/>}
                
            </React.Fragment>
        )
    }
}

export default Popular