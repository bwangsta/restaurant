import chefMaoImg from "../assets/img/chef-mao.webp"
import xianglingImg from "../assets/img/xiangling.webp"
import guobaImg from "../assets/img/guoba.webp"

import ContactItem from "./ContactItem"

function Contact() {
    /*
    <section class="contact">
      <h1 class="header">Contact Us</h1>
      <div class="contact-grid">
        <ContactItem />
      </div>
    </section>
    */
    // create HTML element
    const contact = document.createElement("section")
    const header = document.createElement("h1")
    const grid = document.createElement("div")

    // add text
    header.textContent = "Contact Us"

    // add class
    contact.className = "contact"
    header.className = "header"
    grid.className = "contact-grid"

    // append/prepend
    grid.append(
        ContactItem(chefMaoImg, "Chef Mao", "(123)-456-7890", "chefmao@genshinimpact.com"),
        ContactItem(xianglingImg, "Xiangling", "(890)-567-1234", "xiangling@genshinimpact.com"),
        ContactItem(guobaImg, "Guoba", "(747)-698-0450", "guoba@genshinimpact.com")
    )
    contact.append(
        header,
        grid
    )

    return contact
}

export default Contact