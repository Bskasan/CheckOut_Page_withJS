const taxRate = 0.18;
const shippingPrice = 15.0;
const shippingFreePrice = 300;

window.addEventListener("load", () => {
  localStorage.setItem("taxRate", taxRate);
  localStorage.setItem("shippingPrice", shippingPrice);
  localStorage.setItem("shippingFreePrice", shippingFreePrice);

  calculateCardPrice();
});

const productsDiv = document.querySelector(".products");

//* Capturing ==> Static Parent ---> Childred
//* We are trying to catch all click in one addEventListener by using Capturing Method
productsDiv.addEventListener("click", (e) => {
  //! e.target vs. e.currentTarget
  //! alert(e.target.tagName);
  //! alert(e.currentTarget.className);

  if (e.target.className == "fa-solid fa-minus") {
    //alert("minus clicked");

    if (e.target.nextElementSibling.innerText > 1) {
      e.target.nextElementSibling.innerText--;
      calculateProductPrice(e.target);
    } else {
      //! innerText vs. textContent (whitespaces)
      if (
        confirm(
          `${
            e.target.closest(".product-info").querySelector("h2").innerText
          } will be removed. Are you sure?`
        )
      ) {
        e.target.closest(".product").remove();
      }
    }

    calculateCardPrice();
  } else if (e.target.classList.contains("fa-plus")) {
    //alert("plus btn clicked");
    e.target.parentElement.querySelector(".quantity").innerText++;
    calculateProductPrice(e.target);
    calculateCardPrice();
  } else if (e.target.getAttribute("class") == "remove-product") {
    //alert("remove btn clicked");
    if (
      confirm(
        `${
          e.target.closest(".product-info").querySelector("h2").innerText
        } will be removed. Are you sure?`
      )
    ) {
      e.target.closest(".product").remove();
    }
    calculateCardPrice();
  } else {
    alert("other element clicked");
  }
});

const calculateProductPrice = (target) => {
  //* Product total calculation
  //? productTotalPrice => quantity * unit price

  //? Unit price
  //! div.class vs. .class as performance
  const price = productInfoDiv.querySelector(
    "div.product-price p strong"
  ).innerText;
  //? Quantity
  const quantity = productInfoDiv.querySelector("p.quantity").innerText;
  

  const productInfoDiv = target.closest(".product-info");
  console.log(productInfoDiv);
};

const calculateCardPrice = () => {
  //* Cart total calculation from all products
};
