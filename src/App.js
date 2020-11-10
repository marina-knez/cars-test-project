import React, {Component} from 'react';
import {observer} from 'mobx-react'

import './layouts/MainLayoutStyles.css'
import store from './common/Utilities'
import MainLayout from './layouts/MainLayout'
import MakeModelPageLayout from './layouts/MakeModelPageLayout'
import AddPageLayout from './layouts/AddPageLayout'
import EditPageLayout from './layouts/EditPageLayout'

@observer
class App extends Component {
  render() {
    let page = null
    if (store.addNew) {
      page = (
        <div>
          <AddPageLayout store={store} />
        </div>
      )
    } else if (store.isEditing) {
      page = (
        <div>
          <EditPageLayout store={store} car={store.car} />
        </div>
      )
    } else {
      page = (
        <div>
          <MakeModelPageLayout store={store} car={store.car} />
        </div>
      )
    }

    return (
        <div>
          <MainLayout 
              store={store}
              mainCenter={page} 
              footer="Copyright © 2020 FastLaneCarSales. All Rights Reserved"

              layoutClass="layout"
              headerClass="header"
              mainClass="main" 
              mainLeftClass="main-left"
              mainCenterClass="main-center"
              mainRightClass="main-right"
              footerClass="footer"
          />
        </div>
    )
  }
}

export default App