import React, {Component} from 'react'
import {observer} from 'mobx-react'
import EditPageLayout from '../Layouts/EditPageLayout'
import store from '../Common/Utilities'

@observer
class EditPage extends Component {
    render() {
        return (
            <EditPageLayout store={store}/>
        )
    }
}

export default EditPage