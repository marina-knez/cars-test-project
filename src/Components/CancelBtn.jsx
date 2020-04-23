import React, {Component} from 'react'
import {observer} from 'mobx-react'

@observer
class CancelBtn extends Component {

    cancel() {
        this.props.store.isEditing = false
    }

    render() {
        return (
            <button className="cancel" onClick={this.cancel.bind(this)}>CANCEL</button>
        )
    }
}

export default CancelBtn