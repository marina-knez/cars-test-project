import {observable, computed} from 'mobx'

class carStore {

    @observable carData = [
        {
            id: 1,
            make: "Bayerische Motoren Werke AG",
            model: "serija 1",
            modelId: "118i",
            abbrv: "BMW"
        },
        {
            id: 2,
            make: "Bayerische Motoren Werke AG",
            model: "serija 1",
            modelId: "M135i xDrive",
            abbrv: "BMW"
        },
        {
            id: 3,
            make: "Bayerische Motoren Werke AG",
            model: "serija 1",
            modelId: "116d",
            abbrv: "BMW"
        },
        {
            id: 4,
            make: "Bayerische Motoren Werke AG",
            model: "serija 1",
            modelId: "118d",
            abbrv: "BMW"
        },
        {
            id: 5,
            make: "Bayerische Motoren Werke AG",
            model: "serija 1",
            modelId: "120d xDrive",
            abbrv: "BMW"
        },
        {
            id: 6,
            make: "Bayerische Motoren Werke AG",
            model: "serija 2",
            modelId: "218i",
            abbrv: "BMW"
        },
        {
            id: 7,
            make: "Bayerische Motoren Werke AG",
            model: "serija 2",
            modelId: "M235i xDrive",
            abbrv: "BMW"
        },
        {
            id: 8,
            make: "Bayerische Motoren Werke AG",
            model: "serija 2",
            modelId: "216d",
            abbrv: "BMW"
        },
        {
            id: 9,
            make: "Bayerische Motoren Werke AG",
            model: "serija 2",
            modelId: "220d",
            abbrv: "BMW"
        },
        {
            id: 10,
            make: "Bayerische Motoren Werke AG",
            model: "serija 3 - limuzina",
            modelId: "318i",
            abbrv: "BMW"
        },
        {
            id: 11,
            make: "Bayerische Motoren Werke AG",
            model: "serija 3 - limuzina",
            modelId: "320i",
            abbrv: "BMW"
        },
        {
            id: 12,
            make: "Bayerische Motoren Werke AG",
            model: "serija 3 - limuzina",
            modelId: "320i xDrive",
            abbrv: "BMW"
        },
        {
            id: 13,
            make: "Bayerische Motoren Werke AG",
            model: "serija 3 - limuzina",
            modelId: "330i",
            abbrv: "BMW"
        },
        {
            id: 14,
            make: "Bayerische Motoren Werke AG",
            model: "serija 3 - limuzina",
            modelId: "330i xDrive",
            abbrv: "BMW"
        },
        {
            id: 15,
            make: "Bayerische Motoren Werke AG",
            model: "serija 3 - limuzina",
            modelId: "330e iPerformance",
            abbrv: "BMW"
        },
        {
            id: 16,
            make: "Bayerische Motoren Werke AG",
            model: "serija 3 - limuzina",
            modelId: "M340i xDrive",
            abbrv: "BMW"
        },
        {
            id: 17,
            make: "Bayerische Motoren Werke AG",
            model: "serija 3 - limuzina",
            modelId: "318d",
            abbrv: "BMW"
        },
        {
            id: 18,
            make: "Bayerische Motoren Werke AG",
            model: "serija 3 - limuzina",
            modelId: "318d Limited Edition",
            abbrv: "BMW"
        },
        {
            id: 19,
            make: "Bayerische Motoren Werke AG",
            model: "serija 3 - limuzina",
            modelId: "320d",
            abbrv: "BMW"
        },
        {
            id: 20,
            make: "Bayerische Motoren Werke AG",
            model: "serija 3 - limuzina",
            modelId: "320d Limited Edition",
            abbrv: "BMW"
        },
        {
            id: 21,
            make: "Bayerische Motoren Werke AG",
            model: "serija 3 - limuzina",
            modelId: "320d xDrive",
            abbrv: "BMW"
        },
        {
            id: 22,
            make: "Bayerische Motoren Werke AG",
            model: "serija 3 - limuzina",
            modelId: "320d xDrive Limited Edition",
            abbrv: "BMW"
        },
        {
            id: 23,
            make: "Bayerische Motoren Werke AG",
            model: "serija 3 - limuzina",
            modelId: "330d",
            abbrv: "BMW"
        },
        {
            id: 24,
            make: "Bayerische Motoren Werke AG",
            model: "serija 3 - limuzina",
            modelId: "330d xDrive",
            abbrv: "BMW"
        },
        {
            id: 25,
            make: "Bayerische Motoren Werke AG",
            model: "serija 4 - coupe",
            modelId: "418i",
            abbrv: "BMW"
        },
        {
            id: 26,
            make: "Bayerische Motoren Werke AG",
            model: "serija 4 -coupe",
            modelId: "420i",
            abbrv: "BMW"
        },
        {
            id: 27,
            make: "Bayerische Motoren Werke AG",
            model: "serija 4 -coupe",
            modelId: "420i xDrive",
            abbrv: "BMW"
        },
        {
            id: 28,
            make: "Bayerische Motoren Werke AG",
            model: "serija 4 -coupe",
            modelId: "430i",
            abbrv: "BMW"
        },
        {
            id: 29,
            make: "Bayerische Motoren Werke AG",
            model: "serija 4 -coupe",
            modelId: "430i xDrive",
            abbrv: "BMW"
        },
        {
            id: 30,
            make: "Bayerische Motoren Werke AG",
            model: "serija 4 -coupe",
            modelId: "440i",
            abbrv: "BMW"
        },
        {
            id: 31,
            make: "Bayerische Motoren Werke AG",
            model: "serija 4 -coupe",
            modelId: "440i xDrive",
            abbrv: "BMW"
        },
        {
            id: 32,
            make: "Bayerische Motoren Werke AG",
            model: "serija 4 -coupe",
            modelId: "418d",
            abbrv: "BMW"
        },
        {
            id: 33,
            make: "Bayerische Motoren Werke AG",
            model: "serija 4 -coupe",
            modelId: "420d",
            abbrv: "BMW"
        },
        {
            id: 34,
            make: "Bayerische Motoren Werke AG",
            model: "serija 4 -coupe",
            modelId: "420d xDrive",
            abbrv: "BMW"
        },
        {
            id: 35,
            make: "Bayerische Motoren Werke AG",
            model: "serija 4 -coupe",
            modelId: "425d",
            abbrv: "BMW"
        },
        {
            id: 36,
            make: "Bayerische Motoren Werke AG",
            model: "serija 4 -coupe",
            modelId: "430d",
            abbrv: "BMW"
        },
        {
            id: 37,
            make: "Bayerische Motoren Werke AG",
            model: "serija 4 -coupe",
            modelId: "430d xDrive",
            abbrv: "BMW"
        },
        {
            id: 38,
            make: "Bayerische Motoren Werke AG",
            model: "serija 4 -coupe",
            modelId: "435d xDrive",
            abbrv: "BMW"
        },
        {
            id: 39,
            make: "Bayerische Motoren Werke AG",
            model: "serija 4 - convertible",
            modelId: "420i",
            abbrv: "BMW"
        },
        {
            id: 40,
            make: "Bayerische Motoren Werke AG",
            model: "serija 4 - convertible",
            modelId: "430i",
            abbrv: "BMW"
        },
        {
            id: 41,
            make: "Bayerische Motoren Werke AG",
            model: "serija 4 - convertible",
            modelId: "430i xDrive",
            abbrv: "BMW"
        },
        {
            id: 42,
            make: "Bayerische Motoren Werke AG",
            model: "serija 4 - convertible",
            modelId: "440i",
            abbrv: "BMW"
        },
        {
            id: 43,
            make: "Bayerische Motoren Werke AG",
            model: "serija 4 - convertible",
            modelId: "440i xDrive",
            abbrv: "BMW"
        },
        {
            id: 44,
            make: "Bayerische Motoren Werke AG",
            model: "serija 4 - convertible",
            modelId: "420d",
            abbrv: "BMW"
        },
        {
            id: 45,
            make: "Bayerische Motoren Werke AG",
            model: "serija 4 - convertible",
            modelId: "425d",
            abbrv: "BMW"
        },
        {
            id: 46,
            make: "Bayerische Motoren Werke AG",
            model: "serija 4 - convertible",
            modelId: "430d",
            abbrv: "BMW"
        },
        {
            id: 47,
            make: "Bayerische Motoren Werke AG",
            model: "serija 4 - convertible",
            modelId: "435d xDrive",
            abbrv: "BMW"
        },
        {
            id: 48,
            make: "Bayerische Motoren Werke AG",
            model: "serija 4 - grand coupe",
            modelId: "418i",
            abbrv: "BMW"
        },
        {
            id: 49,
            make: "Bayerische Motoren Werke AG",
            model: "serija 4 - grand coupe",
            modelId: "420i",
            abbrv: "BMW"
        },
        {
            id: 50,
            make: "Bayerische Motoren Werke AG",
            model: "serija 4 - grand coupe",
            modelId: "420i xDrive",
            abbrv: "BMW"
        },
        {
            id: 51,
            make: "Bayerische Motoren Werke AG",
            model: "serija 4 - grand coupe",
            modelId: "430i",
            abbrv: "BMW"
        },
        {
            id: 52,
            make: "Bayerische Motoren Werke AG",
            model: "serija 4 - grand coupe",
            modelId: "430i xDrive",
            abbrv: "BMW"
        },
        {
            id: 53,
            make: "Bayerische Motoren Werke AG",
            model: "serija 4 - grand coupe",
            modelId: "440i",
            abbrv: "BMW"
        },
        {
            id: 54,
            make: "Bayerische Motoren Werke AG",
            model: "serija 4 - grand coupe",
            modelId: "440i xDrive",
            abbrv: "BMW"
        },
        {
            id: 55,
            make: "Bayerische Motoren Werke AG",
            model: "serija 4 - grand coupe",
            modelId: "418d",
            abbrv: "BMW"
        },
        {
            id: 56,
            make: "Bayerische Motoren Werke AG",
            model: "serija 4 - grand coupe",
            modelId: "420d",
            abbrv: "BMW"
        },
        {
            id: 57,
            make: "Bayerische Motoren Werke AG",
            model: "serija 4 - grand coupe",
            modelId: "420d xDrive",
            abbrv: "BMW"
        },
        {
            id: 58,
            make: "Bayerische Motoren Werke AG",
            model: "serija 4 - grand coupe",
            modelId: "425d",
            abbrv: "BMW"
        },
        {
            id: 59,
            make: "Bayerische Motoren Werke AG",
            model: "serija 4 - grand coupe",
            modelId: "430d",
            abbrv: "BMW"
        },
        {
            id: 60,
            make: "Bayerische Motoren Werke AG",
            model: "serija 4 - grand coupe",
            modelId: "430d xDrive",
            abbrv: "BMW"
        },
        {
            id: 61,
            make: "Bayerische Motoren Werke AG",
            model: "serija 4 - grand coupe",
            modelId: "435d xDrive",
            abbrv: "BMW"
        },
        {
            id: 62,
            make: "Bayerische Motoren Werke AG",
            model: "serija 5 - limuzina",
            modelId: "520i",
            abbrv: "BMW"
        },
        {
            id: 63,
            make: "Bayerische Motoren Werke AG",
            model: "serija 5 - limuzina",
            modelId: "530i",
            abbrv: "BMW"
        },
        {
            id: 64,
            make: "Bayerische Motoren Werke AG",
            model: "serija 5 - limuzina",
            modelId: "530i xDrive",
            abbrv: "BMW"
        },
        {
            id: 65,
            make: "Bayerische Motoren Werke AG",
            model: "serija 5 - limuzina",
            modelId: "530e iPerformance",
            abbrv: "BMW"
        },
        {
            id: 66,
            make: "Bayerische Motoren Werke AG",
            model: "serija 5 - limuzina",
            modelId: "540i",
            abbrv: "BMW"
        },
        {
            id: 67,
            make: "Bayerische Motoren Werke AG",
            model: "serija 5 - limuzina",
            modelId: "540i xDrive",
            abbrv: "BMW"
        },
        {
            id: 68,
            make: "Bayerische Motoren Werke AG",
            model: "serija 5 - limuzina",
            modelId: "M550i xDrive",
            abbrv: "BMW"
        },
        {
            id: 69,
            make: "Bayerische Motoren Werke AG",
            model: "serija 5 - limuzina",
            modelId: "520d",
            abbrv: "BMW"
        },
        {
            id: 70,
            make: "Bayerische Motoren Werke AG",
            model: "serija 5 - limuzina",
            modelId: "520d xDrive",
            abbrv: "BMW"
        },
        {
            id: 71,
            make: "Bayerische Motoren Werke AG",
            model: "serija 5 - limuzina",
            modelId: "530d",
            abbrv: "BMW"
        },
        {
            id: 72,
            make: "Bayerische Motoren Werke AG",
            model: "serija 5 - limuzina",
            modelId: "530d xDrive",
            abbrv: "BMW"
        },
        {
            id: 73,
            make: "Bayerische Motoren Werke AG",
            model: "serija 5 - limuzina",
            modelId: "540d xDrive",
            abbrv: "BMW"
        },
        {
            id: 74,
            make: "Bayerische Motoren Werke AG",
            model: "serija 5 - limuzina",
            modelId: "M550d xDrive",
            abbrv: "BMW"
        }
    ]

    @observable filter = ""

   /* @computed get filteredList() {
        console.log(this.carData.model)
        
    }*/

    @computed get sortedName() {
        return this.carData.sort((a,b) => a.model - b.model)
    }
}

var store = new carStore()

export default store