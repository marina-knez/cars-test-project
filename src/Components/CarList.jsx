import React, {Component} from 'react'
import {observer} from 'mobx-react'
import store from '../Common/Utilities'
import CarListItem from './CarListItem'

@observer
class CarList extends Component {
        
    render() {
        const {currentCars} = this.props.store

        const data = currentCars.map(car => (
            <CarListItem key={car.id} car={car} store={store} handleClick={this.handleClick}/>
        ))

        return(
            <tbody>
                {data}
            </tbody>
        )
    }
}

export default CarList