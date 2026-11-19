let CartItems = JSON.parse(localStorage.getItem("cartItems")) || []







function Re_render() {

  document.getElementById("CartItems").innerHTML = CartItems.map((item) => {


    // De-Structure 
    let { id, img, price, title, count } = item

    return `
    
    <div class="item">
        <img src="${img}" alt="Headphones">
        <div class="d">
          <h3>${title}</h3>
          <p style="color:green">In stock</p>
          <div class="qty">
            <button type="button" onclick="incDecFun(${id} , 'decremant')">−</button>
            <span>${count}</span>
            <button type="button" onclick="incDecFun(${id}, 'increment')">+</button>
            <button type="button" class="trash" title="Delete" onclick="deleteItem(${id})">🗑</button>
          </div>
        </div>
        <div class="price">₹${Number(price * count).toLocaleString("en-IN")}</div>
      </div> 
    `
  }).join(" ")
}



function incDecFun(itemId, type) {



  if (type === "increment") {

    // let data = (5 === 5) ? ("hi") : ("hello")

    // console.log(data);


    // console.log(CartItems);
    CartItems = CartItems.map((item) => {

      // console.log(item);

      return item.id === itemId ? { ...item, count: item.count + 1 } : item

    })



  }
  else if (type === "decremant") {
    CartItems = CartItems.map((item) => {

      // console.log(item);

      return item.id === itemId ? { ...item, count: Math.max(1, item.count - 1) } : item

    })


  }


  localStorage.setItem("cartItems", JSON.stringify(CartItems))
  Re_render()
  calculation()
  TotalAmount()

}


function deleteItem(CurrItemId = 2) {

  CartItems = CartItems.filter(item => item.id !== CurrItemId)

  localStorage.setItem("cartItems", JSON.stringify(CartItems))
  Re_render()
  calculation()
  TotalAmount()
}



function calculation() {

  let countValue = CartItems.reduce((acc, items) => {

    return acc += items.count

  }, 0)

  document.getElementById("count").innerHTML = countValue
  document.getElementById("item").innerHTML = countValue

}



function TotalAmount() {

  let TotalValue = CartItems.reduce((acc, items) => {

    return acc += items.count * items.price

  }, 0)

  document.getElementById("total").innerHTML = `₹${Number(TotalValue).toLocaleString("en-IN")}`

}




window.addEventListener("DOMContentLoaded", () => {

  Re_render()
  calculation()
  TotalAmount()
})