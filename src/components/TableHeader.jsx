import React, {Component} from 'react'
import {observer} from 'mobx-react'

import store from '../common/Utilities'

@observer
class TableHeader extends Component {
    sortHandler() {
        store.toggleSorted()
    }

    render () {
        return (
            <tr className="row">
                <th id={this.props.id1}>
                    {this.props.data1}
                    <i className="fas fa-sort" onClick={this.sortHandler.bind(this)} />
                </th>
                <th id={this.props.id2}>
                    {this.props.data2}
                    <i className="fas fa-sort" onClick={this.sortHandler.bind(this)} />
                </th>
                <th id={this.props.id3}>
                    {this.props.data3}
                    <i className="fas fa-sort"  />
                </th>
                <th id={this.props.id4}> {this.props.data4} </th>
                {this.props.children}
            </tr>
        )
    }
}

export default TableHeader