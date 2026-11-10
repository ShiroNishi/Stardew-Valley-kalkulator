function cropView(){
    let html = /*HTML*/ `
    <h2>Crop & Profit Calculator</h2>
    <div>${seasonSelectionView()}</div>

<!------- CROP SELECT -->
    <div id="grid-container">
        <div id="search-crop-section" class="grid-item">
            ${cropSelectorView()}
        </div>
<!------- CONFIG ------>
        <div class="grid-item">
            <p>Configurations:</p>
            <p class="title">Number of Seeds:</p>
            <input placeholder="0"
            value="${model.viewState.cropPage.amountSeeds}"
            oninput="numSeeds(this.value)">
            <p class="title">Fertilizer:</p>
            <select onchange="fertilizerSelect(this.value)">
                ${showFertilizer()}
            </select>
            <p class="title">Profession: </p>
            <input type="checkbox" name="profession"
                ${model.viewState.cropPage.tiller == 1 ? 'checked' : ''}
                onchange="checkProfession('tiller')"> Tiller (Crops worth 10% more)
            <br>
            <input type="checkbox" name="profession"
                ${model.viewState.cropPage.agriculturist ? 'checked' : ''}
                onchange="checkProfession('agriculturist')"> Agriculturist (Crops grow 10% faster)
        </div>
<!------ RESULT ---------->
        <div class="grid-item">
            <p>Result and Profit</p>
            <p class="title">Total earnings:</p>
            <div>${model.viewState.cropPage.totalEarnings} g</div>
            <p class="title">Expenses:</p>
            <div>${model.viewState.cropPage.expenses} g</div>
            <p class="title">Net income / per day:</p>
            <div>${model.viewState.cropPage.netIncome} g / ${model.viewState.cropPage.netIncomeDay} g per day</div>
            <br>
            <button onclick="calculateCropProfit()">Calculate</button>
            <br>
            <p>${message()}</p>
        </div>

    </div>
    `
    return html
}

function message(){
    const crop = findSelectedCrop()
    let html = ''
    try {
        if (crop.regrows === true){
            html = /*HTML*/ `
                *The total and net income are based on max amounts 
                of harvests during one season.
            `
        }
    } catch {
        return ''
    }
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
    const season = model.viewState.cropSeason
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
        `
        if (item.text === "Cactus Fruit"){
            html += /*HTML*/`<div>Note: Cactus Fruit can only be grown 
            indoors or on Ginger Island</div>`
        }
        if (item.text === "Tea Leaves"){
            html += /*HTML*/`<div>Note: Tea Leaves can be grown in winter 
            only indoors</div>`
        }
    
        html += /*HTML*/`<p class="title">Choose quality:</p>
        <section id="quality-selector">
            <img class="quality ${model.viewState.cropPage.quality === 'normal' ? 'quality-selected' : ''}" alt="None"
            onclick="setQuality('normal', this)">
            <img class="quality ${model.viewState.cropPage.quality === 'silver' ? 'quality-selected' : ''}" src="bilder/ql_silver.png"
            onclick="setQuality('silver', this)">
            <img class="quality ${model.viewState.cropPage.quality === 'gold' ? 'quality-selected' : ''}" src="bilder/ql_gold.png"
            onclick="setQuality('gold', this)">
            <img class="quality ${model.viewState.cropPage.quality === 'iridium' ? 'quality-selected' : ''}" src="bilder/ql_iridium.png"
            onclick="setQuality('iridium', this)">

        </section>`
     if (model.app.currentPage == 'artisanPage') {
        html += /*HTML*/ `
        <p>*Crop quality doesn't affect process results</p>
        `
    } 
    html += /*HTML*/ `
    <section>
        <p class="title">${calculateDays(findSelectedCrop(), model.viewState.cropPage.fertilizerType)} days until harvest</p>
        <div class="title">${calculateHarvests()} harvests in a season</div>
        <div>${regrowDaysInfo()}</div>
        <br>
    </section>
    
    <button onclick="removeSel()">Remove Selection</button>`
    document.querySelector('#crop-selector-controls').classList.toggle('hidden')
    document.querySelector('#cropsDisplay').innerHTML = html
}

function regrowDaysInfo(){
    const crop = findSelectedCrop()
    if (crop.regrows === true) return /*HTML*/ `Regrows every ${crop.regrowDays} days` 
    return ''
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
