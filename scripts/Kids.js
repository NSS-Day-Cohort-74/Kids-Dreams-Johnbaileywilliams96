import { Celebrities } from "./CelebrityList.js";
import { getCelebrities, getChildren } from "./database.js"

const children = getChildren()

const celebrities = getCelebrities()

//kids name and what they want to do with the celebrity is noted in the listener 

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;

    const kidName = itemClicked.dataset.name
    const kidWish = itemClicked.dataset.wish 

    if (itemClicked.dataset.type === "child") {

        window.alert(`${kidName} wish is to ${kidWish}`)


    }



})




export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-name="${child.name}" data-id="${child.id}" data-type="child" data-wish="${child.wish}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

