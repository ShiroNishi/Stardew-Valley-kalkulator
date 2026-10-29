function changePage(newPage){
    if (newPage === 'crops') model.currentPage = 'cropPage';
    else if (newPage === 'artisan') model.currentPage = 'artisanPage';
    updateView()
}

function searchCrop(input){
    model.viewState.cropPage.cropSearch = input
    showCrops()
}

function cropSelect(index){
    model.viewState.cropPage.selectedCrop = model.data.crops[index]
    calcTotalEarnings()
    showSelCrop()
}

function removeSel(){
    model.viewState.cropPage.selectedCrop = ''
    showCrops()
}

function setSeason(season){
    model.viewState.cropPage.cropSeason = season
    showCrops()
}

function numSeeds(input){
    model.viewState.cropPage.amountSeeds = parseInt(input)
}

function calcTotalEarnings(){
    let crops = model.data.crops
    let selCrop = model.viewState.cropPage.selectedCrop
    for (let i = 0; i < crops.length; i++){
        if (crops[i].text === selCrop.text) {
            //hent ut prisen og lagre den i modell
        }
    }
}