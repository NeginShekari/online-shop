/*function renderProducts(products) {
  const productList = document.getElementById('product-list');

  const productsHTML = products
    .map(
      product =>
        `<div class="product col-lg-4 col-md-6 mb-4">
		<div class="card h-100">
			<a href="#"
				><img
					class="card-img-top"
					src="${product.image}"
					alt="${product.title}"
			/></a>
			<div class="card-body">
				<h4 class="card-title">
				    ${product.title}
				</h4>
				<h5 class="product-price">${formatMoney(product.price)} تومان</h5>
				<p class="card-text">
				    ${product.description}
				</p>
			</div>
			<div class="card-footer">
				<button onclick="updateCart(\'${product.title}\',\'${product.id}\',1,\'add\')" class="btn btn-light add-to-cart" data-product-id="${product.id}">
					افزودن به سبد خرید
				</button>
			</div>
		</div>
	</div>`
    )
    .join('');

  productList.innerHTML = productsHTML;
}

function formatMoney(amount, decimalCount = 0, decimal = '.', thousands = ',') {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? '-' : '';

    let i = parseInt(
      (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
    ).toString();
    let j = i.length > 3 ? i.length % 3 : 0;

    return (
      negativeSign +
      (j ? i.substr(0, j) + thousands : '') +
      i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) +
      (decimalCount
        ? decimal +
          Math.abs(amount - i)
            .toFixed(decimalCount)
            .slice(2)
        : '')
    );
  } catch (e) {
    console.log(e);
  }
}

let productList = [];
window
  .fetch('http://localhost:3000/products')
  .then(res => res.json())
  .then(result => {
    productList = result;
    renderProducts(productList);
  });

let products;
window.addEventListener('load', () => {
  products = JSON.parse(localStorage.getItem("cart"));
  if (products !== null) {
    products.forEach(product => {
      $('#cart-list').append(`
      <div class="cart">
      <div class="list-group-item d-flex justify-content-between align-items-center cart-item">
          <span>${product.title}</span>
          <div>
          <button class="btn inc-quantity" onclick="updateCart(\'${product.title}\',\'${product.id}\',${product.quantity},\'add\')" data-product-id="${product.id}">+</button>
          <span>${product.quantity}</span>
          <button class="btn dec-quantity" onclick="updateCart(\'${product.title}\',\'${product.id}\',${product.quantity},\'remove\')" data-product-id="${product.id}">-</button>
          </div>
      </div>
      </div>
      `)
    })
  }
  else
  {
    products = [];
  }
})

  function updateCart(title,id,quantity,mode){
    let myProduct = {
      "title" : title,
      "id" : id,
      "quantity" : quantity
    }
    // console.log(products)
    if(products === null)
    {
      products.push(myProduct);
      localStorage.setItem("cart", JSON.stringify(products));
    }
    else
    {
      if(mode == "add")
      {
        checkAndAdd(myProduct); 
      }
      else if(mode == "remove")
      {
        checkAndRemove(myProduct);
      }
    }
    function checkAndAdd(obj){
      for (let i = 0; i < products.length; i++) {
        if (products[i].id === obj.id) {
          products[i].quantity++;
          localStorage.setItem("cart", JSON.stringify(products));
          return;
        }
      }
      products.push(myProduct);
      localStorage.setItem("cart", JSON.stringify(products));
    }
    function checkAndRemove(obj){
      for (let i = 0; i < products.length; i++) {
        if (products[i].id === obj.id) {
          products[i].quantity--;
          if(products[i].quantity === 0)
          {
            products.splice(i, 1);
          }
          localStorage.setItem("cart", JSON.stringify(products));
          return;
        }
      }
    }
    $('#cart-list').empty();
    products.forEach(product => {
      $('#cart-list').append(`
      <div class="cart">
      <div class="list-group-item d-flex justify-content-between align-items-center cart-item">
          <span>${product.title}</span>
          <div>
          <button class="btn inc-quantity" onclick="updateCart(\'${product.title}\',\'${product.id}\',${product.quantity},\'add\')" data-product-id="${product.id}">+</button>
          <span>${product.quantity}</span>
          <button class="btn dec-quantity" onclick="updateCart(\'${product.title}\',\'${product.id}\',${product.quantity},\'remove\')" data-product-id="${product.id}">-</button>
          </div>
      </div>
      </div>
      `)
    })
  }
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Next initial project token: XxJ5d5hKwN

/*
<div class="list-group-item d-flex justify-content-between align-items-center cart-item">
  <span>عنوان محصول</span>
  <div>
    <button class="btn inc-quantity" data-product-id="ایدی محصول">+</button>
    <span>تعداد محصول برای خرید</span>
    <button class="btn dec-quantity" data-product-id="ایدی محصول">-</button>
  </div>
</div>
*/

function renderProducts(products) {
  const productList = document.getElementById('product-list');

  const productsHTML = products
    .map(
      product =>
        `<div class="product col-lg-4 col-md-6 mb-4">
		<div class="card h-100">
			<a href="#"
				><img
					class="card-img-top"
					src="${product.image}"
					alt="${product.title}"
			/></a>
			<div class="card-body">
				<h4 class="card-title">
				    ${product.title}
				</h4>
				<h5 class="product-price">${formatMoney(product.price)} تومان</h5>
				<p class="card-text">
				    ${product.description}
				</p>
			</div>
			<div class="card-footer">
				<button class="btn btn-light add-to-cart" data-product-id="${product.id}">
					افزودن به سبد خرید
				</button>
			</div>
		</div>
	</div>`
    )
    .join('');

  productList.innerHTML = productsHTML;
}

function formatMoney(amount, decimalCount = 0, decimal = '.', thousands = ',') {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? '-' : '';

    let i = parseInt(
      (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
    ).toString();
    let j = i.length > 3 ? i.length % 3 : 0;

    return (
      negativeSign +
      (j ? i.substr(0, j) + thousands : '') +
      i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) +
      (decimalCount
        ? decimal +
          Math.abs(amount - i)
            .toFixed(decimalCount)
            .slice(2)
        : '')
    );
  } catch (e) {
    console.log(e);
  }
}

let products = [];
window
  .fetch('http://localhost:3000/products')
  .then(res => res.json())
  .then(result => {
    products = result;
    renderProducts(products);
  });

function renderCart(cart) {
  const cartList = document.getElementById('cart-list');

  if (cart.length === 0) {
    cartList.innerHTML = 'هیچ ایتمی در سبد خرید شما وجود ندارد.';
    return;
  }

  const cartHTML = cart
    .map(
      item =>
        `<div
				class="list-group-item d-flex justify-content-between align-items-center cart-item"
			>
				<span>${item.title}</span>
				<div>
					<button class="btn inc-quantity" data-product-id="${item.id}">+</button><span>${item.quantity}</span
					><button class="btn dec-quantity" data-product-id="${item.id}">-</button>
				</div>
			</div>`
    )
    .join('');

  cartList.innerHTML = cartHTML;
}

function addToCart(productId, products, cart) {
  const addedProduct = products.filter(product => product.id == productId)[0];

  const productInCart = cart.find(item => item.id == productId);

  if (productInCart) {
    return cart.map(item =>
      item.id == productId ? {...item, quantity: item.quantity + 1} : item
    );
  }

  return [...cart, {...addedProduct, quantity: 1}];
}

function takeFromCart(productId, cart) {
  const productInCart = cart.find(item => item.id == productId);

  if (productInCart.quantity === 1) {
    return cart.filter(item => item.id != productId);
  } else {
    return cart.map(item =>
      item.id == productId ? {...item, quantity: item.quantity - 1} : item
    );
  }
}


function filterProducts(products,brand){
  return products.filter(product => brand.includes(product.brand));
}


function presistCart(cart) {
  window.localStorage.setItem('cart', JSON.stringify(cart));
}

function rehydrateCart() {
  if (window.localStorage.getItem('cart')) {
    return JSON.parse(window.localStorage.getItem('cart'));
  } else {
    return [];
  }
}

let cart = [];
let brand = [];
cart = rehydrateCart();

renderCart(cart);

document.addEventListener('click', function (e) {
  if (e.target && e.target.classList.contains('add-to-cart')) {
    const productId = e.target.getAttribute('data-product-id');
    cart = addToCart(productId, products, cart);
    renderCart(cart);
    presistCart(cart);
  } else if (e.target && e.target.classList.contains('inc-quantity')) {
    const productId = e.target.getAttribute('data-product-id');
    cart = addToCart(productId, products, cart);
    renderCart(cart);
    presistCart(cart);
  } else if (e.target && e.target.classList.contains('dec-quantity')) {
    const productId = e.target.getAttribute('data-product-id');
    cart = takeFromCart(productId, cart);
    renderCart(cart);
    presistCart(cart);
  }
  else if (e.target && e.target.classList.contains('brand-select')){
    const currentBrand = e.target.getAttribute('data-brand-name');
    if ($(`input:checkbox[data-brand-name=${currentBrand}]`).is(':checked')) 
    {
      brand = [...brand,currentBrand];
    }
    else
    {
      for (let i = 0; i < brand.length; i++) {
        if (brand[i] == currentBrand) {
          brand.splice(i,1);
        }
      }
    }
    let filter_Products = filterProducts(products,brand);
    renderProducts(filter_Products);
    
    if(brand.length == 0){
      renderProducts(products);
    }
  }
});




  