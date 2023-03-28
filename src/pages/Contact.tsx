import chefMaoImg from "../assets/img/chef-mao.webp"
import xianglingImg from "../assets/img/xiangling.webp"
import guobaImg from "../assets/img/guoba.webp"

import ContactItem from "../components/ContactItem"

function Contact() {
  return (
    <section className="mx-auto max-w-4xl">
      <h1 className="text-3xl">Contact Us</h1>
      <ContactItem
        img={chefMaoImg}
        name="Chef Mao"
        phoneNumber="(123)-456-7890"
        email="chefmao@genshinimpact.com"
      />
      <ContactItem
        img={xianglingImg}
        name="Xiangling"
        phoneNumber="(890)-567-1234"
        email="xiangling@genshinimpact.com"
      />
      <ContactItem
        img={guobaImg}
        name="Guoba"
        phoneNumber="(747)-698-0450"
        email="guoba@genshinimpact.com"
      />
    </section>
  )
}

export default Contact
