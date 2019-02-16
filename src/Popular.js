import React, {Component} from "react"
import PropTypes from 'prop-types'
import Methods from './util/api'

function SelectedLang(props) {

    const tabs = ['All','Java','Javascript','Ruby','Python']

    return(
      <div>
         <img id="logo" src="https://i2.wp.com/www.globalemancipation.ngo/wp-content/uploads/2017/09/github-logo.png?ssl=1"/>
         <ul className="languages">
            { tabs.map((selected) => {
                  return (
                  <li 
                     //turns selected item red
                     style = {selected === props.currentState ? {color: '#778899'}: null}
                     //invokes updateTab function to update state
                     onClick={props.onSelect.bind(null, selected)} 
                     key={selected}>
                     {selected}
                  </li>
                  )
                  })}
         </ul>
      </div>
   )
}

function RepoGrid(props) {
   return(
      <ul className="repo-grid">
        {props.repos.map((repo, index) =>
            {
               return(

               <li key={repo.name} className="container slide-top">
                  <div className="header-bar">
                     <div className="rank-number">#{index + 1}</div>
                     <a className="repo-name inactive" href={repo.html_url}>{repo.name}</a>
                  </div>
               
                  <ul className="space-list-items">
                     <li>
                        <img className="avatar" src={repo.owner.avatar_url} alt={"Avatar for:" + repo.name}/>
                        <p><strong>Owner: </strong>{repo.owner.login}</p>
                        <p><strong>Stars: </strong> {repo.stargazers_count}</p>
                     </li>
                  </ul>
               </li>
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
                {!this.state.repos ? <p className="languages centered">Loading...</p> : <RepoGrid repos={this.state.repos}/>}
                

            </React.Fragment>
        )
    }
}

export default Popular