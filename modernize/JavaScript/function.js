
function onHover(item, itemChild) {
    item.style.backgroundColor = "#EBF3FE";
    item.style.color = "#5D87FF";
    itemChild.style.color = "#5D87FF";
}

function ofHover(item, itemChild) {
    item.style.backgroundColor = "";
    item.style.color = "";
    itemChild.style.color = "";
}

function onClick(currActive, item) {
    currActive.classList.remove("active");
    item.classList.add("active");

    return item;
}

let index = 0;

function moveSlide(direction, track, items) {
    if (direction === "next") {
        index++;
        if (index >= items.length) {
            index = 0;
        }
    } else {
        index--;
        if (index < 0) {
            index = items.length - 1;
        }
    }

    for(let i of items){
        items[i].style.transform = `translateX(-${index * 100}%)`;
    }
}