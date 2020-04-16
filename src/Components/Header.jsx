import React, {Component} from 'react'
import {observer} from 'mobx-react'

@observer
class Header extends Component {
    sortHandler() {
        this.props.store.toggleSorted()
    }

    render() {
        
        return (
            <thead>
                <tr className="row">
                    <td id="first" onClick={this.sortHandler.bind(this)}> ID <i className="fas fa-sort" /></td>
                    <td id="second">Make</td>
                    <td id="third" onClick={this.sortHandler.bind(this)}> Model <i className="fas fa-sort"/></td>
                    <td id="fourth" onClick={this.sortHandler.bind(this)}> Model Id <i className="fas fa-sort"/></td>
                    <td id="fifth">Abbrv</td>
                    <td id="sixth">Edit</td>
                </tr>
            </thead>
        )
    }
}

export default Header
