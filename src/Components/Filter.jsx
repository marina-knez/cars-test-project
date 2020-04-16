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
            <div className="input-field">
                <input className="filter" value={filter} placeholder="Search..." onChange={this.filter.bind(this)}/>
            </div>
        )
    }
}

export default Filter