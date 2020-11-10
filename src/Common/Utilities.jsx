import React, {Component} from 'react'
import {observable, computed, action} from 'mobx'
import makeData from '../stores/makeData'
import bmwData from '../stores/bmwData'
import mercedesData from '../stores/mercedesData'
import audiData from '../stores/audiData'

class carStore extends Component {
    @observable car = observable(makeData)
    @observable bmw = observable(bmwData)
    @observable audi = observable(audiData)
    @observable mercedes = observable(mercedesData)
    @observable newModelData = observable([])

    @observable sort = false
    
    @observable filter = ""

    @observable currentPage = 1
    @observable carsPerPage = 15
    @observable activeObject = null

    @observable isEditing = false
    @observable addNew = false

    @observable model = false

    @observable addModel = false
    @observable editModel = false

    @observable delete = false



    // GETTING MODELS

    @action bmwList() {
        this.car = this.bmw
    }

    @action audiList() {
        this.car = this.audi
    }

    @action mercedesList() {
        this.car = this.mercedes
    }

    @action newModelList() {
        this.car = this.newModelData
    }



    // DATA FOR EDITING
   
    @action selectedMakeData(make, abbrv) {
        this.car.make = make
        this.car.abbrv = abbrv
    }

    @action selectedModelData(model, modelId, abbrv) {
        this.car.model = model
        this.car.modelId = modelId
        this.car.abbrv = abbrv
    }

    // DELETE

    @action deleteCar(id) {
        this.car = this.car.filter(car => car.id != id)
    }


    //ADD

    @action add(item) {
        item.id = this.car.lenght === 0
        ? 1
        : Math.max(...this.car.map(i => i.id)) + 1
        this.car.push(item)
    }

    


    // FILTERING
    @computed get filteredData() {
        var data = this.car.filter(item => {
            if (item.make) {
                return item.make.toLowerCase().indexOf(this.filter) !== -1
            } else {
                return (
                    item.model.toLowerCase().indexOf(this.filter) !== -1 ||
                    item.modelId.toLowerCase().indexOf(this.filter) !== -1
                )
            }
        })
        return data
    }

    // SORTING
    @computed get sortedData() {
        var sorted = this.filteredData
        if (this.sort) {
            sorted = this.filteredData.slice().sort((a, b) => {
                if (a.id < b.id) {
                    return 1
                } else if (a.id > b.id) {
                    return -1
                }
                return 0
            })
        }
        return sorted
    }

    @action toggleSorted() {
        this.sort = !this.sort
    }

    // PAGINATION
    @computed get indexOfLastCar() {
        return this.currentPage * this.carsPerPage
    }

    @computed get indexOfFirstCar() {
        return this.indexOfLastCar - this.carsPerPage
    }

    @computed get currentCars() {
        return this.sortedData.slice(this.indexOfFirstCar, this.indexOfLastCar)
    }
    
}

var store = new carStore()

export default store