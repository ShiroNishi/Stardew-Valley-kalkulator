const model = {
    currentPage: 'cropPage',

    viewState: {
        cropPage: {
            cropSeason: "spring",
            cropSearch: '',
            selectedCrop: '',
            amountSeeds: '',
        }

    },
    data: {
        crops: [
                {icon: "bilder/parsnip.png", text: "Parsnip", season: "spring", price: 20},
                {icon: "bilder/potato.png", text: "Potato", season: "spring", price: 50},
                {icon: "bilder/cflower.png", text: "Cauliflower", season: "spring", price: 80},
                {icon: "bilder/bean.png", text: "Green Bean", season: "spring", price: 60},
                {icon: "bilder/kale.png", text: "Kale", season: "spring", price: 70},
                {icon: "bilder/garlic.png", text: "Garlic", season: "spring", price: 40},
                {icon: "bilder/sberry.png", text: "Strawberry", season: "spring", price: 100},
                {icon: "bilder/carrot.png", text: "Carrot", season: "spring", price: 0},
                {icon: "bilder/rhubarb.png", text: "Rhubarb", season: "spring", price: 100},

                {icon: "bilder/bberry.png", text: "Blueberry", season: "summer", price: 80},
                {icon: "bilder/corn.png", text: "Corn", season: "summer", price: 150},
                {icon: "bilder/melon.png", text: "Melon", season: "summer", price: 80},
                {icon: "bilder/pepper.png", text: "Hot Pepper", season: "summer", price: 40},
                {icon: "bilder/radish.png", text: "Radish", season: "summer", price: 40},
                {icon: "bilder/rcabbage.png", text: "Red Cabbage", season: "summer", price: 100},
                {icon: "bilder/sfruit.png", text: "Starfruit", season: "summer", price: 400},
                {icon: "bilder/tomato.png", text: "Tomato", season: "summer", price: 50},
                {icon: "bilder/ssquash.png", text: "Summer Squash", season: "summer", price: 0},
                {icon: "bilder/wheat.png", text: "Wheat", season: "summer", price: 10},
                
                {icon: "bilder/pump.png", text: "Pumpkin", season: "fall", price: 100},
                {icon: "bilder/eplant.png", text: "Eggplant", season: "fall", price: 20},
                {icon: "bilder/yam.png", text: "Yam", season: "fall", price: 60},
                {icon: "bilder/cberry.png", text: "Cranberries", season: "fall", price: 240},
                {icon: "bilder/achoke.png", text: "Artichoke", season: "fall", price: 30},
                {icon: "bilder/bchoy.png", text: "Bok Choy", season: "fall", price: 50},
                {icon: "bilder/grape.png", text: "Grape", season: "fall", price: 60},
                {icon: "bilder/broccoli.png", text: "Broccoli", season: "fall", price: 0},
                {icon: "bilder/beet.png", text: "Beet", season: "fall", price: 20},
                {icon: "bilder/amaranth.png", text: "Amaranth", season: "fall", price: 70},
                {icon: "bilder/gberry.png", text: "Sweet Gem Berry", season: "fall", price: 1000},

                {icon: "bilder/tea.png", text: "Tea Leaves", season: ["spring", "summer", "fall"]},
            ],
    },
}




/*
Crop calulator:
Season selector: spring, summer--
-> drop-down meny + "alle" option

Crop selector: spørs på sesong, parsnip --
-> liste med valg basert på sesong

Configuration: midt-felt
Antall frø -> input
Type gjødsel -> dropdown meny
Profession -> Tiller checkbox

Result & Profit:
Total earnings -> resultet g(old)
Utgifter (frø) -> input
Netto profit per dag:


*/

/* 
Artisan goods:
Season selector: spring, summer--
-> drop-down meny + "alle" option

Venstre-felt er det samme
Mid-felt:
Antall -> input
kvalitet -> drop-down
Type process -> drop-down
Profession -> Artisan checkbox

Result & Profit:

*/