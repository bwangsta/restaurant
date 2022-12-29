import wanminImg from "../img/wanmin-restaurant.webp"

function Home() {
    // create HTML elements
    const home = document.createElement("section")
    const header = document.createElement("h1")
    const image = document.createElement("img")

    // add text and attributes
    header.textContent = "Wanmin Restaurant"
    image.src = wanminImg
    image.alt = "Picture of Wanmin Restaurant"

    // append
    home.append(header, image)

    return home
}

export default Home