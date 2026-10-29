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
                {icon: "bilder/wheat.png", text: "Wheat", season: "summer"},
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