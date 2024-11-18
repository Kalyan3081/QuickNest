// Selecting required elements
const wrapper = document.querySelector('.sliderwrapper');
const menuitems = document.querySelectorAll('.menuitem');
const form = document.querySelector('.productForm');
const currentProductImg = document.querySelector('.productImg');
const currentProductTitle = document.querySelector('.productTitle');
const currentproductPrice = document.querySelector('.productPrice');
const currentproductcolors = document.querySelectorAll('.color');
const currentproductsizes = document.querySelectorAll('.size');
const paynow = document.querySelector('.productBtn');
const close = document.querySelector('.close');
const payment = document.querySelector('.payment');
const payButton = document.querySelector('.payButton');

// Products data
const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "./images/air.png",
            },
            {
                code: "darkblue",
                img: "./images/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors: [
            {
                code: "lightgray",
                img: "./images/jordan.png",
            },
            {
                code: "green",
                img: "./images/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
            {
                code: "lightgray",
                img: "./images/blazer.png",
            },
            {
                code: "green",
                img: "./images/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
            {
                code: "black",
                img: "./images/crater.png",
            },
            {
                code: "lightgray",
                img: "./images/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
            {
                code: "gray",
                img: "./images/hippie.png",
            },
            {
                code: "black",
                img: "./images/hippie2.png",
            },
        ],
    },
];

let choosenProduct = products[0];

// Handle menu item click to update product details
menuitems.forEach((item, index) => {
    item.addEventListener("click", () => {
        // Change slide position
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        // Update selected product
        choosenProduct = products[index];

        // Update product details
        currentProductTitle.textContent = choosenProduct.title;
        currentproductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        // Update colors for the chosen product
        currentproductcolors.forEach((color, idx) => {
            color.style.backgroundColor = choosenProduct.colors[idx]?.code || "transparent";
        });
    });
});

// Change product image on color selection
currentproductcolors.forEach((color, index) => {
    color.addEventListener('click', () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

// Highlight selected size
currentproductsizes.forEach((size) => {
    size.addEventListener('click', () => {
        currentproductsizes.forEach((s) => {
            s.style.backgroundColor = ''; // Reset background color
            s.style.color = ''; // Reset text color
        });
        size.style.backgroundColor = 'black'; // Highlight selected size
        size.style.color = 'white';
    });
});

// Open payment form on "Buy Now" button click
paynow.addEventListener('click', () => {
    payment.style.display = 'flex';
});

// Close payment form on 'X' button click
close.addEventListener('click', () => {
    payment.style.display = 'none';
});

// Submit payment form and show success alert
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission
    payment.style.display = 'none'; // Hide payment form
    alert('Order successfully placed!'); // Show success alert
});
