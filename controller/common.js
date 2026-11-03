function changePage(newPage){
    if (newPage === 'crops') model.currentPage = 'cropPage';
    else if (newPage === 'artisan') model.currentPage = 'artisanPage';
    updateView()
}

function setSeason(season){
    model.viewState.cropPage.cropSeason = season
    showCrops()
}

function calculateCropProfit(){
    return null
}