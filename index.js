let ratings = document.querySelectorAll("#rating .star"),
    selectedElement;

function scoreClick(event){
    let score = document.getElementById("score"),
        element = event.target;

    if(element === selectedElement){
        selectedElement.classList.remove("selected");
        selectedElement = undefined;
        score.innerHTML = "";
    } else {
        if(selectedElement !== undefined) selectedElement.classList.remove("selected");
        selectedElement = element;
        element.classList.add("selected");
        score.innerHTML = element.innerHTML;
    }
}

ratings.forEach((ele) => ele.addEventListener('click',scoreClick));
