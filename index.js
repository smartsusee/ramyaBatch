
let Products = [
    { id: 1, img: "./imgs/apple.jpg", price: 1999, title: "Apple" },
    { id: 2, img: "./imgs/bearImg.jpg", price: 2499, title: "Deddy Bear" },
    { id: 3, img: "./imgs/headPhone.jpg", price: 1499, title: "headPhone" },
    { id: 4, img: "./imgs/mobile.jpg", price: 899, title: "mobile" },
    { id: 5, img: "./imgs/nokia.jpg", price: 1299, title: "Nokia" },
    { id: 6, img: "./imgs/vivo.jpg", price: 3999, title: "Vivo" },
]


function reRender() {



    document.getElementById("card_sec").innerHTML = Products.map((v, i) => {


        let { id, img, price, title } = v


        return ` <div class="card" id="card_sec">
                <img src="${img}" alt="Headphones">
                <h3>${title}</h3>
                <div class="price">₹${price.toLocaleString("en-In")}</div>
                <button class="btn" onclick="view_nextPage(${id})">View Product</button>
            </div>
     
     `
    }).join(" ")



}



function view_nextPage(ItemId) {

    // console.log(ItemId);

    //   this is bom method 
    window.location.href = `./view.html?id=${ItemId}`


}



























// when my browser load it will generate in our browser 

window.addEventListener("DOMContentLoaded", () => {

    reRender()

    localStorage.setItem("products", JSON.stringify(Products))

})