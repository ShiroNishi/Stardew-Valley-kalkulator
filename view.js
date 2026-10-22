updateView()

function updateView(){
    let loadedPage = ''
    if (model.currentPage === 'cropPage') loadedPage = cropView()
    else if (model.currentPage === 'artisanPage') loadedPage = artisanView()
    let header = /*HTML*/`
        <header>
            <h1>Stardew Valley Calculator</h1>
            <section id="calcType">
                <button onclick="changePage('crops')">Crops</button>
                <button onclick="changePage('artisan')">Artisan Goods</button>
            </section>
        </header>` 

    let pageView = header + loadedPage

    document.getElementById('app').innerHTML = pageView
    showCrops()
}


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

    <div id="grid-container">
        <div>
            <p>Crop selector:</p>
            <input type="checkbox"> Include trees
            <br>
            <input placeholder="Search crops"
            oninput="searchCrop(this.value)">
            <div id="cropsDisplay"></div>
        </div>
<!-------------------------------------------------------->
        <div>
            <p>Configurations:</p>
            <p>Number of Seeds:</p>
            <input placeholder="0">
            <p>Fertilizer:</p>
            <select>
                <option>None</option>
                <option>Speed-Gro</option>
                <option>Deluxe Speed-Gro</option>
                <option>Hyper Speed-Gro</option>
            </select>
            <p>Profession: </p>
            <input type="checkbox"> Tiller
        </div>
<!-------------------------------------------------------->
        <div>
        <p>Result and Profit</p>
        <p>Total earnings:</p>
        <div>2000g</div>
        <p>Expenses:</p>
        <div>500g</div>
        <p>Net income:</p>
        <div>1500g</div>

        </div>
    </div>
    `
    return html
}

function artisanView(){
    let html = /*HTML*/ `
    <h2>Artisan Goods & Profit Calculator</h2>` 

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

    //Feil før: cropSelect(${i}) sendte indexen i den filtrerte listen,
    //men cropSelect slår opp i hele model.data.crops. Da ble feil crop valgt.
    //crop.indexOf(list[i]) finner riktig index i hele listen.
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
    //Feil før: filtrerte model.data.crops i stedet for list.
    //Da ble søkeresultatet fra filterBySearch kastet bort.
    //Nå filtrerer vi listen vi får inn, så søk og sesong virker sammen.
    //'all' finnes ikke som season på noen crop, så da returnerer vi hele listen.
    if (currentSeason === 'all') return list
    return list.filter(item => item.season === currentSeason)
}


function showSelCrop(){
    let item = model.viewState.cropPage.selectedCrop
    let html = /*HTML*/ `
        <div>
        <img class="itemimg" src="${item.icon}">
        ${item.text}</div>
        
        <button onclick="removeSel()">Remove Selection</button>
        `

    document.querySelector('#cropsDisplay').innerHTML = html
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