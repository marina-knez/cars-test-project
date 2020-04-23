import React, {Component} from 'react';
import {observer} from 'mobx-react'
import ListPage from './Pages/ListPage'
import EditPage from './Pages/EditPage'
import store from './Stores/carStore'

@observer
class App extends Component {
  render() {
    return (
        this.props.store.isEditing ? (
          <EditPage store={store} />
        ) : (
          <ListPage store={store} />
        )
    )
  }
}

export default App;
