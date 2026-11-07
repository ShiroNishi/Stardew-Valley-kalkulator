function cropView(){
    let html = /*HTML*/ `
    <h2>Crop & Profit Calculator</h2>
    <div>${seasonSelectionView()}</div>
<!------- CROP SELECT -->
    <div id="grid-container">

        <div class="grid-item">
            <div class="crop-selector-controls">
                <p>Crop selector:</p>
                <input type="checkbox"> Include trees
                <br>
                <input placeholder="Search crops"
                oninput="searchCrop(this.value)">
            </div>

            <div id="cropsDisplay"></div>
        </div>
<!------- CONFIG ------>
        <div class="grid-item">
            <p>Configurations:</p>
            <p>Number of Seeds:</p>
            <input placeholder="0"
            value="${model.viewState.cropPage.amountSeeds}"
            oninput="numSeeds(this.value)">
            <p>Fertilizer:</p>
            <select onchange="fertilizerSelect(this.value)">
                ${showFertilizer()}
            </select>
            <p>Profession: </p>
            <input type="radio" name="profession" value="checked"
                > None
            <br>
            <input type="radio" name="profession"
                ${model.viewState.cropPage.tiller == 1 ? 'checked' : ''}
                onchange="checkTiller()"> Tiller
            <br>
            <input type="radio" name="profession"
                ${model.viewState.cropPage.agriculturist ? 'checked' : ''}
                onchange="checkAgriculturist()"> Agriculturist
        </div>
<!------ RESULT ---------->
        <div class="grid-item">
            <p>Result and Profit</p>
            <p>Total earnings:</p>
            <div>${model.viewState.cropPage.totalEarnings} g</div>
            <p>Expenses:</p>
            <div>${model.viewState.cropPage.expenses} g</div>
            <p>Net income / per day:</p>
            <div>${model.viewState.cropPage.netIncome} g / ${model.viewState.cropPage.netIncomeDay} g per day</div>
            <button onclick="calculateCropProfit()">Calculate</button>

        </div>

    </div>
    `
    return html
}

function showCrops(){
    let html = ''
    if (!document.querySelector('#cropsDisplay')) return 
    //^Eksisterer elementet med denne ID'en? Hvis ikke, returner

    if (model.viewState.cropPage.selectedCrop) {
        showSelCrop();
        return;
    }

    const crop = model.data.crops
    const season = model.viewState.cropPage.cropSeason
    const filter = model.viewState.cropPage.cropSearch
    let list = filterBySearch(filter, crop)
    list = filterBySeason(season, list)

    for (let i = 0; i < list.length; i++){
        html += /*HTML*/ `
                <div class="item" onclick="cropSelect(${crop.indexOf(list[i])})">
                <img class="itemimg" src="${list[i].icon}">
                ${list[i].text}</div>
            `
    }
    document.querySelector('#cropsDisplay').innerHTML = html
}

function filterBySearch(filter, crops) {
    if (filter === '') return [...crops]
    return crops.filter(item => item.text.toLowerCase().includes(filter.toLowerCase()))
}

function filterBySeason(currentSeason, list){
    if (currentSeason === 'all') return list
    return list.filter(item => item.season === currentSeason || item.season.includes(currentSeason)) 
}

function showSelCrop(){
    let item = model.viewState.cropPage.selectedCrop
    let html = /*HTML*/ `
        <div>
        <img class="itemimg" src="${item.icon}">
        ${item.text}</div>
        
        <button onclick="removeSel()">Remove Selection</button>
        `
        if (item.text === "Cactus Fruit"){
            html += /*HTML*/`<div>Note: Cactus Fruit can only be grown 
            indoors or on Ginger Island</div>`
        }
        if (item.text === "Tea Leaves"){
            html += /*HTML*/`<div>Note: Tea Leaves can be grown in winter 
            only indoors</div>`
        }

    document.querySelector('#cropsDisplay').innerHTML = html
}

function showFertilizer(){
    const fertilizer = model.data.fertilizer;
    const selected = String(model.viewState.cropPage.fertilizerType);
    let html = /*HTML*/ `<option value='' ${selected === '' ? 'selected' : ''}>None</option>`
    
    for (item of fertilizer){
        const value = String(item.speed);
        html += /*HTML*/ `
        <option value="${value}" ${selected === value ? 'selected' : ''}>
        ${item.text}</option>
        `
    }
    
    return html
}

//list = crop.filter(item => item.text.toLowerCase().includes(filter.toLowerCase()))
/*
item sjekker hvert element i crop.
Item ER hvert element, i dette tilfelle crop[i]
=> sier vi skal kjøre en anonym funksjon per element
item.text, item er objektet .text får tak i .text som vanlig

item =>  vs (item) => :
    trenger parantesene HVIS du skal sende med indexen. (item, index)

*/
