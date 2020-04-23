import React, {Component} from 'react'
import {observer} from 'mobx-react'

@observer
class Pagination extends Component {

    handleClick(e) {
        this.props.store.currentPage = Number(e.target.id)
    }


    render () {

        const {sortedData, carsPerPage} = this.props.store

        const pageNumbers = [];
            for (let i = 1; i <= Math.ceil(sortedData.length / carsPerPage); i++) {
                pageNumbers.push(i);
            }

        const renderPageNumbers = pageNumbers.map(number => (
            <li 
                key={number} 
                id={number} 
                className="number" 
                onClick={this.handleClick.bind(this)}>
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
