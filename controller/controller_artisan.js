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

    return 0
}
