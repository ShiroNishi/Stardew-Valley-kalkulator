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