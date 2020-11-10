const bmwData = [
    {
        id: 1,
        model: "series 1",
        modelId: "118i",
        abbrv: "BMW"
    },
    {
        id: 2,
        model: "series 1",
        modelId: "M135i xDrive",
        abbrv: "BMW"
    },
    {
        id: 3,
        model: "series 1",
        modelId: "116d",
        abbrv: "BMW"
    },
    {
        id: 4,
        model: "series 1",
        modelId: "118d",
        abbrv: "BMW"
    },
    {
        id: 5,
        model: "series 1",
        modelId: "120d xDrive",
        abbrv: "BMW"
    },
    {
        id: 6,
        model: "series 2",
        modelId: "218i",
        abbrv: "BMW"
    },
    {
        id: 7,
        model: "series 2",
        modelId: "M235i xDrive",
        abbrv: "BMW"
    },
    {
        id: 8,
        model: "series 2",
        modelId: "216d",
        abbrv: "BMW"
    },
    {
        id: 9,
        model: "series 2",
        modelId: "220d",
        abbrv: "BMW"
    },
    {
        id: 10,
        model: "series 3 - limousine",
        modelId: "318i",
        abbrv: "BMW"
    },
    {
        id: 11,
        model: "series 3 - limousine",
        modelId: "320i",
        abbrv: "BMW"
    },
    {
        id: 12,
        model: "series 3 - limousine",
        modelId: "320i xDrive",
        abbrv: "BMW"
    },
    {
        id: 13,
        model: "series 3 - limousine",
        modelId: "330i",
        abbrv: "BMW"
    },
    {
        id: 14,
        model: "series 3 - limousine",
        modelId: "330i xDrive",
        abbrv: "BMW"
    },
    {
        id: 15,
        model: "series 3 - limousine",
        modelId: "330e iPerformance",
        abbrv: "BMW"
    },
    {
        id: 16,
        model: "series 3 - limousine",
        modelId: "M340i xDrive",
        abbrv: "BMW"
    },
    {
        id: 17,
        model: "series 3 - limousine",
        modelId: "318d",
        abbrv: "BMW"
    },
    {
        id: 18,
        model: "series 3 - limousine",
        modelId: "318d Limited Edition",
        abbrv: "BMW"
    },
    {
        id: 19,
        model: "series 3 - limousine",
        modelId: "320d",
        abbrv: "BMW"
    },
    {
        id: 20,
        model: "series 3 - limousine",
        modelId: "320d Limited Edition",
        abbrv: "BMW"
    },
    {
        id: 21,
        model: "series 3 - limousine",
        modelId: "320d xDrive",
        abbrv: "BMW"
    },
    {
        id: 22,
        model: "series 3 - limousine",
        modelId: "320d xDrive Limited Edition",
        abbrv: "BMW"
    },
    {
        id: 23,
        model: "series 3 - limousine",
        modelId: "330d",
        abbrv: "BMW"
    },
    {
        id: 24,
        model: "series 3 - limousine",
        modelId: "330d xDrive",
        abbrv: "BMW"
    },
    {
        id: 25,
        model: "series 4 - coupe",
        modelId: "418i",
        abbrv: "BMW"
    },
    {
        id: 26,
        model: "series 4 - coupe",
        modelId: "420i",
        abbrv: "BMW"
    },
    {
        id: 27,
        model: "series 4 - coupe",
        modelId: "420i xDrive",
        abbrv: "BMW"
    },
    {
        id: 28,
        model: "series 4 - coupe",
        modelId: "430i",
        abbrv: "BMW"
    },
    {
        id: 29,
        model: "series 4 - coupe",
        modelId: "430i xDrive",
        abbrv: "BMW"
    },
    {
        id: 30,
        model: "series 4 - coupe",
        modelId: "440i",
        abbrv: "BMW"
    },
    {
        id: 31,
        model: "series 4 - coupe",
        modelId: "440i xDrive",
        abbrv: "BMW"
    },
    {
        id: 32,
        model: "series 4 - coupe",
        modelId: "418d",
        abbrv: "BMW"
    },
    {
        id: 33,
        model: "series 4 - coupe",
        modelId: "420d",
        abbrv: "BMW"
    },
    {
        id: 34,
        model: "series 4 - coupe",
        modelId: "420d xDrive",
        abbrv: "BMW"
    },
    {
        id: 35,
        model: "series 4 - coupe",
        modelId: "425d",
        abbrv: "BMW"
    },
    {
        id: 36,
        model: "series 4 - coupe",
        modelId: "430d",
        abbrv: "BMW"
    },
    {
        id: 37,
        model: "series 4 - coupe",
        modelId: "430d xDrive",
        abbrv: "BMW"
    },
    {
        id: 38,
        model: "series 4 - coupe",
        modelId: "435d xDrive",
        abbrv: "BMW"
    },
    {
        id: 39,
        model: "series 4 - convertible",
        modelId: "420i",
        abbrv: "BMW"
    },
    {
        id: 40,
        model: "series 4 - convertible",
        modelId: "430i",
        abbrv: "BMW"
    },
    {
        id: 41,
        model: "series 4 - convertible",
        modelId: "430i xDrive",
        abbrv: "BMW"
    },
    {
        id: 42,
        model: "series 4 - convertible",
        modelId: "440i",
        abbrv: "BMW"
    },
    {
        id: 43,
        model: "series 4 - convertible",
        modelId: "440i xDrive",
        abbrv: "BMW"
    },
    {
        id: 44,
        model: "series 4 - convertible",
        modelId: "420d",
        abbrv: "BMW"
    },
    {
        id: 45,
        model: "series 4 - convertible",
        modelId: "425d",
        abbrv: "BMW"
    },
    {
        id: 46,
        model: "series 4 - convertible",
        modelId: "430d",
        abbrv: "BMW"
    },
    {
        id: 47,
        model: "series 4 - convertible",
        modelId: "435d xDrive",
        abbrv: "BMW"
    },
    {
        id: 48,
        model: "series 4 - grand coupe",
        modelId: "418i",
        abbrv: "BMW"
    },
    {
        id: 49,
        model: "series 4 - grand coupe",
        modelId: "420i",
        abbrv: "BMW"
    },
    {
        id: 50,
        model: "series 4 - grand coupe",
        modelId: "420i xDrive",
        abbrv: "BMW"
    },
    {
        id: 51,
        model: "series 4 - grand coupe",
        modelId: "430i",
        abbrv: "BMW"
    },
    {
        id: 52,
        model: "series 4 - grand coupe",
        modelId: "430i xDrive",
        abbrv: "BMW"
    },
    {
        id: 53,
        model: "series 4 - grand coupe",
        modelId: "440i",
        abbrv: "BMW"
    },
    {
        id: 54,
        model: "series 4 - grand coupe",
        modelId: "440i xDrive",
        abbrv: "BMW"
    },
    {
        id: 55,
        model: "series 4 - grand coupe",
        modelId: "418d",
        abbrv: "BMW"
    },
    {
        id: 56,
        model: "series 4 - grand coupe",
        modelId: "420d",
        abbrv: "BMW"
    },
    {
        id: 57,
        model: "series 4 - grand coupe",
        modelId: "420d xDrive",
        abbrv: "BMW"
    },
    {
        id: 58,
        model: "series 4 - grand coupe",
        modelId: "425d",
        abbrv: "BMW"
    },
    {
        id: 59,
        model: "series 4 - grand coupe",
        modelId: "430d",
        abbrv: "BMW"
    },
    {
        id: 60,
        model: "series 4 - grand coupe",
        modelId: "430d xDrive",
        abbrv: "BMW"
    },
    {
        id: 61,
        model: "series 4 - grand coupe",
        modelId: "435d xDrive",
        abbrv: "BMW"
    },
    {
        id: 62,
        model: "series 5 - limousine",
        modelId: "520i",
        abbrv: "BMW"
    },
    {
        id: 63,
        model: "series 5 - limousine",
        modelId: "530i",
        abbrv: "BMW"
    },
    {
        id: 64,
        model: "series 5 - limousine",
        modelId: "530i xDrive",
        abbrv: "BMW"
    },
    {
        id: 65,
        model: "series 5 - limousine",
        modelId: "530e iPerformance",
        abbrv: "BMW"
    },
    {
        id: 66,
        model: "series 5 - limousine",
        modelId: "540i",
        abbrv: "BMW"
    },
    {
        id: 67,
        model: "series 5 - limousine",
        modelId: "540i xDrive",
        abbrv: "BMW"
    },
    {
        id: 68,
        model: "series 5 - limousine",
        modelId: "M550i xDrive",
        abbrv: "BMW"
    },
    {
        id: 69,
        model: "series 5 - limousine",
        modelId: "520d",
        abbrv: "BMW"
    },
    {
        id: 70,
        model: "series 5 - limousine",
        modelId: "520d xDrive",
        abbrv: "BMW"
    },
    {
        id: 71,
        model: "series 5 - limousine",
        modelId: "530d",
        abbrv: "BMW"
    },
    {
        id: 72,
        model: "series 5 - limousine",
        modelId: "530d xDrive",
        abbrv: "BMW"
    },
    {
        id: 73,
        model: "series 5 - limousine",
        modelId: "540d xDrive",
        abbrv: "BMW"
    },
    {
        id: 74,
        model: "series 5 - limousine",
        modelId: "M550d xDrive",
        abbrv: "BMW"
    }
]

export default bmwData