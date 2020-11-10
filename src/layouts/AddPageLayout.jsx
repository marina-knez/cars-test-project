import React, {Component} from 'react'
import {observer} from 'mobx-react'
import '../pages/AddEditPageStyles.css'
import store from '../common/Utilities'
import AddMakePage from '../pages/AddMakePage'
import AddModelPage from '../pages/AddModelPage'
import MainLayout from '../layouts/MainLayout'

@observer
class AddPageLayout extends Component {
    render() {
        let page = null
        if (store.addModel) {
            page = (
                <div className="edit">
                    <AddModelPage store={store} handleSubmit={this.handleSubmit} addCarModel={this.addCarModel} onCancel={this.onCancel} />
                </div>
            )
        } else {
            page = (
                <div className="edit">
                    <AddMakePage store={store} handleSubmit={this.handleSubmit} addCarMake={this.addCarMake} onCancel={this.onCancel} />
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

export default AddPageLayout