function loadSavedData(){
    const savedSelectedSeason = localStorage.getItem("selectedSeason");
    const savedSelectedCrop = localStorage.getItem("selectedCrop");
    const savedSelectedSeeds = localStorage.getItem("selectedSeeds");
    const savedSelectedFertilizer = localStorage.getItem("selectedFertilizer");
    const savedSelectedTiller = localStorage.getItem("tillerCheck");
    const validSeasons = ["spring", "summer", "fall", "winter", "all"];
    
    if(savedSelectedCrop) {
        try {
            const savedCrop = JSON.parse(savedSelectedCrop);
            model.viewState.cropPage.selectedCrop = 
            model.data.crops.find(crop => crop.text === savedCrop.text) || '';
        } catch {
            model.viewState.cropPage.selectedCrop = '';
        }
    }
    
    if (validSeasons.includes(savedSelectedSeason)) {
        model.viewState.cropPage.cropSeason = savedSelectedSeason;
    }
    if (savedSelectedSeason) model.viewState.cropPage.cropSeason = savedSelectedSeason;
    if (savedSelectedSeeds) model.viewState.cropPage.amountSeeds = savedSelectedSeeds;
    if (savedSelectedFertilizer) model.viewState.cropPage.fertilizerType = savedSelectedFertilizer;
    if(savedSelectedTiller) savedSelectedTiller === '1' ? 1 : 0;
}

loadSavedData();

function changePage(newPage){
    if (newPage === 'crops') model.app.currentPage = 'cropPage';
    else if (newPage === 'artisan') model.app.currentPage = 'artisanPage';
    updateView()
}

function setSeason(season){
    model.viewState.cropPage.cropSeason = season
    localStorage.setItem("selectedSeason", season)
    showCrops()
}