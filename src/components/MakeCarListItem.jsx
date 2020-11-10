import React, {Component} from 'react'
import {observer} from 'mobx-react'

import store from '../common/Utilities'

@observer
class MakeCarListItem extends Component {
    openModelList(id) {
        if(id === 1) { 
            store.bmwList()
        } else if (id === 2) {
            store.mercedesList()
        } else if (id === 3) {
            store.audiList()
        } else {
            store.newModelList()
        }
        store.model = true
    }

    openEditView(index) {
        const {car} = this.props
        if(car.index === index) {
            store.selectedMakeData(this.props.car.make, this.props.car.abbrv)
        }
        store.isEditing = true
    }

    deleteItem() {
        const {car} = this.props

        store.deleteCar(car.id)     
    }

    render () {

        const {car} = this.props
        
        return (
            <tr key={car.id} className="table-row" >
                <td id="first" onClick={this.openModelList.bind(this, (car.id))} > {car.id} </td>
                <td id="second" onClick={this.openModelList.bind(this, (car.id))} > {car.make} </td>
                <td id="third" onClick={this.openModelList.bind(this, (car.id))} > {car.abbrv} </td>
                <td id="sixth">
                    <i className="fas fa-edit" onClick={this.openEditView.bind(this, car.index)} />
                    <i className="fas fa-trash-alt" onClick={this.deleteItem.bind(this, (car.id))}/>
                </td>
            </tr>
        )
    }
}

export default MakeCarListItem