// Product data for PDP
const products = [
  {
    id: "sony-a6400",
    title: "Sony Alpha a6400",
    brand: "Sony",
    image: "img/sony-camera.png",
    priceINR: "₹78,990",
    desc: "24.2MP Mirrorless Camera with 16-50mm Lens. Fast autofocus, 4K video, and compact design for creators.",
  },
  {
    id: "canon-1500d",
    title: "Canon EOS 1500D",
    brand: "Canon",
    image: "img/canon-camera.png",
    priceINR: "₹38,499",
    desc: "24.1MP DSLR Camera with 18-55mm Lens. Wi-Fi, NFC, and easy sharing for photography enthusiasts.",
  },
  {
    id: "samsung-s24",
    title: "Samsung Galaxy S24",
    brand: "Samsung",
    image: "img/samsung-phone.png",
    priceINR: "₹74,999",
    desc: "6.6\" Dynamic AMOLED, 128GB, 5G. Flagship performance and camera for Android lovers.",
  },
  {
    id: "iphone-15",
    title: "Apple iPhone 15",
    brand: "iPhone",
    image: "img/iphone.png",
    priceINR: "₹79,900",
    desc: "6.1\" Super Retina XDR, 128GB, 5G. The latest iPhone with advanced camera and iOS features.",
  },
  {
    id: "redmi-13pro",
    title: "Redmi Note 13 Pro",
    brand: "Redmi",
    image: "img/redmi-phone.png",
    priceINR: "₹25,999",
    desc: "6.67\" AMOLED, 256GB, 5G. Value-packed smartphone with great display and battery life.",
  },
  {
    id: "vivo-v29",
    title: "Vivo V29",
    brand: "Vivo",
    image: "img/vivo-phone.png",
    priceINR: "₹32,999",
    desc: "6.78\" AMOLED, 128GB, 5G. Stylish design and camera features for selfie lovers.",
  },
  {
    id: "oppo-reno11",
    title: "Oppo Reno 11",
    brand: "Oppo",
    image: "img/oppo-phone.png",
    priceINR: "₹29,999",
    desc: "6.7\" AMOLED, 256GB, 5G. Sleek, fast, and reliable for everyday use.",
  },
  {
    id: "jbl-760nc",
    title: "JBL Tune 760NC",
    brand: "JBL",
    image: "img/jbl-headphones.png",
    priceINR: "₹5,999",
    desc: "Wireless Over-Ear Noise Cancelling Headphones. Long battery life and deep bass sound.",
  }
];

function getProductById(id) {
  return products.find(p => p.id === id);
}

function renderPDP() {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');
  const product = getProductById(productId);
  const pdp = document.getElementById('pdp-content');
  if (!product) {
    pdp.innerHTML = `<div style="text-align:center;width:100%"><h2>Product Not Found</h2><a href='Index.html' class='navbar-btn'>Back to Home</a></div>`;
    return;
  }
  pdp.innerHTML = `
    <div class="pdp-image">
      <img src="${product.image}" alt="${product.title}">
    </div>
    <div class="pdp-info">
      <span class="pdp-brand">${product.brand}</span>
      <div class="pdp-title">${product.title}</div>
      <div class="pdp-price">${product.priceINR} <span class="currency">INR</span> / ${product.priceUSD} <span class="currency">USD</span></div>
      <div class="pdp-desc">${product.desc}</div>
      <button class="pdp-buy-btn">Add to Cart</button>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', renderPDP);
