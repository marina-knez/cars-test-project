import React, {Component} from 'react'
import {observer} from 'mobx-react'

import VehicleModelPage from '../pages/VehicleModelPage'
import VehicleMakePage from '../pages/VehicleMakePage'
import store from '../common/Utilities'
import MainLayout from '../layouts/MainLayout'


@observer
class MakeModelPageLayout extends Component {
    render() {
        const {car} = this.props

        let page = null
        if (store.model) {
            page = (
                <div>
                    <VehicleModelPage store={store} car={car} addModel={this.addModel} goBack={this.goBack} />
                </div>
            )
        } else {
            page = (
                <div>
                    <VehicleMakePage store={store} car={car} addMake={this.addMake} />
                </div>
            )
        }

        return (
            <div>
                <MainLayout store={store} mainCenter={page} />
            </div>
        )
    }
}

export default MakeModelPageLayout