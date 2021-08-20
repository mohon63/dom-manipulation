const div1 = document.getElementById('first');
const div2 = document.getElementById('second');
const div3 = document.getElementById('third');

const img = document.getElementById('art');

const desc = document.getElementById('desc');
const price = document.getElementById('price');

const free = document.getElementById('free');
const express = document.getElementById('express');

const shippingField = document.getElementById('shipping');
const total = document.getElementById('total');

function isContain(elem) {
    return elem.classList.contains('secleted');
}

free.addEventListener('click', function () {
    if (!isContain(free)) {
        free.classList.add('selected');
        express.classList.remove('selected');
    }
    shipping.innerText = '5';
    updateTotal();
});
express.addEventListener('click', function () {
    if (!isContain(express)) {
        free.classList.remove('selected');
        express.classList.add('selected');

    }
    shipping.innerText = '30';
    updateTotal();
});



// update total
function updateTotal() {
    const shoppingCharge = Number(shippingField.innerText);
    const productPrice = Number(price.innerText);
    console.log(productPrice);
    const grandTotal = shoppingCharge + productPrice;
    total.innerText = grandTotal;
};

div1.addEventListener('click', function () {
    if (!isContain(div1)) {
        div1.classList.add('selected');
        div2.classList.remove('selected');
        div3.classList.remove('selected');
    }
    // changing image
    img.src = 'images/1.jpg';

    // changing description
    desc.innerText = 'First- Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore obcaecati sed laboriosam veniam illum assumenda pariatur, eligendi tempore dicta. Ut explicabo incidunt facere est aperiam.';

    // changing price
    price.innerText = '650';
    updateTotal();
});

div2.addEventListener('click', function () {
    if (!isContain(div2)) {
        div1.classList.remove('selected');
        div2.classList.add('selected');
        div3.classList.remove('selected');
    }
    // changing image
    img.src = 'images/2.jpg';
    desc.innerText = 'Second- Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore obcaecati sed laboriosam veniam illum assumenda pariatur, eligendi tempore dicta. Ut explicabo incidunt facere est aperiam.';
    price.innerText = '550';
    updateTotal();
});

div3.addEventListener('click', function () {
    if (!isContain(div3)) {
        div1.classList.remove('selected');
        div2.classList.remove('selected');
        div3.classList.add('selected');
    }
    // changing image
    img.src = 'images/3.jpg';
    desc.innerText = 'Third- Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore obcaecati sed laboriosam veniam illum assumenda pariatur, eligendi tempore dicta. Ut explicabo incidunt facere est aperiam.';
    price.innerText = '330';
    updateTotal();
});

