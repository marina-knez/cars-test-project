import React, {Component} from 'react'
import {observer} from 'mobx-react'

import store from '../common/Utilities'
import TableHeader from './TableHeader'

@observer
class MakeHeader extends Component {
    render () {
        return (
            <thead>
                <TableHeader 
                    id1="first" data1="ID" 
                    id2="second" data2="Make"
                    id3="third" data3="Abbrv"
                    id4="sixth" data4="Edit / Del"
                    sortHandler={this.sortHandler}
                    store={store}
                />
            </thead>
        )
    }
}

export default MakeHeader