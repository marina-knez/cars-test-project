import React, {Component} from 'react'
import {observer} from 'mobx-react'

import store from '../common/Utilities'

@observer
class ModelCarListItem extends Component {
    openEditView(index) {
        const {car} = this.props
        if(car.index === index) {
            store.selectedModelData(this.props.car.model, this.props.car.modelId, this.props.car.abbrv)
        }
        store.isEditing = true
        store.editModel = true
    }

    deleteItem() {
        const {car} = this.props
        
        store.deleteCar(car.id)
    }

    render () {

        const {car} = this.props

        return (
            <tr key={car.id} className="table-row" >
                <td id="first"> {car.id} </td>
                <td id="fourth"> {car.model} </td>
                <td id="fourth"> {car.modelId} </td>
                <td id="fifth"> {car.abbrv} </td>
                <td id="sixth">
                    <i className="fas fa-edit" onClick={this.openEditView.bind(this, car.index)} />
                    <i className="fas fa-trash-alt" onClick={this.deleteItem.bind(this, (car.id))} />
                </td>
            </tr>
        )
    }
}

export default ModelCarListItem