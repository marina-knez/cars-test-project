import React, {Component} from 'react'
import {observer} from 'mobx-react'

@observer
class CarList extends Component {
        
    render() {
        const {sortedData} = this.props.store

        const data = sortedData.map(car => (
            <tr key={car.id} className="table-row">
                <td id="first">{car.id}</td>
                <td id="second">{car.make}</td>
                <td className="third">{car.model}</td>
                <td id="fourth">{car.modelId}</td>
                <td id="fifth">{car.abbrv}</td>
                <td id="sixth"><i className="fas fa-edit"/></td>
            </tr>
        ))

        return(
            <tbody>
                {data}
            </tbody>
        )
    }
}

export default CarList