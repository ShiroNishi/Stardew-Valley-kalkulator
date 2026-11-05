function searchCrop(input){
    model.viewState.cropPage.cropSearch = input
    showCrops()
}

function cropSelect(index){
    model.viewState.cropPage.selectedCrop = model.data.crops[index]
    let selectedCrop = model.viewState.cropPage.selectedCrop
    localStorage.setItem("selectedCrop", JSON.stringify(selectedCrop))

    showSelCrop()
}

function removeSel(){
    model.viewState.cropPage.selectedCrop = ''
    let selectedCrop = model.viewState.cropPage.selectedCrop
    localStorage.setItem("selectedCrop", selectedCrop)
    showCrops()
}

function numSeeds(input){
    model.viewState.cropPage.amountSeeds = parseInt(input)
    let selectedSeeds = model.viewState.cropPage.amountSeeds
    localStorage.setItem("selectedSeeds", selectedSeeds)
}

function fertilizerSelect(type){
    console.log(type) //dette er type.speed du får
    model.viewState.cropPage.fertilizerType=type
    

}

function checkTiller(){
    model.viewState.cropPage.tiller ^= 1;
    let tiller = model.viewState.cropPage.tiller
    localStorage.setItem("tillerCheck", tiller)
}

function calculateCropProfit(){
    calcTotalEarnings(); 
    calcExpenses();
    //calcNetIncome();

    updateView();
}

function findSelectedCrop(){
    let crops = model.data.crops;
    const selCrop = model.viewState.cropPage.selectedCrop;
    for (let i = 0; i < crops.length; i++){
        if (crops[i].text === selCrop.text) return crops[i];
}}

function calcTotalEarnings(){
    const amount = model.viewState.cropPage.amountSeeds;
    const fertilizer = model.viewState.cropPage.fertilizerType;
    const tiller = model.viewState.cropPage.tiller;
    const currentCrop = findSelectedCrop();

    let fullPrice = currentCrop.price * amount;
    if (fertilizer) console.log("Denne gjør ikke noe enda");
    if (tiller == 1) fullPrice = fullPrice * 1.1;
    return model.viewState.cropPage.totalEarnings = fullPrice;
}

function calcExpenses(){
    const amount = model.viewState.cropPage.amountSeeds;
    const currentCrop = findSelectedCrop();
    let fullExpenses = currentCrop.price * amount;
    return model.viewState.cropPage.expenses = fullExpenses

}
