function ContactItem(img, name, phoneNumber, email) {
    /*
    <article class="contact-card">
        <img src="../src/img/chef-mao.webp" alt="Chef Mao" class="contact-card-img">
        <div class="contact-card-description">
            <p class="contact-card-name">Chef Mao</p>
            <p class="contact-card-number">(123)-456-7890</p>
            <p class="contact-card-email">chefmao@genshinimpact.com</p>
        </div>
    </article>
    <article class="contact-card">
        <img src="../src/img/xiangling.jpg" alt="" class="contact-card-img">
        <div class="contact-card-description">
            <p class="contact-card-name">Xiangling</p>
            <p class="contact-card-number">(890)-567-1234</p>
            <p class="contact-card-email">xiangling@genshinimpact.com</p>
        </div>
    </article>
    */
    // create HTML element
    const contactCard = document.createElement("article")
    const contactImage = document.createElement("img")
    const contactDescription = document.createElement("div")
    const contactName = document.createElement("p")
    const contactNumber = document.createElement("p")
    const contactEmail = document.createElement("p")

    // add text/attributes
    contactImage.src = img
    contactImage.alt = name
    contactName.textContent = name
    contactNumber.textContent = phoneNumber
    contactEmail.textContent = email

    // add class
    contactCard.className = "contact-card"
    contactImage.className = "contact-card-img"
    contactDescription.className = "contact-card-description"
    contactName.className = "contact-card-name"
    contactNumber.className = "contact-card-number"
    contactEmail.className = "contact-card-email"

    // append/prepend
    contactDescription.append(contactName, contactNumber, contactEmail)
    contactCard.append(contactImage, contactDescription)

    return contactCard
}

export default ContactItem