import React, {Component} from 'react'
import {observer} from 'mobx-react'

import '../pages/AddEditPageStyles.css'
import store from '../common/Utilities'
import FormsTitle from '../components/FormsTitle'
import asForm from '../components/asForm'
import EditMakeFields from '../components/EditMakeFields'


@observer
class EditMakePage extends Component {
    constructor(props) {
        super(props)
        this.updateProperty = this.updateProperty.bind(this)
    }

    updateProperty(key, value) {
        this.props.car[key] = value
    }

    submitForm(e) {
        e.preventDefault()
        store.isEditing = false
    }

    onCancel() {
        store.isEditing = false
    }

    render() {
        const {car} = store

        return (
            <div className="edit">
                <FormsTitle title="Edit Car Make:" />
                <form className="edit-form" onSubmit={this.submitForm.bind(this)}>
                {
                car.map(car => (
                    <EditMakeFields key={car.id} car={car} store={store} />
                    ))
                }
                    <div className="buttons">
                        <button className="save" type="submit"> SAVE </button>
                        <button className="cancel" onClick={this.onCancel.bind(this)}> CANCEL </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default asForm(EditMakePage, 'car')