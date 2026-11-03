function cropView(){
    let html = /*HTML*/ `
    <h2>Crop & Profit Calculator</h2>
    <section>
        Choose season:
        <select onchange="setSeason(this.value)">
            <option value="spring">Spring</option>
            <option value="summer">Summer</option>
            <option value="fall">Fall</option>
            <option value="winter">Winter</option>
            <option value="all">All</option>
        </select>
    </section>

<!------- CROP SELECT -->
    <div id="grid-container">

        <div class="grid-item">
            <div style="position: fixed"; top: 0px;>
                <p>Crop selector:</p>
                <input type="checkbox"> Include trees
                <br>
                <input placeholder="Search crops"
                oninput="searchCrop(this.value)">
            </div>

            <div id="cropsDisplay" 
            style="padding-top: 100px";
            margin-top: 1000px;></div>
        </div>
<!------- CONFIG ------>
        <div class="grid-item">
            <p>Configurations:</p>
            <p>Number of Seeds:</p>
            <input placeholder="0"
            oninput="numSeeds(this.value)">
            <p>Fertilizer:</p>
            <select>
                ${showFertilizer()}
            </select>
            <p>Profession: </p>
            <input type="checkbox"
            oninput="checkTiller()"> Tiller
        </div>
<!------ RESULT ---------->
        <div class="grid-item">
            <p>Result and Profit</p>
            <p>Total earnings:</p>
            <div>0 g</div>
            <p>Expenses:</p>
            <div>500g</div>
            <p>Net income:</p>
            <div>1500g</div>
            <button>Calculate</button>
        </div>

    </div>
    `
    return html
}

function showCrops(){
    let html = ''
    if (!document.querySelector('#cropsDisplay')) return 
    //^Eksisterer elementet med denne ID'en? Hvis ikke, returner
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
    const fertilizer = model.data.fertilizer
    let html = /*HTML*/ `<option value="none">None</option>`
    for (item of fertilizer){
        html += /*HTML*/ `
        <option value="${item.speed}"
        oncchange="">${item.text}</option>
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

