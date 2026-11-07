function cropSelect(index){
    model.viewState.cropPage.selectedCrop = model.data.crops[index]
    localStorage.setItem("selectedCrop", JSON.stringify(model.viewState.cropPage.selectedCrop))

    showSelCrop()
}

function removeSel(){
    model.viewState.cropPage.selectedCrop = ''
    localStorage.setItem("selectedCrop", model.viewState.cropPage.selectedCrop)
    showCrops()
}

function numSeeds(input){
    model.viewState.cropPage.amountSeeds = parseInt(input)
    localStorage.setItem("selectedSeeds", model.viewState.cropPage.amountSeeds)
}

function fertilizerSelect(type){
    //dette er type.speed du får
    model.viewState.cropPage.fertilizerType=type
    localStorage.setItem("selectedFertilizer", type)
}

function checkProfession(type){
    if (type == 'none') {
        model.viewState.cropPage.noProf = 1;
        model.viewState.cropPage.tiller = 0;
        model.viewState.cropPage.agriculturist = 0;
    } else if (type == 'tiller') {
        model.viewState.cropPage.noProf = 0;
        model.viewState.cropPage.tiller = 1;
        model.viewState.cropPage.agriculturist = 0;
    } else if (type == 'agriculturist') {
        model.viewState.cropPage.noProf = 0;
        model.viewState.cropPage.tiller = 0;
        model.viewState.cropPage.agriculturist = 1;
    }

    localStorage.setItem("tillerCheck", model.viewState.cropPage.tiller)
    localStorage.setItem("agriculturistCheck", model.viewState.cropPage.agriculturist)
    localStorage.setItem("noProfCheck", model.viewState.cropPage.noProf)
}

function calculateCropProfit(){
    model.viewState.cropPage.totalEarnings = 0;

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
    }
}

function calcTotalEarnings(){
    const amount = model.viewState.cropPage.amountSeeds;
    const fertilizer = model.viewState.cropPage.fertilizerType;
    const tiller = model.viewState.cropPage.tiller;
    const agriculturist = model.viewState.cropPage.agriculturist;
    const currentCrop = findSelectedCrop();
    const sellPrice = tiller === 1 ? Math.round(currentCrop.sell * 1.1) : currentCrop.sell
        //agriculturist === 1 ? Math.round(currentCrop.days / 1.1)
    const numberDays = calculateDays(currentCrop, fertilizer)
    console.log(numberDays)
        

    const multiplyAmount = sellPrice * amount


    return model.viewState.cropPage.totalEarnings = multiplyAmount
}

function calcExpenses(){
    const amount = model.viewState.cropPage.amountSeeds;
    const currentCrop = findSelectedCrop();
    let fullExpenses = currentCrop.price * amount;
    return model.viewState.cropPage.expenses = fullExpenses

}

function calculateDays(currentCrop, fertilizer){
    let getPercent = 0;
    if (fertilizer === "") return currentCrop.days
    else {
        switch (fertilizer) {
            case "10":
                getPercent = currentCrop.days * 0.10
                break;
            case "25":
                getPercent = currentCrop.days * 0.25
                break;
            case "33":
                getPercent = currentCrop.days * 0.33
                break;
        }
        return Math.floor(currentCrop.days - getPercent)
    }
}