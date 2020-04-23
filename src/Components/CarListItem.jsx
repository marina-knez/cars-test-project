import React, {Component} from 'react'
import {observer} from 'mobx-react'

@observer
class CarListItem extends Component {

    handleClick(index) {
        const car = this.props
        if(car.index === index) {
            this.props.store.selectedCarData(this.props.car.make, this.props.car.model, this.props.car.modelId, this.props.car.abbrv)
        }
        this.props.store.isEditing = true
    }

    render() {
        const {car} = this.props

        return (
            <tr key={car.id} className="table-row">
                <td id="first">{car.id}</td>
                <td id="second">{car.make}</td>
                <td id="third">{car.model}</td>
                <td id="fourth">{car.modelId}</td>
                <td id="fifth">{car.abbrv}</td>
                <td id="sixth"><i className="fas fa-edit" onClick={this.handleClick.bind(this, car.index)}/></td>
            </tr>
        )
    }
}

export default CarListItem