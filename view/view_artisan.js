function artisanView(){
    let html = /*HTML*/ `
    <h2>Artisan Goods & Profit Calculator</h2>
    <div>${seasonSelectionView()}</div>
    
<!------- CROP SELECT -->
    <div id="grid-container">
        <div id="search-crop-section" class="grid-item">
            ${cropSelectorView()}
        </div>





    </div>
    
    `
    return html
}