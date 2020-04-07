import React, {Component} from 'react'
import {observer} from 'mobx-react'

@observer
class CarList extends Component {
    
    sortedName() {
        this.props.store.carData.name = this.carData.sortedName
    }
    
    render() {
        const {carData, filteredList, sortedName} = this.props.store
        const carsTable = carData.map(car => (
            <tr key={car.id} className="table-row">
                <td id="first">{car.id}</td>
                <td id="second">{car.make}</td>
                <td id="third">{car.model}</td>
                <td id="fourth">{car.modelId}</td>
                <td id="fifth">{car.abbrv}</td>
                <td id="sixth"><i className="fas fa-edit"/></td>
            </tr>
        ))
        return(
            <tbody>
                {carsTable}
            </tbody>
        )
    }
}

export default CarList