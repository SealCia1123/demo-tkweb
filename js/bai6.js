window.onload = function () {
    let m = document.getElementById("main");
    let images = document.querySelectorAll(".thumb img");
    for (let im of images) {
        im.addEventListener("click", function () {
            m.setAttribute("src", `${this.getAttribute("src")}`);
        })
    }

    let products = document.querySelectorAll(".product>div");
    let buttons = document.querySelectorAll(".buttons button");
    for (let b of buttons) {
        b.addEventListener("click", function () {
            let txt = this.getAttribute("rel");
            m.setAttribute("src", `images/galaxys8/${txt}1.jpg`);
            for (let i = 0; i < images.length; i++)
                images[i].setAttribute("src", `images/galaxys8/${txt}${i + 1}.jpg`);

            for (let p of products) {
                p.style.background = `linear-gradient(lightblue, ${this.style.backgroundColor})`;
            }

        })
    }

    let productName = document.querySelectorAll(".product");
    let input = document.queryCommandIndeterm("#search");
    for (let p of productName) {

    }

}