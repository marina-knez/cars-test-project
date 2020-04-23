import React, {Component} from 'react'
import {observer} from 'mobx-react'
import '../Layouts/EditPageStyles.css'
import store from '../Common/Utilities'
import EditForm from '../Components/EditForm'
import SaveBtn from '../Components/SaveBtn'
import CancelBtn from '../Components/CancelBtn'

@observer
class EditPageLayout extends Component {
    render() {
        return (
            <div className="edit">
                <div>
                    <EditForm 
                        store={store} 
                        onMakeChange={this.onMakeChange} 
                        handleChange={this.handleChange} 
                        handleSubmit={this.handleSubmit}
                    />
                </div>
                <div className="buttons">
                    <SaveBtn store={store}/>
                    <CancelBtn store={store} />
                </div>
            </div>
        )
    }
}

export default EditPageLayout