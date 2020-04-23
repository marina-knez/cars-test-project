import {observable, computed, action} from 'mobx'
import carData from '../Stores/carStore'

class carStore {
    @observable carData = carData

    @observable sort = false

    @observable filter = ""

    @observable currentPage = 1
    @observable carsPerPage = 15

    @observable isEditing = false


    // FILTERING
    @computed get filteredData() {
        var data = this.carData.filter(item => {
            return (
                item.model.toLowerCase().indexOf(this.filter) !== -1 ||
                item.modelId.toLowerCase().indexOf(this.filter) !== -1
            )
        })
        return data
    }


    // SORTING
    @computed get sortedData() {
        var sorted = this.filteredData
        if (this.sort) {
            sorted = this.filteredData.slice().sort((a,b) => {
                if (a.id < b.id) {
                    return 1;
                } else if (a.id > b.id) {
                    return -1;
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

    
    // EDIT

    @action changeMake(newMake) {
        this.currentCars.make = newMake
    }

    @action changeModel(newModel) {
        this.currentCars.model = newModel
    }

    @action changeModelId(newModelId) {
        this.currentCars.modelId = newModelId
    }

    @action changeAbbrv(newAbbrv) {
        this.currentCars.abbrv = newAbbrv
    }

    @action selectedCarData(make, model, modelId, abbrv) {
        this.currentCars.make = make
        this.currentCars.model = model
        this.currentCars.modelId = modelId
        this.currentCars.abbrv = abbrv
    }

    @action onInputChange(key, value) {
        this.currentCars[key] = value
    }

}

var store = new carStore()

export default store