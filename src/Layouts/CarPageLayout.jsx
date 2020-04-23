import React, {Component} from 'react'
import {observer} from 'mobx-react'
import '../Layouts/CarPageStyles.css'
import Filter from '../Components/Filter'
import Header from '../Components/Header'
import CarList from '../Components/CarList'
import Pagination from '../Components/Pagination'
import store from '../Common/Utilities'

@observer
class CarPageLayout extends Component {
    render() {
        return (
            <div>
                <Filter store={store} filter={this.filter}/>
                <table className="table">
                    <Header store={store} sortHandler={this.sortHandler}/>
                    <CarList store={store} />
                </table>
                <Pagination store={store} handleClick={this.handleClick}/>
            </div>
        )
    }
}

export default CarPageLayout
