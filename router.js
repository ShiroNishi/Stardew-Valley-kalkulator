function updateView(){
    let loadedPage = "";
    if (model.currentPage === "cropPage") loadedPage = cropView();
    else if (model.currentPage === "artisanPage") loadedPage = artisanView();
    let header = /*HTML*/`
        <header>
            <h1 style="color:brown">Stardew Valley Calculator</h1>
            <section id="calcType">
                <button onclick="changePage('crops')">Crops</button>
                <button onclick="changePage('artisan')">Artisan Goods</button>
            </section>
        </header>` 

    let pageView = header + loadedPage;

    document.getElementById('app').innerHTML = pageView;
    showCrops()
}
