import wanminImg from "../assets/img/wanmin-restaurant.webp"

function Home() {
    /*
    <section class="home">
      <h1>Wanmin Restaurant</h1>
      <img src="../src/img/wanmin-restaurant.webp" alt="Wanmin Restaurant">
    </section>
    */
    // create HTML elements
    const home = document.createElement("section")
    const header = document.createElement("h1")
    const image = document.createElement("img")

    // add text and attributes
    header.textContent = "Wanmin Restaurant"
    image.src = wanminImg
    image.alt = "Picture of Wanmin Restaurant"

    // add class
    home.className = "home"

    // append
    home.append(header, image)

    return home
}

export default Home