function searchCrop(input){
    model.viewState.cropPage.cropSearch = input
    showCrops()
}

function cropSelect(index){
    model.viewState.cropPage.selectedCrop = model.data.crops[index]
    showSelCrop()
}

function removeSel(){
    model.viewState.cropPage.selectedCrop = ''
    showCrops()
}

function numSeeds(input){
    model.viewState.cropPage.amountSeeds = parseInt(input)
}

function checkTiller(){
    model.viewState.cropPage.tiller ^= 1;
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

//
//function fertilizerSelect(type){
//    console.log(type)
//    model.viewState.cropPage.fertilizerType=type
//}