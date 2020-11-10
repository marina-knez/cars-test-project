import React, {Component} from 'react'
import {observer} from 'mobx-react'

import ModelCarListItem from './ModelCarListItem'
import store from '../common/Utilities'

@observer
class VehicleModelList extends Component {
    render () {

        const {currentCars} = store

        const data = currentCars.map(car => (
            <ModelCarListItem key={car.id} car={car} store={store} openEditView={this.openEditView} deleteItem={this.deleteItem}/>
        ))

        return (
            <tbody>
                {data}
            </tbody>
        )
    }
}

export default VehicleModelList