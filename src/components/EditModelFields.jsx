import React, {Component} from 'react'
import {observer} from 'mobx-react'
import InputField from './InputField'
import asForm from './asForm'
import FormsSubtitle from '../components/FormsSubtitle'

@observer
class EditModelFields extends Component {
  render () {

    const {car, updateProperty} = this.props

    return (
      <div>
        <FormsSubtitle name="Model:" /> 
        <InputField id={`car-model-${car.id}`} name="model" value={car.model} onChange={updateProperty} />
        <FormsSubtitle name="Model ID:" />
        <InputField id={`car-modelId-${car.id}`} name="modelId" value={car.modelId} onChange={updateProperty} />
        <FormsSubtitle name="Abbrv:" />
        <InputField id={`car-abbrv-${car.id}`} name="abbrv" value={car.abbrv} onChange={updateProperty} />
      </div>
    )
  }
}

export default asForm(EditModelFields, 'car')