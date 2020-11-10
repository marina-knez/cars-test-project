import React, {Component} from 'react'
import {observer} from 'mobx-react'

import '../pages/VehicleListPageStyles.css'

import store from '../common/Utilities'

import Filter from '../components/Filter'
import MakeHeader from '../components/MakeHeader'
import VehicleMakeList from '../components/VehicleMakeList'
import Pagination from '../components/Pagination'

@observer
class VehicleMakePage extends Component {
    addMake() {
        store.addMake = true
        store.addNew = true
    }

    render() {
        const {car} = this.props

        return (
            <div>
                <i className="fas fa-plus-circle" onClick={this.addMake.bind(this)}/>
                <Filter filter={this.filter} store={store} />
                <table className="table">
                    <MakeHeader store={store} sortHandler={this.sortHandler} />
                    <VehicleMakeList store={store} car={car} />
                </table>
                <Pagination handleClick={this.handleClick} store={store} />
            </div>
        )
    }
}

export default VehicleMakePage