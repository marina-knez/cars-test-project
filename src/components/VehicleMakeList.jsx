import React, {Component} from 'react'
import {observer} from 'mobx-react'

import MakeCarListItem from './MakeCarListItem'
import store from '../common/Utilities'

@observer
class VehicleMakeList extends Component {
    render () {

        const {currentCars} = store

        const data = currentCars.map(car => (
            <MakeCarListItem key={car.id} car={car} store={store} openModelList={this.openModelList} openEditView={this.openEditView} deleteItem={this.deleteItem}/>
        ))

        return (
            <tbody>
                {data}
            </tbody>
        )
    }
}

export default VehicleMakeList