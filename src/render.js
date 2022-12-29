function render() {
    const main = document.querySelector("main")
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
}

export default render