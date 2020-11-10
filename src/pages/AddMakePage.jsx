import React, {Component} from 'react'
import {observer} from 'mobx-react'

import '../pages/AddEditPageStyles.css'
import FormsTitle from '../components/FormsTitle'
import FormsSubtitle from '../components/FormsSubtitle'
import store from '../common/Utilities'

@observer
class AddMakePage extends Component {
    addCarMake(newCarMake) {
        store.add(newCarMake)
        store.addNew = false
    }

    handleSubmit(e) {
        const newCarMake = {
            make: this.refs.make.value,
            abbrv: this.refs.abbrv.value
        }
        this.addCarMake(newCarMake)
        e.preventDefault()
    }

    onCancel() {
        store.addNew = false
    }
    
    render() {

        return (
            <div className="edit">
                <FormsTitle title="Add Car Make:" />
                <form className="edit-form" onSubmit={this.handleSubmit.bind(this)}>
                    <FormsSubtitle name="Make:" />
                    <input name="make" ref="make" />
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

export default AddMakePage