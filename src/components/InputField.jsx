import React, {Component} from 'react'
import {observer} from 'mobx-react'

@observer
class InputField extends Component {
  constructor (props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    this.props.onChange(e.target.name, e.target.value)
  }

  render () {

    const input = this.props

    return (
        <input
            id={input.id}
            name={input.name}
            onChange={this.onChange}
            value={input.value}
        />
    )
  }
}

export default InputField