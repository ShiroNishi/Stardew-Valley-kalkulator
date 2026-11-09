function cropSelect(index){
    model.viewState.cropPage.selectedCrop = model.data.crops[index]
    localStorage.setItem("selectedCrop", JSON.stringify(model.viewState.cropPage.selectedCrop))

    showSelCrop()
}

function removeSel(){
    model.viewState.cropPage.selectedCrop = ''
    localStorage.setItem("selectedCrop", model.viewState.cropPage.selectedCrop)
    document.querySelector('#crop-selector-controls').classList.remove('hidden')
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
    if (type == 'tiller') {
        model.viewState.cropPage.tiller ^= 1;
        localStorage.setItem("tillerCheck", model.viewState.cropPage.tiller)
    } else if (type == 'agriculturist') {
        model.viewState.cropPage.agriculturist ^= 1;
        localStorage.setItem("agriculturistCheck", model.viewState.cropPage.agriculturist)
    }
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
    const agriculturist = model.viewState.cropPage.agriculturist
    const total = calcTotalEarnings();
    const expenses = calcExpenses();
    const days = calculateDays(currentCrop, fertilizer);

    if (agriculturist === 1) {
        const daysWithProf = daysWithAgriculturist(currentCrop, fertilizer)
        model.viewState.cropPage.netIncomeDay = ((total - expenses) / daysWithProf).toFixed(2)

    } else {
        model.viewState.cropPage.netIncomeDay = ((total - expenses) / days).toFixed(2)
    }
}

function calculateDays(currentCrop, fertilizer){
    const agriculturist = model.viewState.cropPage.agriculturist
    let getPercent = 0;
    if (fertilizer === "" && agriculturist === 0) return currentCrop.days
    else if (agriculturist === 1) return daysWithAgriculturist(currentCrop, fertilizer)
    else if (agriculturist === 0) {
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

function daysWithAgriculturist(currentCrop, fertilizer){
    let getPercent = 0;
    switch (fertilizer) {
        case "":
            getPercent = currentCrop.days * 0.10
            break;
        case "10":
            getPercent = currentCrop.days * 0.20
            break;
        case "25":
            getPercent = currentCrop.days * 0.35
            break;
        case "33":
            getPercent = currentCrop.days * 0.43
            break;
    }
    return Math.floor(currentCrop.days - getPercent)
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
    const tiller = model.viewState.cropPage.tiller;
    const quality = model.viewState.cropPage.quality;
    const currentCrop = findSelectedCrop();

    let sellPrice = tiller === 1 ? Math.round(currentCrop.sell * 1.1) : currentCrop.sell
    
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

function setQuality(quality, box){
    document.querySelectorAll('#quality-selector .quality').forEach(image => {
        if (image !== box) image.classList.remove("quality-selected")
    })
    box.classList.add("quality-selected")
    model.viewState.cropPage.quality = quality
    localStorage.setItem("selectedQuality", model.viewState.cropPage.quality)
}

function calculateHarvests(){
    let amountHarvest = 0;
    const currentCrop = findSelectedCrop();
    const baseDays = parseInt(calculateDays(currentCrop, model.viewState.cropPage.fertilizerType))
    const cropObj = {
        days: baseDays,
    }

    if (currentCrop.regrows === true) {
        for (let i = cropObj.days; i <= 28 - 1; i+= currentCrop.regrowDays){
            amountHarvest ++;
        }
        return amountHarvest
    }
    else {
        const totalDays = calculateDays(currentCrop, model.viewState.cropPage.fertilizerType)
        return Math.floor((28 - 1) / totalDays)
    }
}