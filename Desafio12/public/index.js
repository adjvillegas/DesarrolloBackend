document.addEventListener("DOMContentLoaded", () => {

    document.getElementById('InputCreateTitle').addEventListener('keypress', (oEvent) => {
        checkValueParams(oEvent)
    })


    checkValueParams = (oEvent) => {
        
        switch (oEvent.target.name) {
            case 'number':
                
                if (isNaN(oEvent.key) == true || /^[0-9]) {}

                break;
        
            default:
                break;
        }

        console.log("asdasd")
    };
});