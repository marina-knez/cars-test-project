import React, {Component} from 'react'
import {observer} from 'mobx-react'

@observer
class Filter extends Component {
    filter(e) {
        this.props.store.filter = e.target.value.toLowerCase()
    }

    render() {
        const {filter} = this.props.store

        return(
        <div className="container">
            <select className="list">
                <option disabled hidden selected>Find a Car by:</option>
                <option value="Name">Model</option>
                <option value="Model Id">Model Id</option>
            </select>
            <div className="input-field">
                <input className="filter" value={filter} placeholder="Find a Car" onChange={this.filter.bind(this)}/>
            </div>
        </div>
        
        )
    }
}

export default Filter