import React, {Component} from 'react'
import {observer} from 'mobx-react'

@observer
class EditForm extends Component {
    onMakeChange(e) {
        this.props.store.changeMake(e.target.value)
    }

    /*onModelChange(e) {
        this.props.store.changeModel(e.target.value)
    }

    onModelChange(e) {
        this.props.store.changeModelId(e.target.value)
    }

    onModelChange(e) {
        this.props.store.changeAbbrv(e.target.value)
    }*/

    onInputChange(e) {
        this.props.store.onInputChange(e.target.name, e.target.value)
    }

    handleSubmit(e) {
        e.preventDefault()
    }

    render() {
        const {currentCars} = this.props.store

        return (
            <form className="edit-form" onSubmit={this.handleSubmit.bind(this)}>
                <h1>Edit Car:</h1>
                <h4>Make:</h4>
                <input name="make" value={currentCars.make} onChange={this.onMakeChange.bind(this)}/>
                <h4>Model:</h4>
                <input name="model" value={currentCars.model} onChange={this.onInputChange.bind(this)}/>
                <h4>Make:</h4>
                <input name="modelId" value={currentCars.modelId} onChange={this.onInputChange.bind(this)}/>
                <h4>Make:</h4>
                <input name="abbrv" value={currentCars.abbrv} onChange={this.onInputChange.bind(this)}/>
            </form>
        )
    }
}

export default EditForm