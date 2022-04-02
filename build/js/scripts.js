// Custom Scripts
let productsArray = [
    {
        id: '01',
        imgSrc: 'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%A2%D0%B5%D0%BC%D0%BF%D1%83%D1%80%D0%B0%20%D1%80%D0%BE%D0%BB%D0%BB%D1%8B/31622CA1-209B-11EC-90EC-D3BEEA5A2D72-%D0%A2%D0%B5%D0%BC%D0%BF%D1%83%D1%80%D0%B0-%D1%80%D0%BE%D0%BB-8-%D1%88%D1%82.png?alt=media&token=8cc127dd-6439-40a1-8294-804da6a39477&w=800&format=webp&mode=fit&q=70',
        title: 'ТЕМПУРА РОЛЛ',
        weight: '215',
        price: 114,
        isRoll: true
    },
    {
        id: '02',
        imgSrc: 'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%A2%D0%B5%D0%BC%D0%BF%D1%83%D1%80%D0%B0%20%D1%80%D0%BE%D0%BB%D0%BB%D1%8B/4AF8E0C1-DD87-11EB-9DA7-1D2CA83AD032-%D0%9E%D1%83%D1%88%D0%B5%D0%BD%20%D0%A2%D0%B5%D0%BC%D0%BF%D1%83%D1%80%D0%B0.png?alt=media&token=606f97bc-4dc9-41aa-96ca-a9018fcdacbb&w=800&format=webp&mode=fit&q=70',
        title: 'ОУШЕН ТЕМПУРА',
        weight: '215',
        price: 134,
        isRoll: true
    },
    {
        id: '03',
        imgSrc: 'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%A2%D0%B5%D0%BC%D0%BF%D1%83%D1%80%D0%B0%20%D1%80%D0%BE%D0%BB%D0%BB%D1%8B/D8ED6D81-005D-11EC-AF41-FDD4AA4B8801-%D0%9A%D0%B0%D0%BB%D1%96%D1%84%D0%BE%D1%80%D0%BD%D1%96%D1%8F%20%D1%82%D0%B5%D0%BC%D0%BF%D1%83%D1%80%D0%B0.png?alt=media&token=07ae65a2-852a-4197-8c97-25d34b57cf24&w=800&format=webp&mode=fit&q=70',
        title: 'КАЛИФОРНИЯ ТЕМПУРА',
        weight: '220',
        price: 124,
        isRoll: true
    },
    {
        id: '04',
        imgSrc: 'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%97%D0%B0%D0%BF%D0%B5%D1%87%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5%20%D1%80%D0%BE%D0%BB%D0%BB%D1%8B/6CBDE8B1-F694-11EB-9FCA-53A60B80F763-%D0%A5%D0%B0%D0%BC%D0%B0%D0%BD%D1%96%D1%88%D1%96.png?alt=media&token=05b2aa0d-1cfa-475c-a12d-fc4b9abc2800&w=800&format=webp&mode=fit&q=70',
        title: 'ХАМАНИШИ',
        weight: '200',
        price: 169,
        isRoll: true
    },
    {
        id: '05',
        imgSrc: 'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%9A%D0%B0%D0%BB%D0%B8%D1%84%D0%BE%D1%80%D0%BD%D0%B8%D0%B8/7ED952D1-F443-11EB-A32A-892A7C913AF6-%D0%9A%D0%B0%D0%BB%D1%96%D1%84%D0%BE%D1%80%D0%BD%D1%96%D1%8F%20%D0%B7%20%D0%BB%D0%BE%D1%81%D0%BE%D1%81%D0%B5%D0%BC%20%D0%B2%20%D1%96%D0%BA%D1%80%D1%96.png?alt=media&token=02460b14-238b-4190-ac10-72335cee3c5d&w=800&format=webp&mode=fit&q=70',
        title: 'КАЛИФОРНИЯ С ЛОСОСЕМ В ИКРЕ',
        weight: '195',
        price: 159,
        isRoll: true
    },
    {
        id: '06',
        imgSrc: 'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%9A%D0%B0%D0%BB%D0%B8%D1%84%D0%BE%D1%80%D0%BD%D0%B8%D0%B8/4F70AD01-F690-11EB-9626-911F95B7A101-%D0%9A%D0%B0%D0%BB%D1%96%D1%84%D0%BE%D1%80%D0%BD%D0%B2%D1%8F%20%D0%B7%20%D1%85%D1%96%D1%8F%D1%88%D0%B8.png?alt=media&token=6de78416-1c54-4aad-bef5-a509c03cc81a&w=800&format=webp&mode=fit&q=70',
        title: 'КАЛИФОРНИЯ С ХИЯШИ',
        weight: '190',
        price: 119,
        isRoll: true
    },
    {
        id: '07',
        imgSrc: 'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%97%D0%B0%D0%BF%D0%B5%D1%87%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5%20%D1%80%D0%BE%D0%BB%D0%BB%D1%8B/C5249B51-005A-11EC-9E2E-DFD927F85AC4-%D0%A4%D1%83%D0%B4%D0%B6%D1%96.png?alt=media&token=7b92dcdd-4d4e-4abb-8d5c-15090a5b0a7c&w=800&format=webp&mode=fit&q=70',
        title: 'ФУДЖИ',
        weight: '220',
        price: 169,
        isRoll: true
    },
    {
        id: '08',
        imgSrc: 'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%97%D0%B0%D0%BF%D0%B5%D1%87%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5%20%D1%80%D0%BE%D0%BB%D0%BB%D1%8B/5C0BCD31-0025-11EC-92FC-29FFFBA774A0-%D0%9D%D1%96%D0%B6%D0%BD%D0%B8%D0%B8%CC%86.png?alt=media&token=cf5446dc-38e3-4c61-b020-2671debe5e43&w=800&format=webp&mode=fit&q=70',
        title: 'НЕЖНЫЙ С КУРИЦЕЙ',
        weight: '235',
        price: 114,
        isRoll: true
    },
    {
        id: '09',
        imgSrc: 'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%97%D0%B0%D0%BF%D0%B5%D1%87%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5%20%D1%80%D0%BE%D0%BB%D0%BB%D1%8B/F878DD91-005A-11EC-9E2E-DFD927F85AC4-%D0%9E%D0%BA%D1%96%D0%BD%D0%B0%D0%B2%D0%B0.png?alt=media&token=4e86e9a8-a9dd-4992-8355-25d9e1636f9f&w=800&format=webp&mode=fit&q=70',
        title: 'ОКИНАВА',
        weight: '194 ',
        price: 250,
        isRoll: true
    },
    {
        id: '10',
        imgSrc: 'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%97%D0%B0%D0%BF%D0%B5%D1%87%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5%20%D1%80%D0%BE%D0%BB%D0%BB%D1%8B/4EDF96F1-005C-11EC-BD72-C58750A2CB94-%D0%9D%D1%96%D0%B6%D0%BD%D0%B8%D0%B8%CC%86.png?alt=media&token=fcc1015f-2bf2-460b-8cf4-9da361141611&w=800&format=webp&mode=fit&q=70',
        title: 'НЕЖНЫЙ С СЫРОМ',
        weight: '215',
        price: 114,
        isRoll: true
    },
    {
        id: '11',
        imgSrc: 'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%A4%D0%B8%D0%BB%D0%B0%D0%B4%D0%B5%D0%BB%D1%8C%D1%84%D0%B8%D0%B8/DD36A561-005C-11EC-BD72-C58750A2CB94-%D0%A4%D1%96%D0%BB%D0%B0%D0%B4%D0%B5%D0%BB%D1%8C%D1%84%D1%96%D1%8F%20De-Lux.png?alt=media&token=47d77016-8cf0-4ef8-8636-a5555c3cd919&w=800&format=webp&mode=fit&q=70',
        title: 'ФИЛАДЕЛЬФИЯ DE-LUX КОПЧЕНЫЙ',
        weight: '215',
        price: 209,
        isRoll: true
    },
    {
        id: '12',
        imgSrc: 'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%A0%D0%BE%D0%BB%D0%B8/0FB0B441-005D-11EC-B8A2-074CAECE6DA1-%D0%A4%D1%83%D1%82%D0%BE%D0%BC%D0%B0%D0%BA%D1%96%20%D0%B7%20%D0%BB%D0%BE%D1%81%D0%BE%D1%81%D0%B5%D0%BC.png?alt=media&token=0202834f-f99d-434f-9ca6-0a3171c440a3&w=800&format=webp&mode=fit&q=70',
        title: 'ФУТОМАКИ С ЛОСОСЕМ',
        weight: '205',
        price: 144,
        isRoll: true
    },
    {
        id: '13',
        imgSrc: 'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%A1%D0%B5%D1%82%D0%B8/717703E1-B0E4-11EC-AA10-E19CF46FED24-1969%D1%851100-%D0%A1%D0%B5%D1%82-%D0%97%D0%A1%D0%A3.png?alt=media&token=772590d9-7f26-4b5e-9b89-fb660933d489&w=800&format=webp&mode=fit&q=70',
        title: 'СЕТ ЗСУ',
        weight: '1020',
        price: 530,
        isSet: true
    },
    {
        id: '14',
        imgSrc: 'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%A1%D0%B5%D1%82%D0%B8/53212DE1-908B-11EC-930E-A758E8F50569-1969%D1%851100%20%D0%A1%D0%B5%D1%82%20XXL.png?alt=media&token=5af9d7eb-c197-4afb-af17-04842c3a7a50&w=800&format=webp&mode=fit&q=70',
        title: 'СЕТ XXL',
        weight: '1200',
        price: 1090,
        isSet: true
    },
    {
        id: '15',
        imgSrc: 'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%A1%D0%B5%D1%82%D0%B8/523AF770-19F9-11EC-918D-C71D40A50D30-Set%20Jet_polosa_transparent%20back_1969%D1%851100_1.png?alt=media&token=04600e87-2919-43ff-bba0-815bc9e2ca55&w=800&format=webp&mode=fit&q=70',
        title: 'СЕТ ДЖЕТ',
        weight: '1000',
        price: 549,
        isSet: true
    },
    {
        id: '16',
        imgSrc: 'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%A1%D0%B5%D1%82%D0%B8/219B2671-7DC8-11EC-9172-EBE920337172-1969%D1%851100%20%D0%A1%D0%B5%D1%82%20%D0%98%D0%B3%D1%80%D0%B0%20%D0%B2%20%D0%BA%D1%80%D0%B5%D0%B2%D0%B5%D1%82%D0%BA%D1%83.png?alt=media&token=694193ba-0e76-4f24-a53d-11d40ddcad0d&w=800&format=webp&mode=fit&q=70',
        title: 'СЕТ ИГРА В КРЕВЕТКУ',
        weight: '655',
        price: 429,
        isSet: true
    },
    {
        id: '17',
        imgSrc: 'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%A1%D0%B5%D1%82%D0%B8/361B4C11-2094-11EC-B1AA-15534DD3993E-%D0%A1%D0%B5%D1%82-%D0%A2%D0%B5%D0%BF%D0%BB%D0%B8%D0%B9.png?alt=media&token=493bd745-4e97-490d-9f36-42ebc7255111&w=800&format=webp&mode=fit&q=70',
        title: 'СЕТ ТЕПЛЫЙ',
        weight: '885',
        price: 499,
        isSet: true
    },
    {
        id: '18',
        imgSrc: 'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%A1%D0%B5%D1%82%D0%B8/76009A01-3B0C-11EC-B744-439CB42A6AD3-%D0%A1%D0%B5%D1%82-%D0%9C%D0%B5%D0%B3%D0%B0-%D0%A5%D1%96%D1%82.png?alt=media&token=f29b7a2d-ad60-4167-964d-cb9e9a54c656&w=800&format=webp&mode=fit&q=70',
        title: 'СЕТ МЕГА ХИТ',
        weight: '983',
        price: 590,
        isSet: true
    },
    {
        id: '19',
        imgSrc: 'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%A1%D0%B5%D1%82%D0%B8/02478421-2095-11EC-BA07-35C5A932614A-%D0%A1%D0%B5%D1%82-5-%D0%A5%D1%96%D1%82%D1%96%D0%B2.png?alt=media&token=22c7174c-7a63-44f9-8889-2002e55545d3&w=800&format=webp&mode=fit&q=70',
        title: 'СЕТ 5 ХИТОВ',
        weight: '865',
        price: 549,
        isSet: true
    },
    {
        id: '20',
        imgSrc: 'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%A1%D0%B5%D1%82%D0%B8/9633C151-2548-11EC-838F-9F03E99E9AAD-%D0%A1%D0%B5%D1%82-%D0%A2%D0%B5%D0%BF%D0%BB%D0%B8%D0%B9-MIX.png?alt=media&token=ca031773-8cf1-4d7d-9990-5fef7d707340&w=800&format=webp&mode=fit&q=70',
        title: 'СЕТ ТЕПЛЫЙ МИКС',
        weight: '1345',
        price: 1100,
        isSet: true
    },
]




let cardsWrap = document.querySelector('.cards');
let sortedArray = [];

renderCards(productsArray)

function renderCards(array) {


    for (let item of array) {
        let productCard = document.createElement('div')
        item.title = item.title[0] + item.title.slice(1).toLocaleLowerCase();
        productCard.classList.add('card')
        productCard.setAttribute('id', item.id)
        if (item.isSet === true) {
            productCard.setAttribute('isSet', item.isSet)
        }

        productCard.innerHTML = `
                <img src="${item.imgSrc}" alt="" class="card__img">
                <p class="card__title">${item.title}</p>
                <div class="card__weight-body">
                <p class="card__weight">${item.weight} </p> <span class="card__weight">г<span> 
                </div>
                <div class="card__item">
                    <div class="card__item-left">
                        <div class="card__item-counter--body">
                            <button data-counter="minus" class="btn__counter minus__counter">-</button>
                            <div class="counter">1</div>
                            <button  data-counter="plus" class="btn__counter plus__counter">+</button>
                        </div>
                        <span class="card__price">${item.price} </span> <span class="card__price"> ₴</span>
                    </div>

                    <button data-add-to-cart class="card__btn">В КОРЗИНУ</button>
                </div>
        `
        cardsWrap.appendChild(productCard)
    }
}



function sortByMinPrice(arr) {
    sortedArray = arr.sort((a, b) => a.price > b.price ? 1 : -1)
}
function sortByMaxPrice(arr) {
    arr = arr.sort((a, b) => a.price < b.price ? 1 : -1)
}
function sortByMinWeight(arr) {
    sortedArray = arr.sort((a, b) => a.weight > b.weight ? 1 : -1)
}
function sortByMaxWeight(arr) {
    arr = arr.sort((a, b) => a.weight < b.weight ? 1 : -1)
}
function deleteOldArrayElements () {
    document.querySelectorAll('.card').forEach(element => element.remove())
}
 


//Получаем данные с карточек товаров в массив arr, используем массив дальше для сортировки
function gettingItemsFromPage () {
        let arr = []
    
        cardsWrap.querySelectorAll('.card').forEach((item) => {
           let cardInfoObject = 
                {
                    id: item.getAttribute('id'),
                    imgSrc: item.querySelector('.card__img').getAttribute('src'),
                    title: item.querySelector('.card__title').innerHTML,
                    weight: parseInt(item.querySelector('.card__weight').innerHTML),
                    price: parseInt(item.querySelector('.card__price').innerHTML),
                    isSet: item.getAttribute('isset')
                }
            arr.push(cardInfoObject)
        })
        return arr;
    }


//Показать роллы по категориям
window.addEventListener('click', (e) => {
    let newArray;

    if (e.target.dataset.show === 'all') {
        deleteOldArrayElements ()
        renderCards(productsArray)
    } else if (e.target.dataset.show === 'sets') {
        newArray = productsArray.filter((item => item.isSet === true))
        deleteOldArrayElements ()
        renderCards(newArray)
    } else if (e.target.dataset.show === 'rolls') {
        newArray = productsArray.filter((item => item.isRoll === true))
        deleteOldArrayElements ()
        renderCards(newArray)
    }
})



//Сортировка 
window.addEventListener('click', (e) => {
    let arrayBeforeSorted = gettingItemsFromPage ();
    let sortPriceArrowEl = document.querySelector('#sorting-by-price-icon');
    let sortWeightArrowEl = document.querySelector('#sorting-by-weight-icon');

    if (e.target.dataset.sortingPrice === 'true') {
        e.target.dataset.sortingPrice = 'false'
        deleteOldArrayElements ()
        sortByMaxPrice(arrayBeforeSorted)
        renderCards(arrayBeforeSorted)
        sortPriceArrowEl.classList.add('active')

    } else if (e.target.dataset.sortingPrice === 'false') {
        e.target.dataset.sortingPrice = 'true'
        deleteOldArrayElements ()
        sortByMinPrice(arrayBeforeSorted)
        renderCards(arrayBeforeSorted)
        sortPriceArrowEl.classList.remove('active')
    }


    if (e.target.dataset.sortingWeight === 'true') {
        e.target.dataset.sortingWeight = 'false'
        deleteOldArrayElements ()
        sortByMaxWeight(arrayBeforeSorted)
        renderCards(arrayBeforeSorted)
        sortWeightArrowEl.classList.add('active')

    } else if (e.target.dataset.sortingWeight === 'false') {
        e.target.dataset.sortingWeight = 'true'
        deleteOldArrayElements ()
        sortByMinWeight(arrayBeforeSorted)
        renderCards(arrayBeforeSorted)
        sortPriceArrowEl.classList.remove('active')
    }
})
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



const regBtn = document.querySelector('.btn__login'),
      regModalBody = document.querySelector('.reg__body'),
      uploadBtn = document.querySelector('.reg__form-btn-upload'),
      sendFormBtn = document.querySelector('.reg__form-btn'),
      nameInput = document.querySelector('.reg__login'),
      passInput = document.querySelector('[data-password]'),
      passInputRepeat = document.querySelector('[data-password-repeat]'),
      uploadInput = document.querySelector('.reg__form-file'),
      helloUserEl = document.querySelector('.hello__user');

let imgSrc;
let gotUserName;
let gotUserPass;
let validationStatus;

// let inputsForm = regModalBody.querySelectorAll('input');


uploadBtn.addEventListener('click', (e) => {
    e.preventDefault()
    uploadInput.click()
    getImgSrc ()

})
sendFormBtn.addEventListener('click', (e) => {
    e.preventDefault()
    getInfosAboutUser()
    
    
    validationForForm() 

    if (validationStatus === true) {
        closeRegModal()
        showUserInfo()
    }
})

regBtn.addEventListener('click', () => {
    openRegModal ()
})

window.addEventListener('click', (e) => {
    if(e.target === regModalBody) {
        closeRegModal()
    }
})


//Функции 

function validationForForm() {

    if (nameInput.value === '' || passInput.value === '' || passInput.value.length < 8 || passInput.value != passInputRepeat.value || imgSrc === undefined) {
        validationStatus = false
    } else {
        validationStatus = true
    }

    if (nameInput.value === '' ) {
        alert('Введите имя') 
    }
    
    if (passInput.value === '' || passInput.value.length < 8) {
        alert('Пароль должен включать минимум 8 символов')
    } 

    if (passInput.value != passInputRepeat.value) {
        alert('Пароли должны совпадать')
    } 

    if (imgSrc === undefined) {
        alert("Выберите аватар")
    } 

    if (validationStatus === true) {
        sendFormBtn.classList.remove('disable')
    }

    console.log(validationStatus);
}

function getImgSrc () {
    uploadInput.addEventListener('change', () => {
        const file = uploadInput.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
       
        reader.onload = function () {
            imgSrc = reader.result;
            let imgPreload = document.createElement('img')
            imgPreload.src = imgSrc
            let imgPreloadBodyEl = document.querySelector('.reg__form-preload')
            imgPreloadBodyEl.innerHTML = ''
            imgPreloadBodyEl.appendChild(imgPreload)
        }
    })
}
function getInfosAboutUser() {
    gotUserName = nameInput.value
    gotUserPass = passInputRepeat.value
}

function showUserInfo() {
    helloUserEl.style.display = 'flex'
    regBtn.style.display = 'none';

    let userImg = helloUserEl.querySelector('.hello__user-img')
    let userName = helloUserEl.querySelector('[data-user-name]')



    userImg.src = imgSrc;
    userName.innerHTML = gotUserName;


}

function openRegModal () {
    regModalBody.style.display = 'flex'
    document.body.classList.add('hidden')
}

function closeRegModal () {
    regModalBody.style.display = 'none'
    document.body.classList.remove('hidden')
}

