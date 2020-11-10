const audiData = [
    {
        id: 1,
        model: "A1 Sportback (Advanced)",
        modelId: "A1 SB 30TFSI",
        abbrv: "Audi"
    },
    {
        id: 2,
        model: "A1 Sportback (Advanced)",
        modelId: "A1 SB 30TFSI S tr",
        abbrv: "Audi"
    },
    {
        id: 3,
        model: "A1 Sportback (Advanced)",
        modelId: "A1 SB 25TFSI",
        abbrv: "Audi"
    },
    {
        id: 4,
        model: "A1 Sportback (Advanced)",
        modelId: "A1 SB 25TFSI S tr",
        abbrv: "Audi"
    },
    {
        id: 5,
        model: "A1 Sportback (Advanced)",
        modelId: "A1 SB 35TFSI S tr",
        abbrv: "Audi"
    },
    {
        id: 6,
        model: "A1 Sportback (S line)",
        modelId: "A1 SB 30TFSI S line",
        abbrv: "Audi"
    },
    {
        id: 7,
        model: "A1 Sportback (S line)",
        modelId: "A1 SB 30TFSI S tr S line",
        abbrv: "Audi"
    },
    {
        id: 8,
        model: "A1 Sportback (S line)",
        modelId: "A1 SB 25TFSI S line",
        abbrv: "Audi"
    },
    {
        id: 9,
        model: "A1 Sportback (S line)",
        modelId: "A1 SB 25TFSI S tr S line",
        abbrv: "Audi"
    },
    {
        id: 10,
        model: "A1 Sportback (S line)",
        modelId: "A1 SB 35TFSI S tr S line",
        abbrv: "Audi"
    },
    {
        id: 11,
        model: "A3 Limousine (Comfort)",
        modelId: "A3 Limousine 30TFSI Comfort",
        abbrv: "Audi"
    },
    {
        id: 12,
        model: "A3 Limousine (Comfort)",
        modelId: "A3 Limousine 30TDI Comfor",
        abbrv: "Audi"
    },
    {
        id: 13,
        model: "A3 Limousine (Comfort)",
        modelId: "A3 Limousine 35TFSI Comfort",
        abbrv: "Audi"
    },
    {
        id: 14,
        model: "A3 Limousine (Comfort)",
        modelId: "A3 Limousine 35TFSI S tr Comfort",
        abbrv: "Audi"
    },
    {
        id: 15,
        model: "A3 Limousine (Sport+)",
        modelId: "A3 Limousine 30TFSI Sport+",
        abbrv: "Audi"
    },
    {
        id: 16,
        model: "A3 Limousine (Sport+)",
        modelId: "A3 Limousine 30TDI Sport+",
        abbrv: "Audi"
    },
    {
        id: 17,
        model: "A3 Limousine (Sport+)",
        modelId: "A3 Limousine 35TFSI Sport+",
        abbrv: "Audi"
    },
    {
        id: 18,
        model: "A3 Limousine (Sport+)",
        modelId: "A3 Limousine 35TFSI S tr Sport+",
        abbrv: "Audi"
    },
    {
        id: 19,
        model: "A3 Limousine (Sport+)",
        modelId: "A3 Limousine 30TFSI S line",
        abbrv: "Audi"
    },
    {
        id: 20,
        model: "A3 Limousine (Sport+)",
        modelId: "A3 Limousine 35TFSI S line",
        abbrv: "Audi"
    },
    {
        id: 21,
        model: "A3 Limousine (Sport+)",
        modelId: "A3 Limousine 35TFSI S tr S line",
        abbrv: "Audi"
    },
    {
        id: 22,
        model: "A3 Limousine (Sport+)",
        modelId: "A3 Limousine 30TDI S line",
        abbrv: "Audi"
    },
    {
        id: 23,
        model: "A3 Limousine (Sport+)",
        modelId: "A3 Limousine 35TDI S tr Sport+",
        abbrv: "Audi"
    },
    {
        id: 24,
        model: "A3 Limousine (Sport+)",
        modelId: "A3 Limousine 35TDI S tr S line",
        abbrv: "Audi"
    },
    {
        id: 25,
        model: "A3 Limousine (Design+)",
        modelId: "A3 Limousine 30TFSI Design+",
        abbrv: "Audi"
    },
    {
        id: 26,
        model: "A3 Limousine (Design+)",
        modelId: "A3 Limousine 30TDI Design+",
        abbrv: "Audi"
    },
    {
        id: 27,
        model: "A3 Limousine (Design+)",
        modelId: "A3 Limousine 35TFSI Design+",
        abbrv: "Audi"
    },
    {
        id: 28,
        model: "A3 Limousine (Design+)",
        modelId: "A3 Limousine 35TFSI S tr Design+",
        abbrv: "Audi"
    },
    {
        id: 29,
        model: "A4 Limousine (Select)",
        modelId: "A4 35TFSI Select",
        abbrv: "Audi"
    },
    {
        id: 30,
        model: "A4 Limousine (Select)",
        modelId: "A4 35TFSI S tr Select",
        abbrv: "Audi"
    },
    {
        id: 31,
        model: "A4 Limousine (Select)",
        modelId: "A4 40TFSI S tr Select",
        abbrv: "Audi"
    },
    {
        id: 32,
        model: "A4 Limousine (Select)",
        modelId: "A4 30TDI S tr Select",
        abbrv: "Audi"
    },
    {
        id: 33,
        model: "A4 Limousine (Select)",
        modelId: "A4 35TDI S tr Select",
        abbrv: "Audi"
    },
    {
        id: 34,
        model: "A4 Limousine (Select)",
        modelId: "A4 40TDI S tr Select",
        abbrv: "Audi"
    },
    {
        id: 35,
        model: "A4 Limousine (Select)",
        modelId: "A4 40TDI quattro S tr Select",
        abbrv: "Audi"
    },
    {
        id: 36,
        model: "A4 Limousine (Select)",
        modelId: "A4 45TDI quattro tip Select",
        abbrv: "Audi"
    },
    {
        id: 37,
        model: "A4 Limousine (Advanced+)",
        modelId: "A4 35TFSI Advanced+",
        abbrv: "Audi"
    },
    {
        id: 38,
        model: "A4 Limousine (Advanced+)",
        modelId: "A4 35TFSI S tr Advanced+",
        abbrv: "Audi"
    },
    {
        id: 39,
        model: "A4 Limousine (Advanced+)",
        modelId: "A4 40TFSI S tr Advanced+",
        abbrv: "Audi"
    },
    {
        id: 40,
        model: "A4 Limousine (Advanced+)",
        modelId: "A4 30TDI S tr Advanced+",
        abbrv: "Audi"
    },
    {
        id: 41,
        model: "A4 Limousine (Advanced+)",
        modelId: "A4 35TDI S tr Advanced+",
        abbrv: "Audi"
    },
    {
        id: 42,
        model: "A4 Limousine (Advanced+)",
        modelId: "A4 40TDI S tr Advanced+",
        abbrv: "Audi"
    },
    {
        id: 43,
        model: "A4 Limousine (Advanced+)",
        modelId: "A4 40TDI quattro S tr Advanced+",
        abbrv: "Audi"
    },
    {
        id: 44,
        model: "A4 Limousine (Advanced+)",
        modelId: "A4 45TDI quattro tip Advanced+",
        abbrv: "Audi"
    },
    {
        id: 45,
        model: "A4 Limousine (S line+)",
        modelId: "A4 35TFSI S line+",
        abbrv: "Audi"
    },
    {
        id: 46,
        model: "A4 Limousine (S line+)",
        modelId: "43A4 35TFSI S tr S line+",
        abbrv: "Audi"
    },
    {
        id: 47,
        model: "A4 Limousine (S line+)",
        modelId: "A4 40TFSI S tr S line+",
        abbrv: "Audi"
    },
    {
        id: 48,
        model: "A4 Limousine (S line+)",
        modelId: "A4 30TDI S tr S line+",
        abbrv: "Audi"
    },
    {
        id: 49,
        model: "A4 Limousine (S line+)",
        modelId: "A4 35TDI S tr S line+",
        abbrv: "Audi"
    },
    {
        id: 50,
        model: "A4 Limousine (S line+)",
        modelId: "A4 40TDI S tr S line+",
        abbrv: "Audi"
    },
    {
        id: 51,
        model: "A4 Limousine (S line+)",
        modelId: "A4 40TDI quattro S tr S line+",
        abbrv: "Audi"
    },
    {
        id: 52,
        model: "A4 Limousine (S line+)",
        modelId: "A4 45TDI quattro tip S line+",
        abbrv: "Audi"
    },
    {
        id: 53,
        model: "A5 Coupe (Advanced+)",
        modelId: "A5 Coupé 40TFSI S tr Advanced+",
        abbrv: "Audi"
    },
    {
        id: 54,
        model: "A5 Coupe (Advanced+)",
        modelId: "A5 Coupé 35TDI S tronic Advanced+",
        abbrv: "Audi"
    },
    {
        id: 55,
        model: "A5 Coupe (Advanced+)",
        modelId: "A5 Coupé 40TDI S tr Advanced+",
        abbrv: "Audi"
    },
    {
        id: 56,
        model: "A5 Coupe (Advanced+)",
        modelId: "A5 Coupé 40TDI quattro S tr Advanced+",
        abbrv: "Audi"
    },
    {
        id: 57,
        model: "A5 Coupe (Advanced+)",
        modelId: "A5 Coupé 45TDI quattro tip Advanced+",
        abbrv: "Audi"
    },
    {
        id: 58,
        model: "A5 Coupe (Advanced+)",
        modelId: "A5 Coupé 50TDI quattro tip Advanced+",
        abbrv: "Audi"
    },
    {
        id: 59,
        model: "A5 Coupe (S line+)",
        modelId: "A5 Coupé 40TFSI S tr S line+",
        abbrv: "Audi"
    },
    {
        id: 60,
        model: "A5 Coupe (S line+)",
        modelId: "A5 Coupé 35TDI S tr S line+",
        abbrv: "Audi"
    },
    {
        id: 61,
        model: "A5 Coupe (S line+)",
        modelId: "A5 Coupé 40TDI S tr S line+",
        abbrv: "Audi"
    },
    {
        id: 62,
        model: "A5 Coupe (S line+)",
        modelId: "A5 Coupé 40TDI quattro S tr S line+",
        abbrv: "Audi"
    },
    {
        id: 63,
        model: "A5 Coupe (S line+)",
        modelId: "A5 Coupé 45TDI quattro tip S line+",
        abbrv: "Audi"
    },
    {
        id: 64,
        model: "A5 Coupe (S line+)",
        modelId: "A5 Coupé 50TDI quattro tip S line+",
        abbrv: "Audi"
    },
    {
        id: 65,
        model: "A6 Limousine (Select)",
        modelId: "A6 50TDI quattro tip Select",
        abbrv: "Audi"
    },
    {
        id: 66,
        model: "A6 Limousine (Select)",
        modelId: "A6 45TDI quattro tip Select",
        abbrv: "Audi"
    },
    {
        id: 67,
        model: "A6 Limousine (Select)",
        modelId: "A6 40TDI quattro S tr Select",
        abbrv: "Audi"
    },
    {
        id: 68,
        model: "A6 Limousine (Select)",
        modelId: "A6 40TDI S tr Select",
        abbrv: "Audi"
    },
    {
        id: 69,
        model: "A6 Limousine (Select)",
        modelId: "A6 45TFSI quattro S tr Select",
        abbrv: "Audi"
    },
    {
        id: 70,
        model: "A6 Limousine (Select)",
        modelId: "A6 55TFSI quattro S tr Select",
        abbrv: "Audi"
    },
    {
        id: 71,
        model: "A6 Limousine (Sport Dynamic)",
        modelId: "A6 50TDI quattro tip Dynamic",
        abbrv: "Audi"
    },
    {
        id: 72,
        model: "A6 Limousine (Sport Dynamic)",
        modelId: "A6 45TDI quattro tip Dynamic",
        abbrv: "Audi"
    },
    {
        id: 73,
        model: "A6 Limousine (Sport Dynamic)",
        modelId: "A6 40TDI quattro S tr Dynamic",
        abbrv: "Audi"
    },
    {
        id: 74,
        model: "A6 Limousine (Sport Dynamic)",
        modelId: "A6 40TDI S tr Dynamic",
        abbrv: "Audi"
    },
    {
        id: 75,
        model: "A6 Limousine (Sport Dynamic)",
        modelId: "A6 45TFSI quattro S tr Dynamic",
        abbrv: "Audi"
    },
    {
        id: 76,
        model: "A6 Limousine (Sport Dynamic)",
        modelId: "A6 55TFSI quattro S tr Dynamic",
        abbrv: "Audi"
    },
    {
        id: 77,
        model: "A6 Limousine (Design Comfort)",
        modelId: "A6 50TDI quattro tip Comfort",
        abbrv: "Audi"
    },
    {
        id: 78,
        model: "A6 Limousine (Design Comfort)",
        modelId: "A6 45TDI quattro tip Comfort",
        abbrv: "Audi"
    },
    {
        id: 79,
        model: "A6 Limousine (Design Comfort)",
        modelId: "A6 40TDI quattro S tr Comfort",
        abbrv: "Audi"
    },
    {
        id: 80,
        model: "A6 Limousine (Design Comfort)",
        modelId: "A6 40TDI S tr Comfort",
        abbrv: "Audi"
    },
    {
        id: 81,
        model: "A6 Limousine (Design Comfort)",
        modelId: "A6 45TFSI quattro S tr Comfort",
        abbrv: "Audi"
    },
    {
        id: 82,
        model: "A6 Limousine (Design Comfort)",
        modelId: "A6 55TFSI quattro S tr Comfort",
        abbrv: "Audi"
    }
]

export default audiData