import React, {Component} from 'react'
import {observer} from 'mobx-react'

import TableHeader from './TableHeader'
import store from '../common/Utilities'

@observer
class ModelHeader extends Component {
    render () {
        return (
            <thead>
                <TableHeader
                    id1="first" data1="ID" 
                    id2="second" data2="Model"
                    id3="fourth" data3="Model ID"
                    id4="fifth" data4="Abbrv" 
                    sortHandler={this.sortHandler}
                    store={store}
                >
                    <th id="sixth"> Edit / Del </th>
                </TableHeader>
            </thead>
        )
    }
}

export default ModelHeader