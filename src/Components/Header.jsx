import React, {Component} from 'react'
import {observer} from 'mobx-react'

@observer
class Header extends Component {

    sortedName() {
        return <td>{this.sortedName}</td>
    }
    
    render() {
        
        return (
            <thead>
                <tr className="row">
                    <td id="first">ID <i className="fas fa-sort" /></td>
                    <td id="second">Make</td>
                    <td id="third">Model <i className="fas fa-sort" onClick={() => this.props.sortedName}/></td>
                    <td id="fourth">Model Id <i className="fas fa-sort"/></td>
                    <td id="fifth">Abbrv</td>
                    <td id="sixth">Edit</td>
                </tr>
            </thead>
        )
    }
}

export default Header
