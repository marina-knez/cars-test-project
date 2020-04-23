import React, {Component} from 'react'
import {observer} from 'mobx-react'
import store from '../Common/Utilities'
import CarPageLayout from '../Layouts/CarPageLayout'

@observer
class ListPage extends Component {
    render() {
        return (
            <div>
                <CarPageLayout store={store} />
            </div>
        )
    }
}

export default ListPage