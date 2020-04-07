import React, {Component} from 'react'
import {observer} from 'mobx-react'
import '../Layouts/Styles.css'
import Filter from '../Components/Filter'
import Header from '../Components/Header'
import CarList from '../Common/CarList'
import store from '../Stores/carStore'

@observer
class CarPageLayout extends Component {
    render() {
        return (
            <div>
                <Filter store={store} filter={store.filter} />
                <table className="table">
                    <Header store={store} name={store.sortedName} />
                    <CarList store={store} filter={store.filter} />
                </table>
            </div>
        )
    }
}

export default CarPageLayout
