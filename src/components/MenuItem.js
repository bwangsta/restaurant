function MenuItem(img, title, price) {
    /*
    <article class="menu-card">
        <img src="../src/img/grilled-tiger-fish.webp" alt="Grilled Tiger Fish" class="menu-card-img">
        <div class="menu-card-description">
          <p class="menu-card-title">Grilled Tiger Fish</p>
          <p class="menu-card-price"><span>1,250</span> Mora</p>
        </div>
    </article>
    */
    // create HTML elements
    const card = document.createElement("article")
    const cardImage = document.createElement("img")
    const cardDescription = document.createElement("div")
    const cardTitle = document.createElement("p")
    const cardPrice = document.createElement("p")
    const itemPrice = document.createElement("span")

    // add text and attributes
    cardImage.src = img
    cardImage.alt = title
    cardTitle.textContent = title
    cardPrice.textContent = " Mora"
    itemPrice.textContent = price

    // add classes
    card.className = "menu-card"
    cardImage.className = "menu-card-img"
    cardDescription.className = "menu-card-description"
    cardTitle.className = "menu-card-title"
    cardPrice.className = "menu-card-price"

    // append/prepend
    cardPrice.prepend(itemPrice)
    cardDescription.append(cardTitle, cardPrice)
    card.append(cardImage, cardDescription)

    return card
}

export default MenuItem