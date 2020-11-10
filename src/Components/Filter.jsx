import React, {Component} from 'react'
import {observer} from 'mobx-react'

import store from '../common/Utilities'

@observer
class Filter extends Component {
    filter(e) {
        store.filter = e.target.value.toLowerCase()
    }
    
    render() {
        const {filter} = store

        return (
            <div className="input-field">
                <input 
                    className="filter"
                    value={filter}
                    placeholder="Search..." 
                    onChange={this.filter.bind(this)}
                />
            </div>
        )
    }
}

export default Filter