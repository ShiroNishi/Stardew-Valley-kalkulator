function artisanView(){
    let html = /*HTML*/ `
    <h2>Artisan Goods & Profit Calculator</h2>
    <div>${seasonSelectionView()}</div>
    
<!------- CROP SELECT -->
    <div id="grid-container">
        <div id="search-crop-section" class="grid-item">
            ${cropSelectorView()}
        </div>
<!------- CONFIG ------>
        <div class="grid-item">
            <p>Configurations:</p>
            <p class="title">Amount:</p>
            <input placeholder="0"
            value="${model.viewState.artisanPage.amountItems}"
            oninput="numCrops(this.value)">
            <p class="title">Profession:</p>
            <input type="checkbox">Artisan
            <p class="title">Process Machine:</p>
            <div id="machine-container">${showMachines()}</div>
            <div>${message()}</div>
        </div>
<!------ RESULT ---------->
        <div class="grid-item">
            <p>Result and Profit:</p>
            <p class="title">Time until ready</p>
            <div>${model.viewState.artisanPage.time}</div>
            <p class="title">Total Income:</p>
            <div>${model.viewState.artisanPage.totalEarnings} g</div>
            <p class="title">Net income per day</p>
            <div>0 g per day</div>
            <br>
            <button onclick="calculateArtisanProfit()">Calculate</button>
            <br>
        </div>


    </div>
    `
    return html
}

function showMachines(){
    let html = '';
    for (let machine of model.data.machines){
        html += /*HTML*/ `
            <img class="machine ${model.viewState.artisanPage.machine === `${machine.value}` ? 'machine-selected' : ''}" 
            src="${machine.icon}"
            onclick="chooseMachine('${machine.value}', this)">
        `
    }
    return html
}