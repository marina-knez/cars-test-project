import React, {Component} from 'react'
import {observer} from 'mobx-react'
import {observable} from 'mobx'

import store from '../common/Utilities'

import Filter from '../components/Filter'
import VehicleModelList from '../components/VehicleModelList'
import Pagination from '../components/Pagination'
import ModelHeader from '../components/ModelHeader'
import makeData from '../stores/makeData'

@observer
class VehicleModelPage extends Component {
    addModel() {
        store.addModel = true
        store.addNew = true
    }

    goBack() {
        store.car = observable(makeData)
        store.model = false
        store.editModel = false
        store.addModel = false
    }

    render() {
        return (
            <div>
                <button className="cancel" style={{marginBottom: "-50px"}} onClick={this.goBack.bind(this)}> BACK </button>
                <br/>
                <i className="fas fa-plus-circle" style={{marginTop: "50px"}} onClick={this.addModel.bind(this)} />
                <Filter store={store} filter={this.filter} />
                <table className="table">
                    <ModelHeader store={store} sortHandler={this.sortHandler} />
                    <VehicleModelList store={store} />
                </table>
                <Pagination store={store} handleClick={this.handleClick} />
            </div>
        )
    }
}

export default VehicleModelPage 