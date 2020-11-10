import React, {Component} from 'react'
import {observer} from 'mobx-react'
import InputField from './InputField'
import asForm from './asForm'
import FormsSubtitle from '../components/FormsSubtitle'

@observer
class EditMakeFields extends Component {
  render () {

    const {car, updateProperty} = this.props

    return (
      <div>
        <FormsSubtitle name="Make:" /> 
        <InputField id={`car-make-${car.id}`} name="make" value={car.make} onChange={updateProperty} />
        <FormsSubtitle name="Abbrv:" />
        <InputField id={`car-abbrv-${car.id}`} name="abbrv" value={car.abbrv} onChange={updateProperty} />
      </div>
    )
  }
}

export default asForm(EditMakeFields, 'car')