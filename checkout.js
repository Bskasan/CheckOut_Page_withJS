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

  const productInfoDiv = target.closest(".product-info");
  console.log(productInfoDiv);

  //? Unit price
  //! div.class vs. .class as performance
  const price = productInfoDiv.querySelector(
    "div.product-price p strong"
  ).innerText;
  //? Quantity
  const quantity = productInfoDiv.querySelector("p.quantity").innerText;
  productInfoDiv.querySelector("div.product-line-price").innerText = (
    price * quantity
  ).toFixed(2);
};

const calculateCardPrice = () => {
  //* Cart total calculation from all products
  //* NodeList
  const productLinePriceDivs = document.querySelectorAll(".product-line-price");
  // const productLinePriceDivs = document.getElementsByClassName("product-line-price");

  let subtotal = 0;
  //? forEach => array + nodeList
  productLinePriceDivs.forEach((div) => {
    subtotal += parseFloat(div.innerText);
  });

  console.log(subtotal.toFixed(2));

  //? Make our calculation more dynamic.
  const taxPrice = subtotal * localStorage.getItem("taxRate");
  const shippingPrice =
    subtotal > 0 && subtotal < localStorage.getItem("shippingFreePrice")
      ? localStorage.getItem("shippingPrice")
      : 0;
};
