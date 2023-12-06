const basketIcon = document.querySelector(".fa-cart-shopping");
const basketArea = document.querySelector(".basket-area");
const productArea = document.querySelector(".product-area");
const dataArea = document.querySelector(".products-area");
const close = document.querySelector(".close-button");
const addBasket = document.querySelectorAll(".add");
let data = [];
let basketData = [];

basketIcon.addEventListener("click", () => {
  basketArea.classList.add("active");
});

close.addEventListener("click", () => {
  basketArea.classList.remove("active");
});

const getProducts = () => {
  fetch("./product.json")
    .then((res) => res.json())
    .then((products) => {
      data = products;
      showData();
    });
};
console.log(data);
let n = 8;

const showData = () => {
  dataArea.innerHTML = "";
  data.splice(1, n).forEach((item) => {
    dataArea.innerHTML += `
      <div class="product-card">
        <div class="image">
          <img src="${item.image}" alt="">
        </div>
        <div class="head">
          <h4>${item.name}</h4>
        </div>
        <div class="product-price">
          <span>${item.price}</span>
          <span class="price">45</span>
          <span class="money">$</span>
        </div>
        <div class="buttons-area">
          <button class="add" onclick = "addToBasket(${item.id})">Add Basket</button>
          <button class="like">Add Favorites</button>
        </div>
      </div>
    `;
  });
};
let num = 3;
const addToBasket = (itemId) => {
    const productCount = document.querySelector(".number-of-product");
  let findedItem = data.find((item) => item.id == itemId);
  let pushItem = {
    count: 1,
    product: findedItem,
  };
  let productId = basketData.find((data) => data.product.id == itemId);
  if (!productId) {
    basketData.push(pushItem);
  }
  else{
  }
//   else(productId){
//        num++;
//   }
  showBasket();

  console.log(basketData);
};

const showBasket = () => {
  productArea.innerHTML = "";
  basketData.forEach((data) => {
    productArea.innerHTML += `         
     <div class="basket-product">
    <div class="image">
    <img src="${data.product.image}" alt="">
    </div>
    <div class="product-about">
        <p id="name">${data.product.name}</p>
        <p id="about">${data.product.description}</p>
    </div>
    <div class="product-count">
        <div class="palas"><button>+</button></div>
        <div class="number-of-product">1</div>
        <div class="minus"><button>-</button></div>
    </div>
    <div>x</div>
   </div>`;
  });
};
// showData();
getProducts(); // Ürün verilerini almak için getProducts fonksiyonunu çağır
