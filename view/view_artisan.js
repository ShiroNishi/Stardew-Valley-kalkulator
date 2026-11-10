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
            value="${model.viewState.artisanPage.amountItems}">
            <p class="title">Process Machine:</p>
            <div id="machine-container">${showMachines()}</div>


        </div>



<!------ RESULT ---------->
        <div class="grid-item">
            <p>Result and Profit:</p>

        </div>


    </div>
    `
    return html
}

function showMachines(){
    let html = '';
    for (let machine of model.data.machines){
        html += /*HTML*/ `
            <img class="machine-img" src="${machine.icon}"
            onclick="">
        `
    }
    return html
}