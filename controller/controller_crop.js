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
    calcNetIncome();
    calcNetIncomeDay();

    updateView();
}

function calcNetIncome(){
    const total = calcTotalEarnings();
    const expenses = calcExpenses();
    model.viewState.cropPage.netIncome = total - expenses
}

function calcNetIncomeDay(){
    const currentCrop = findSelectedCrop();
    const fertilizer = model.viewState.cropPage.fertilizerType;
    const total = calcTotalEarnings();
    const expenses = calcExpenses();
    const days = calculateDays(currentCrop, fertilizer);

    model.viewState.cropPage.netIncomeDay = ((total - expenses) / days).toFixed(2)

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
    const quality = model.viewState.cropPage.quality;
    const currentCrop = findSelectedCrop();
    let sellPrice = tiller === 1 ? Math.round(currentCrop.sell * 1.1) : currentCrop.sell
        //agriculturist === 1 ? Math.round(currentCrop.days / 1.1)
    const numberDays = calculateDays(currentCrop, fertilizer)
    
    if (quality === 'normal') sellPrice = sellPrice
    else if (quality === 'silver') sellPrice = Math.floor(sellPrice * 1.25)
    else if (quality === 'gold') sellPrice = Math.floor(sellPrice * 1.5)
    else if (quality === 'iridium') sellPrice = Math.floor(sellPrice * 2)

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

function setQuality(quality, box){
    document.querySelectorAll('#quality-selector .quality').forEach(image => {
        if (image !== box) image.classList.remove("quality-selected")
    })
    box.classList.add("quality-selected")
    model.viewState.cropPage.quality = quality
    localStorage.setItem("selectedQuality", model.viewState.cropPage.quality)
}

function calculateHarvests(){
    const fertilizer = model.viewState.cropPage.fertilizerType
    const currentCrop = findSelectedCrop();
    if (currentCrop.regrows === true) return
    else {
        console.log(currentCrop)
        const totalDays = calculateDays(currentCrop, fertilizer)
        return Math.floor(28 / totalDays)
    }
}