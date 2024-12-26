const calculatorContainer = document.getElementById("calculator_container")
const displayArea =document.getElementById("display_area")

calculatorContainer.addEventListener('click', (e) => {
    if (e.target.nodeName == "BUTTON"){
      switch (e.target.textContent) {
        case "C" :
            clear();
            break;
        case "DEL":
            deleteOneVaue();
            break;   
        case "=":
            evaluate();
            break; 
        default:
            addToDisplAyArea(e.target.textContent)    
      } 

    }
})

function clear(){
    displayArea.textContent = '' ;
}

function addToDisplAyArea(value){
    displayArea.textContent = displayArea.textContent + value ;
}

function deleteOneVaue(){
    let currentContent = displayArea.textContent;
    displayArea.textContent = currentContent.substring(0, currentContent.length - 1)
}

function evaluate() {
    try {
        let calculatino = math.evaluate(displayArea.textContent);
        displayArea.textContent = calculatino;
    } catch (error) {
        displayArea.textContent = "Invalid Operation";
        console.error(error)
    }
}