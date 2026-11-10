const model = {
    app: {
        currentPage: 'cropPage',
    },

    viewState: {
        cropSeason: "spring",
        cropPage: {
            cropSearch: '',
            selectedCrop: '',
            quality: 'normal',
            cycles: 1,

            amountSeeds: '',
            fertilizerType: '',
            tiller: 0,
            agriculturist: 0,

            totalEarnings: 0,
            expenses: 0,
            netIncome: 0,
            netIncomeDay: 0,
        },
        artisanPage: {
            amountItems: '',

        }

    },
    data: {
        crops: [
            {
                icon: "bilder/parsnip.png", 
                text: "Parsnip", 
                season: "spring",
                artisan: ["pjar", "keg"], 
                price: 20, 
                sell: 35, 
                days: 4,
                regrows: false,
            }, 
            {
                icon: "bilder/potato.png", 
                text: "Potato", 
                season: "spring", 
                artisan: ["pjar", "keg"],
                price: 50, 
                sell: 80, 
                days: 6,
                regrows: false,
            },
            {icon: "bilder/cflower.png", text: "Cauliflower", season: "spring", artisan: ["pjar", "keg"], price: 80, sell: 175, days: 12, regrows: false},
            {icon: "bilder/bean.png", text: "Green Bean", season: "spring", artisan: ["pjar", "keg"], price: 60, sell: 40, days: 10, regrows: true, regrowDays: 3},
            {icon: "bilder/kale.png", text: "Kale", season: "spring", artisan: ["pjar", "keg"], price: 70, sell: 110, days: 6, regrows: false},
            {icon: "bilder/garlic.png", text: "Garlic", season: "spring", artisan: ["pjar", "keg"], price: 40, sell: 60, days: 4, regrows: false},
            {icon: "bilder/sberry.png", text: "Strawberry", season: "spring", artisan: ["pjar", "keg", "dehydrator"], price: 100, sell: 120, days: 8, regrows: true, regrowDays: 4},
            {icon: "bilder/carrot.png", text: "Carrot", season: "spring", artisan: ["pjar", "keg"], price: 0, sell: 35, days: 3, regrows: false},
            {icon: "bilder/rhubarb.png", text: "Rhubarb", season: "spring", artisan: ["pjar", "keg", "dehydrator"], price: 100, sell: 220, days: 13, regrows: false},

            {
                icon: "bilder/bberry.png", 
                text: "Blueberry", 
                season: "summer", 
                artisan: ["pjar", "keg", "dehydrator"],
                price: 80, 
                sell: 50, 
                days: 13, 
                regrows: true, 
                regrowDays: 4
            },
            {
                icon: "bilder/corn.png", 
                text: "Corn", 
                season: ["summer", "fall"],
                artisan: ["pjar", "keg"],
                price: 150, 
                sell: 50, 
                days: 14, 
                regrows: true, 
                regrowDays: 4
            },
            {icon: "bilder/melon.png", text: "Melon", season: "summer", artisan: ["pjar", "keg", "dehydrator"], price: 80, sell: 250, days: 12, regrows: false},
            {
                icon: "bilder/hops.png", 
                text: "Hops", 
                season: "summer",
                artisan: ["pjar", "keg"],
                price: 60, 
                sell: 25, 
                days: 11, 
                regrows: true, 
                regrowDays: 1
            },
            {icon: "bilder/pepper.png", text: "Hot Pepper", season: "summer", artisan: ["pjar", "keg", "dehydrator"], price: 40, sell: 40, days: 5, regrows: true, regrowDays: 3},
            {icon: "bilder/radish.png", text: "Radish", season: "summer", artisan: ["pjar", "keg"], price: 40, sell: 90, days: 6, regrows: false},
            {icon: "bilder/rcabbage.png", text: "Red Cabbage", season: "summer", artisan: ["pjar", "keg"], price: 100, sell: 260, days: 9, regrows: false},
            {icon: "bilder/sfruit.png", text: "Starfruit", season: "summer", artisan: ["pjar", "keg", "dehydrator"], price: 400, sell: 750, days: 13, regrows: false},
            {icon: "bilder/tomato.png", text: "Tomato", season: "summer", artisan: ["pjar", "keg"], price: 50, sell: 60, days: 11, regrows: true, regrowDays: 4},
            {icon: "bilder/ssquash.png", text: "Summer Squash", season: "summer", artisan: ["pjar", "keg"], price: 0, sell: 45, days: 6, regrows: true, regrowDays: 3},
            {icon: "bilder/papple.png", text: "Pineapple", season: "summer", artisan: ["pjar", "keg", "dehydrator"], price:0, sell: 300, days: 14, regrows: true, regrowDays: 7},
            {icon: "bilder/wheat.png", text: "Wheat", season: ["summer", "fall"], artisan: ["pjar", "keg"], price: 10, sell: 25, days: 4, regrows: false},
            {icon: "bilder/cbean.png", text: "Coffee Bean", season: ["spring", "summer"], artisan: ["keg"], price: 0, sell: 15, days: 10, regrows: true, regrowDays: 2},
            {icon: "bilder/troot.png", text: "Taro Root", season: "summer", artisan: ["pjar", "keg"], price: 0, sell: 100, days: 10, regrows: false},

            {icon: "bilder/pump.png", text: "Pumpkin", season: "fall", artisan: ["pjar", "keg"], price: 100, sell: 320, days: 13, regrows: false},
            {icon: "bilder/eplant.png", text: "Eggplant", season: "fall", artisan: ["pjar", "keg"], price: 20, sell: 60, days: 5, regrows: true, regrowDays: 5},
            {icon: "bilder/yam.png", text: "Yam", season: "fall", artisan: ["pjar", "keg"], price: 60, sell: 160, days: 10, regrows: false},
            {icon: "bilder/cberry.png", text: "Cranberries", season: "fall", artisan: ["pjar", "keg", "dehydrator"], price: 240, sell: 75, days: 7, regrows: true, regrowDays: 5},
            {icon: "bilder/achoke.png", text: "Artichoke", season: "fall", artisan: ["pjar", "keg"], price: 30, sell: 160, days: 8, regrows: false},
            {icon: "bilder/bchoy.png", text: "Bok Choy", season: "fall", artisan: ["pjar", "keg"], price: 50, sell: 80, days: 4, regrows: false},
            {icon: "bilder/grape.png", text: "Grape", season: "fall", artisan: ["pjar", "keg", "dehydrator"], price: 60, sell: 80, days: 10, regrows: true, regrowDays: 3},
            {icon: "bilder/broccoli.png", text: "Broccoli", season: "fall", artisan: ["pjar", "keg"], price: 0, sell: 70, days: 8, regrows: true, regrowDays: 4},
            {icon: "bilder/beet.png", text: "Beet", season: "fall", artisan: ["pjar", "keg"], price: 20, sell: 100, days: 6, regrows: false},
            {icon: "bilder/amaranth.png", text: "Amaranth", season: "fall", artisan: ["pjar", "keg"], price: 70, sell: 150, regrows: false},
            {icon: "bilder/gberry.png", text: "Sweet Gem Berry", season: "fall", artisan: [], price: 1000, sell: 3000, days: 24, regrows: false},

            {icon: "bilder/pmelon.png", text: "Powdermelon", season: "winter", artisan: ["pjar", "keg", "dehydrator"], price: 0, sell: 60, days: 7, regrows: false},

            {icon: "bilder/tea.png", text: "Tea Leaves", season: ["spring", "summer", "fall", "winter"], artisan: ["pjar", "keg"], price: 0, sell: 50, days: 20, regrows: true, regrowDays: 1},
            {icon: "bilder/cfruit.png", text: "Cactus Fruit", season: ["spring", "summer", "fall", "winter"], artisan: ["pjar", "keg", "dehydrator"], price: 150, sell: 75, days: 12, regrows: true, regrowDays: 3},
            {icon: "bilder/afruit.png", text: "Ancient Fruit", season: ["spring", "summer", "fall"], artisan: ["pjar", "keg", "dehydrator"], price: 0, sell: 550, days: 28, regrows: true, regrowDays: 7},
        ],

        fertilizer: [
            {icon: "bilder/sp-gro.png", text: "Speed-Gro", speed: 10, price: 100},
            {icon: "bilder/delsp-gro.png", text: "Deluxe Speed-Gro", speed: 25, price: 150},
            {icon: "bilder/hysp-gro.png", text: "Hyper Speed-Gro", speed: 33, price: 0}
        ],

        machines: [
            {icon: "bilder/pjar.png", text: "Preserves Jar",},
            {icon: "bilder/keg.png", text: "Keg",},
            {icon: "bilder/dehydrator.png", text: "Dehydrator",},
        ]
    },
}


/* 
Artisan goods:
Season selector: spring, summer--
-> drop-down meny + "alle" option

Venstre-felt er det samme
Mid-felt:
Antall -> input
//kvalitet -> drop-down
Type process -> drop-down
Profession -> Artisan checkbox

Result & Profit:
    Time until ready:
    Total income:
    Net income per day:
*/