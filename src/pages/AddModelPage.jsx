import React, {Component} from 'react'
import {observer} from 'mobx-react'

import '../pages/AddEditPageStyles.css'
import FormsTitle from '../components/FormsTitle'
import FormsSubtitle from '../components/FormsSubtitle'
import store from '../common/Utilities'

@observer
class AddModelPage extends Component {
    addCarModel(newCarModel) {
        store.add(newCarModel)
        store.addNew = false
    }

    handleSubmit(e) {
        const newCarModel = {
            model: this.refs.model.value,
            modelId: this.refs.modelId.value,
            abbrv: this.refs.abbrv.value
        }
        this.addCarModel(newCarModel)
        e.preventDefault()
    }

    onCancel() {
        store.addNew = false
    }
    
    render() {

        return (
            <div className="edit">
                <FormsTitle title="Add Car Model:" />
                <form className="edit-form" onSubmit={this.handleSubmit.bind(this)}>
                    <FormsSubtitle name="Model:" />
                    <input name="model" ref="model" />
                    <FormsSubtitle name="Model ID:" />
                    <input name="modelId" ref="modelId" />
                    <FormsSubtitle name="Abbrv:" />
                    <input name="abbrv" ref="abbrv" />
                    <div className="buttons">
                    <button className="save" type="submit"> SAVE </button>
                        <button className="cancel" onClick={this.onCancel.bind(this)}> CANCEL </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddModelPage