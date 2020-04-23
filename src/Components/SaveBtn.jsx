import React, {Component} from 'react'
import {observer} from 'mobx-react'

@observer
class SaveBtn extends Component {
    render() {
        return (
            <button className="save">SAVE</button>
        )
    }
}

export default SaveBtn