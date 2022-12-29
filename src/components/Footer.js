function Footer() {
    /*
    <footer>
        <p>Copyright &copy; 2022 Brian Wang @bwangsta</p>
    </footer>
    */
    const footer = document.createElement("footer")
    const copyright = document.createElement("p")

    copyright.textContent = "Copyright © 2022 Brian Wang @bwangsta"

    footer.append(copyright)

    return footer
}

export default Footer