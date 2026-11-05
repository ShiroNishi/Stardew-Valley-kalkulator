loadSavedData();

function loadSavedData(){
    const savedSelectedCrop = model.app.savedSelectedCrop
    const savedSelectedSeeds = model.app.savedSelectedSeeds
    const savedSelectedFertilizer = model.app.savedSelectedFertilizer
    const savedSelectedTiller = model.app.savedSelectedTiller

    if(savedSelectedCrop) model.viewState.cropPage.selectedCrop = JSON.parse(savedSelectedCrop)
    console.log(model.viewState.cropPage.selectedCrop)
}

function changePage(newPage){
    if (newPage === 'crops') model.app.currentPage = 'cropPage';
    else if (newPage === 'artisan') model.app.currentPage = 'artisanPage';
    updateView()
}

function setSeason(season){
    model.viewState.cropPage.cropSeason = season
    showCrops()
}

function calculateCropProfit(){
    return null
}