import chefMaoImg from "../assets/img/chef-mao.webp"
import xianglingImg from "../assets/img/xiangling.webp"
import guobaImg from "../assets/img/guoba.webp"

import ContactItem from "../components/ContactItem"

function Contact() {
  return (
    <section className="contact">
      <h1 className="header">Contact Us</h1>
      <div className="contact-grid">
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
      </div>
    </section>
  )
}

export default Contact