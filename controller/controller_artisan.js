function findSelectedMachine(){
    const currentMachine = model.viewState.artisanPage.machine
    const machines = model.data.machines
    for (let machine of machines) {
        if (machine.value === currentMachine) return machine
    }
}

function chooseMachine(type, box){
    document.querySelectorAll('#machine-container .machine').forEach(image => {
        if (image !== box) image.classList.remove("machine-selected")
    })
    box.classList.add("machine-selected")  

    model.viewState.artisanPage.machine = type
    localStorage.setItem("selectedMachine", model.viewState.artisanPage.machine)
}

function calculateArtisanProfit(){
    model.viewState.artisanPage.totalEarnings = 0;
    calcTimeReady();
    calcProcessIncome();
    calcProcessNetIncome();

    updateView();
}

function calcTimeReady(){
    let mins = 0;
    let hours = 0;
    let days = 0;
    const machine = model.viewState.artisanPage.machine
    const currentCrop = findSelectedCrop();
    switch (machine){
        case "pjar":
            mins = 4000
            days = 3;
            break;
            
        case "keg":
            if (currentCrop.type == "wheat") {
                mins = 1750;
                days = 1.1;
            }
            //else if (currentCrop.type == "coffee") time = "120 min / 2 hours"
            else if (currentCrop.type == "tea") {
                mins = 180;
                hours = 3;
            } else if (currentCrop.type == "hops") {
                mins = 2250;
                days = 1.4;
            } else if (currentCrop.type == "vegetable") {
                mins = 6000; 
                days = 4;
            }
            else if (currentCrop.type == "fruit"){
                mins = 10000;
                days = 6.25;
            }
            break;
            
        case "dhydrator":
            break;
    }
        if (days == 0) model.viewState.artisanPage.time = `${mins} mins / ${hours} hours`
        if (hours == 0) model.viewState.artisanPage.time = `${mins} mins / ${days} days`
        let time = {mins, hours, days};
    return time
}

function calcProcessIncome(){
    let sellPrice = 0;
    const amount = model.viewState.artisanPage.amountItems
    const machine = model.viewState.artisanPage.machine
    const currentCrop = findSelectedCrop();
    switch (machine){
        case "pjar":
                sellPrice = Math.floor((currentCrop.sell * 2) + 50)
            break;
        case "keg":
            if (currentCrop.type == "wheat") sellPrice = 200
            //else if (currentCrop.type == "coffee")
                //if (amount < 5) 
            
            //må ha 5 bønner}
            else if (currentCrop.type == "tea") sellPrice = 100
            else if (currentCrop.type == "hops") sellPrice = 300
            else if (currentCrop.type == "vegetable") {
                sellPrice = Math.floor(currentCrop.sell * 2.25)
            }
            else if (currentCrop.type == "fruit") {
                sellPrice = Math.floor(currentCrop.sell * 3)
            }
            break;
        case "dhydrator":

            break;
    }

    const totalSellPrice = sellPrice * amount
    model.viewState.artisanPage.totalEarnings = totalSellPrice
    return totalSellPrice
}

function calcProcessNetIncome(){
    const income = calcProcessIncome();
    const time = calcTimeReady();
    console.log(time)
    console.log(income)
}

function numCrops(input){
    model.viewState.artisanPage.amountItems = parseInt(input);
    localStorage.setItem("selectedItems", model.viewState.artisanPage.amountItems);
}