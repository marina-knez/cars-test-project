import React, {Component} from 'react'
import {observer} from 'mobx-react'
import store from '../common/Utilities'

@observer
class Pagination extends Component {
    handleClick(e) {
        store.currentPage = Number(e.target.id)
        store.activeObject = store.currentPage
    }


    render () {

        const {sortedData, carsPerPage, activeObject} = store

        const styleActive = {
            backgroundColor: "orange",
            border: "2px solid grey"
        }

        const pageNumbers = [];
            for (let i = 1; i <= Math.ceil(sortedData.length / carsPerPage); i++) {
                pageNumbers.push(i);
            }

        const renderPageNumbers = pageNumbers.map(number => (
            <li 
                key={number} 
                id={number} 
                style={activeObject === number ? styleActive : null}
                className="number"
                onClick={this.handleClick.bind(this)}
            >
                    {number}
            </li>
        ))

        

        return (
            <ul id="page-numbers">
                {renderPageNumbers}
            </ul>
        )
    }
}

export default Pagination
