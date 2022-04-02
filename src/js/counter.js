//lesson - https://www.youtube.com/watch?v=pIgyoL5FjgI&t


//Counter
window.addEventListener('click', (e) => {

    if(e.target.hasAttribute('data-counter')) {

        //Ищем родителя кнопки
        const parent = e.target.closest('.card');
        console.log(parent);
        
        //Ищем счетчик внутри родителя
        const counter = parent.querySelector('.counter')
        console.log(counter.innerText);

        //Суммирование по кнопке "+"
        if(e.target.dataset.counter === 'plus') {
            counter.innerText = ++counter.innerText
        }

        //Вычитание по кнопке "-"
        if(e.target.dataset.counter === 'minus') {

            if (counter.innerText > 1) {
                counter.innerText = --counter.innerText
            }
        }
    }
})



//Добавление в корзину


        //Родитель карточек в корзине
        const cartWrap = document.querySelector('.cart__items');
//Counter
window.addEventListener('click', (e) => {

    if(e.target.hasAttribute('data-add-to-cart')) {

        //Ищем родителя кнопки
        const parent = e.target.closest('.card');
        console.log(parent);
        
        //Формируем объект с информацией о товаре
        let cardInfo = {
            id: parent.id,
            imgSrc: parent.querySelector('.card__img').getAttribute('src'),
            name: parent.querySelector('.card__title').innerText,
            weight: parent.querySelector('.card__weight').innerText,
            price: parent.querySelector('.card__price').innerText,
            size: Number(parent.querySelector('.counter').innerText)
        }


     

        //Добавляем товар в корзину



        
        const itemInCart = cartWrap.querySelector(`[data-cardid="${cardInfo.id}"]`);

        //Проверяем есть ли уже товар в корзине
        if (itemInCart) {
            let counterCart = itemInCart.querySelector('[data-counter-basket]')
            counterCart.innerHTML = Number(counterCart.innerHTML) + Number(cardInfo.size)
        //Если нету добавляем
        } else {
            const cartItemHTML = document.createElement('div');
            cartItemHTML.classList.add('cart__item-body');
            cartItemHTML.innerHTML = `<div class="cart__item" data-cardid="${cardInfo.id}">
            <div class="cart__item-left">
                    <img src="${cardInfo.imgSrc}" alt="" class="cart__item-img">
                    <div class="card__item-counter--body">
                        <button data-counter-cart="minus" class="btn__counter minus__counter minus__counter-cart">-</button>
                        <div data-counter-basket class="counter counter-cart">${cardInfo.size}</div>
                        <button data-counter-cart="plus" class="btn__counter plus__counter plus__counter-cart">+</button>
                    </div>
                </div>
                <div class="cart__item-right">
                    <p class="cart__item-title">${cardInfo.name}</p>
                    <p class="cart__item-weight">${cardInfo.weight}</p>
                    <p data-price class="cart__item-price">${cardInfo.price} <span> ₴</span> </p>
                </div>
            </div>`;
        
            cartWrap.insertAdjacentElement('beforeend', cartItemHTML)
        }

        //Обнуляем счетчик в списке товаров при добавлении в корзину
        parent.querySelector('.counter').innerHTML = '1';

        cartClearToggle()
        sumTotal()
        deliveryPrice()
    }


});




//Удаление с корзины + Работа Counter в корзине
window.addEventListener('click', (e) => {
    if(e.target.hasAttribute('data-counter-cart')) {

        //Ищем родителя кнопки
        const parent = e.target.closest('.cart__item-body');
        
        //Ищем счетчик внутри родителя
        const counter = parent.querySelector('.counter-cart')

        //Суммирование по кнопке "+"
        if(e.target.dataset.counterCart === 'plus') {
            counter.innerText = ++counter.innerText
            sumTotal()
            deliveryPrice()
        }

        //Вычитание по кнопке "-"
        if(e.target.dataset.counterCart === 'minus') {

            if(counter.innerText <= 1) {
                parent.remove()
                cartClearToggle()
                sumTotal()
                deliveryPrice()
            } else {
                counter.innerText = --counter.innerText
                cartClearToggle()
                sumTotal()
                deliveryPrice()
            }


        }
    }
})



const cartClear = document.querySelector('.cart__clear');
const cartOffer = document.querySelector('.cart__offer')

//Удаление таблички о пустой корзине
function cartClearToggle() {
    if (cartWrap.children.length > 0) {
        cartClear.classList.add('none');
        cartOffer.classList.remove('none');
        console.log(cartWrap.children.length);
    } else if (cartWrap.children.length == 0) {
        cartClear.classList.remove('none')
        cartOffer.classList.add('none')
    }
}


//Вычисление суммы заказа
function sumTotal() {

    const cartWrap = document.querySelector('.cart__items');
    const cartItems = cartWrap.querySelectorAll('.cart__item');
    const totalEl = document.querySelector('[data-sum]');
    let totalPrice = 0;
    
    for(let item of cartItems) {
        const counter = item.querySelector('[data-counter-basket]').innerText;
        const price = item.querySelector('[data-price]').innerText;

        let sum = (parseInt(counter) * parseInt(price));
        totalPrice += sum;
    }

    totalEl.innerText = totalPrice;
    
}


//Цена доставки
function deliveryPrice() {
    const DeliveryEl = document.querySelector('[data-delivery]');

    if ( parseInt(document.querySelector('[data-sum]').innerHTML) > 600) {
        DeliveryEl.innerHTML = 'безкоштовно';
        DeliveryEl.classList.add('green')
        console.log('work');
    } else {
        DeliveryEl.innerHTML = '250 ₴';
        DeliveryEl.classList.remove('green')
    }
}


//Скролл продуктов в корзине


