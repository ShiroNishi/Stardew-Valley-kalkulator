function seasonSelectionView(){
    let html = /*HTML*/ `
        <section>
        Choose season:
        <select onchange="setSeason(this.value)">
            <option value="spring"
             ${model.viewState.cropSeason === "spring" ? "selected" : ""}
            >Spring</option>
            <option value="summer"
             ${model.viewState.cropSeason === "summer" ? "selected" : ""}
            >Summer</option>
            <option value="fall"
             ${model.viewState.cropSeason === "fall" ? "selected" : ""}
            >Fall</option>
            <option value="winter"
             ${model.viewState.cropSeason === "winter" ? "selected" : ""}
            >Winter</option>
            <option value="all"
             ${model.viewState.cropSeason === "all" ? "selected" : ""}
            >All</option>
        </select>
    </section> 
    `
    return html
}

function cropSelectorView(){
    let html = /*HTML*/ `
    <p>Crop selector:</p>
            <div id="crop-selector-controls">
                <input type="checkbox"> Include trees
                <br>
                <input placeholder="Search crops"
                oninput="searchCrop(this.value)">
            </div>

            <div id="cropsDisplay"></div>
    `
    return html
}

function message(){
    const currentPage = model.app.currentPage
    const crop = findSelectedCrop()
    const currentMachine = findSelectedMachine()
    let html = ''
    if (currentPage == 'cropPage') {
        try {
            if (crop.regrows === true){
                html = /*HTML*/ `
                    <p>*The total and net income are based on max amounts 
                    of harvests during one season.</p>
                `
            }
        } catch {
            return ''
        }
    } else if (currentPage == 'artisanPage') {
        try {
            if (!crop.artisan.includes(currentMachine.value)) {
                html = /*HTML*/ `
                    <p>*${crop.text} can't be processed in a ${currentMachine.text.toLowerCase()}</p>
                `
            } 
        } catch {
            return ''
        }
    } 
    return html
}