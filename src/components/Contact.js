import chefMaoImg from "../img/chef-mao.webp"
import xianglingImg from "../img/xiangling.jpg"
import guobaImg from "../img/guoba.webp"

import ContactItem from "./ContactItem"

function Contact() {
    /*
    <section class="contact">
      <h1 class="header">Contact Us</h1>
      <ContactItem />
    </section>
    */
    // create HTML element
    const contact = document.createElement("section")
    const header = document.createElement("h1")

    // add text
    header.textContent = "Contact Us"

    // add class
    contact.className = "contact"
    header.className = "header"

    // append/prepend
    contact.append(
        header,
        ContactItem(chefMaoImg, "Chef Mao", "(123)-456-7890", "chefmao@genshinimpact.com"),
        ContactItem(xianglingImg, "Xiangling", "(890)-567-1234", "xiangling@genshinimpact.com"),
        ContactItem(guobaImg, "Guoba", "(747)-698-0450", "guoba@genshinimpact.com")
    )

    return contact
}

export default Contact