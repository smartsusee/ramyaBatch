// console.log("view js file");

let getUrlId = new URLSearchParams(window.location.search).get("id")


// "4" == 4  -> true 
// "4" === 4  -> false 
let Products = JSON.parse(localStorage.getItem("products")) || []



let FindProduct = Products.filter(item => item.id == getUrlId)
let CartArr = JSON.parse(localStorage.getItem("cartItems")) || []



document.getElementById("viewProduct").innerHTML = FindProduct.map((item) => {


    let { id, img, price, title } = item


    return ` <img src="${img}" alt="Headphones">
    <div class="info">
      <h1>${title}</h1>
      <div class="price">₹${price.toLocaleString("en-IN")}</div>
      <p>Over-ear wireless headphones with deep bass, 30 hours battery life, soft ear cushions and built-in microphone
        for calls.</p>
      <p>✔ Free delivery &nbsp; ✔ 7 days replacement &nbsp; ✔ In stock</p>
      <button class="btn orange" onclick="addToCart(${id} , 'addtocart')">Add to Cart</button>
      <a class="btn" href="index.html">← Back to Shop</a>
      
    </div>
`
})





function addToCart(ItemId, type) {






    if (CartArr.some(v => v.id == ItemId)) {

        alert("already added in you'r cart")

        window.location.href = `./cart.html`

        return;
    }

    else {

        let cartData = FindProduct[0]
        let addCountCartItem = { ...cartData, count: 1 }
        CartArr.push(addCountCartItem)



        localStorage.setItem("cartItems", JSON.stringify(CartArr))
        alert("this Product added in you'r cart")


    }




    window.location.href = `./cart.html`


    console.log("hi");






}



