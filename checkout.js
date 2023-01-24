//const taxRate = 0.18;
//const shippingPrice = 15.0;
//const shippingFreePrice = 300;

window.addEventListener("load", () => {
  //localStorage.setItem("taxRate", taxRate);
  //localStorage.setItem("shippingPrice", shippingPrice);
  //localStorage.setItem("shippingFreePrice", shippingFreePrice);
});

const productsDiv = document.querySelector(".products");

//* Capturing ==> Static Parent ---> Childred
//* We are trying to catch all click in one addEventListener by using Capturing Method 
productsDiv.addEventListener("click", (e) => {
  //! e.target vs. e.currentTarget
  //! alert(e.target.tagName);
  //! alert(e.currentTarget.className);

  if (e.target.className == "fa-solid fa-minus") {
    alert("minus clicked");
  } else if (e.target.classList.contains("fa-plus")) {
    alert("plus btn clicked");
  } else if (e.target.getAttribute("class") == "remove-product") {
    alert("remove btn clicked");
  } else {
    alert("other element clicked");
  }
});
