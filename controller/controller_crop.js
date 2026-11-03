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

function calcTotalEarnings(){
    let crops = model.data.crops
    const selCrop = model.viewState.cropPage.selectedCrop
    const amount = model.viewState.cropPage.amountSeeds
    for (let i = 0; i < crops.length; i++){
        if (crops[i].text === selCrop.text) {
            let fullPrice = crops[i].price * amount
            console.log(fullPrice)
            
        }
    }
}

//
//function fertilizerSelect(type){
//    console.log(type)
//    model.viewState.cropPage.fertilizerType=type
//}