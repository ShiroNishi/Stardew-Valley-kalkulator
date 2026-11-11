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

    updateView()
}



function calcTimeReady(){
    let time = 0
    const machine = model.viewState.artisanPage.machine
    const currentCrop = findSelectedCrop();
    switch (machine){
        case "pjar":
            break;

        case "keg":
            if (currentCrop.type == "wheat") time = "1750 min / 1.1 days"
            else if (currentCrop.type == "coffee") time = "120 min / 2 hours"
            else if (currentCrop.type == "tea") time = "180 min / 3 hours"
            else if (currentCrop.type == "hops") time = "2250 min / 1.4 days"
            break;

        case "dhydrator":
            break;
    }

    model.viewState.artisanPage.time = time
}
