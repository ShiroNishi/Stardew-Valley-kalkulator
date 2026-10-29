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
                {icon: "bilder/parsnip.png", text: "Parsnip", season: "spring"},
                {icon: "bilder/potato.png", text: "Potato", season: "spring"},
                {icon: "bilder/cflower.png", text: "Cauliflower", season: "spring"},
                {icon: "bilder/bean.png", text: "Green Bean", season: "spring"},
                {icon: "bilder/kale.png", text: "Kale", season: "spring"},
                {icon: "bilder/garlic.png", text: "Garlic", season: "spring"},
                {icon: "bilder/sberry.png", text: "Strawberry", season: "spring"},
                {icon: "bilder/carrot.png", text: "Carrot", season: "spring"},
                {icon: "bilder/rhubarb.png", text: "Rhubarb", season: "spring"},
                {icon: "bilder/bberry.png", text: "Blueberry", season: "summer"},
                {icon: "bilder/corn.png", text: "Corn", season: "summer"},
                {icon: "bilder/melon.png", text: "Melon", season: "summer"},
                {icon: "bilder/pepper.png", text: "Hot Pepper", season: "summer"},
                {icon: "bilder/radish.png", text: "Radish", season: "summer"},
                {icon: "bilder/rcabbage.png", text: "Red Cabbage", season: "summer"},
                {icon: "bilder/sfruit.png", text: "Starfruit", season: "summer"},
                {icon: "bilder/tomato.png", text: "Tomato", season: "summer"},
                {icon: "bilder/ssquash.png", text: "Summer Squash", season: "summer"},
                {icon: "bilder/wheat.png", text: "Wheat", season: "summer"},
                {icon: "bilder/pump.png", text: "Pumpkin", season: "fall"},
                {icon: "bilder/eplant.png", text: "Eggplant", season: "fall"},
                {icon: "bilder/yam.png", text: "Yam", season: "fall"},
                {icon: "bilder/cberry.png", text: "Cranberries", season: "fall"},
                {icon: "bilder/achoke.png", text: "Artichoke", season: "fall"},
                {icon: "bilder/bchoy.png", text: "Bok Choy", season: "fall"},
                {icon: "bilder/grape.png", text: "Grape", season: "fall"},
                {icon: "bilder/broccoli.png", text: "Broccoli", season: "fall"},
                {icon: "bilder/beet.png", text: "Beet", season: "fall"},
                {icon: "bilder/amaranth.png", text: "Amaranth", season: "fall"},
                {icon: "bilder/gberry.png", text: "Sweet Gem Berry", season: "fall"},

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