let letters = "0123467895ABCDEF";

let click = document.getElementById("click");
click.onclick = () => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = color;
}