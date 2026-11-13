function loadSavedData(){
    const savedSelectedSeason = localStorage.getItem("selectedSeason");
    const savedSelectedCrop = localStorage.getItem("selectedCrop");
    const savedSelectedSeeds = localStorage.getItem("selectedSeeds");
    const savedSelectedItems = localStorage.getItem("selectedItems");
    const savedSelectedFertilizer = localStorage.getItem("selectedFertilizer");
    const savedSelectedTiller = localStorage.getItem("tillerCheck");
    const savedSelectedAgriculturist = localStorage.getItem("agriculturistCheck");
    const savedQuality = localStorage.getItem("selectedQuality")
    const savedMachine = localStorage.getItem("selectedMachine")
    const savedPage = localStorage.getItem("currentPage")
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
        model.viewState.cropSeason = savedSelectedSeason;
    }

    if (savedPage) model.app.currentPage = savedPage;
    if (savedSelectedSeason) model.viewState.cropSeason = savedSelectedSeason;
    if (savedSelectedSeeds) model.viewState.cropPage.amountSeeds = savedSelectedSeeds;
    if (savedSelectedItems) model.viewState.artisanPage.amountItems = savedSelectedItems;
    if (savedSelectedFertilizer) model.viewState.cropPage.fertilizerType = savedSelectedFertilizer;
    if (savedQuality) model.viewState.cropPage.quality = savedQuality;
    if (savedMachine) model.viewState.artisanPage.machine = savedMachine;
    if (savedSelectedTiller) savedSelectedTiller === '1' ? 1 : 0;
    if (savedSelectedAgriculturist) savedSelectedAgriculturist === '1' ? 1 : 0;
}

loadSavedData();

function searchCrop(input){
    model.viewState.cropPage.cropSearch = input
    showCrops()
}

function changePage(newPage){
    if (newPage === 'crops') model.app.currentPage = 'cropPage';
    else if (newPage === 'artisan') model.app.currentPage = 'artisanPage';
    localStorage.setItem("currentPage", model.app.currentPage)
    updateView()
}

function setSeason(season){
    model.viewState.cropSeason = season
    localStorage.setItem("selectedSeason", season)
    removeSel()
    showCrops()
}

