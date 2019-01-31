import React, {Component} from "react"
import PropTypes from 'prop-types'

function SelectedLang(props) {

    const langauges = ['All','Java','Javascript','Ruby','Python']

    return(
        <ul className="languages">
            { langauges.map((lang) => {
                return (
                <li 
                    style = {lang === props.languageState ? {color: '#d0021b'}: null}
                    onClick={props.onSelect.bind(null, lang)} 
                    key={lang}>
                    {lang}
                </li>
                )
                })}
        </ul>
    )
}

SelectedLang.propTypes = {
    languageState: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
}



class Popular extends Component {
        
    //sets default state for this component when loaded should be 'All'
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 'All'
        }

        this.updateTab = this.updateTab.bind(this)
    }

   updateTab(lang) {
    this.setState(() => { 
        return { 
            selectedTab: lang
        }
    })
   }
    render() {
        
        return (
            <SelectedLang 
                languageState = {this.state.selectedTab}
                onSelect = {this.updateTab}
            />
        )
    }
}

export default Popular