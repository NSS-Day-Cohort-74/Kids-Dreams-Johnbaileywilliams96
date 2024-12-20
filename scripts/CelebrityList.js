import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;

    const celebrityName = itemClicked.dataset.name
    const celebritySport = itemClicked.dataset.sport 

    if (itemClicked.dataset.type === "celebrity") {

        window.alert(`${celebrityName} is a ${celebritySport} star`)


    }



})

export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-name="${celebrity.name}"
                    data-sport="${celebrity.sport}"
                    id="star--${celebrity.id}">
                    ${celebrity.name}
                </li>`
    }

    html += "</ol>"
    return html
}
