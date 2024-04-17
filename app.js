const wrapper = document.querySelector('.sliderwrapper')
const menuitems = document.querySelectorAll('.menuitem')

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

const currentProductImg = document.querySelector('.productImg')
const currentProductTitle = document.querySelector('.productTitle')
const currentproductPrice = document.querySelector('.productPrice')
const currentproductDesc = document.querySelector('.productDesc')
const currentproductcolors = document.querySelectorAll('.color')
const currentproductsizes = document.querySelectorAll('.size')


menuitems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //selection of particular slide.
        wrapper.style.transform = `translateX(${-100 * index}vw)`

        //change to the choosen product.
        choosenProduct = products[index]

        //change the product details as per selection.
        currentProductTitle.textContent = choosenProduct.title
        currentproductPrice.textContent = "$" + choosenProduct.price
        currentProductImg.src = choosenProduct.colors[0].img

        //assign the color for diff choosen colors
        currentproductcolors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;

        })
    })
})
currentproductcolors.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentProductImg.src = choosenProduct.colors[index].img

    })
})

currentproductsizes.forEach((size, index) => {
    size.addEventListener('click', () => {
        currentproductsizes.forEach((size) => {
            size.style.backgroundColor = ''; // Revert to original background color
            size.style.color = ''; // Revert to original text color
        })
        // Element is not selected, apply new properties
        size.style.backgroundColor = 'black'; // Change background color to black
        size.style.color = 'white'; // Change text color to white

    });
});

const paynow = document.querySelector('.productBtn')
const close = document.querySelector('.close')
const payment = document.querySelector('.payment')

paynow.addEventListener('click', () => {
    payment.style.display = 'flex'
})
close.addEventListener('click', () => {
    payment.style.display = 'none'
})
