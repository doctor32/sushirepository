let productsArray = [
    {
        id: '01',
        imgSrc: 'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%A2%D0%B5%D0%BC%D0%BF%D1%83%D1%80%D0%B0%20%D1%80%D0%BE%D0%BB%D0%BB%D1%8B/31622CA1-209B-11EC-90EC-D3BEEA5A2D72-%D0%A2%D0%B5%D0%BC%D0%BF%D1%83%D1%80%D0%B0-%D1%80%D0%BE%D0%BB-8-%D1%88%D1%82.png?alt=media&token=8cc127dd-6439-40a1-8294-804da6a39477&w=800&format=webp&mode=fit&q=70',
        title: 'ТЕМПУРА РОЛЛ',
        weight: 215,
        price: 114,
        isRoll: true
    },
    {
        id: '02',
        imgSrc: 'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%A2%D0%B5%D0%BC%D0%BF%D1%83%D1%80%D0%B0%20%D1%80%D0%BE%D0%BB%D0%BB%D1%8B/4AF8E0C1-DD87-11EB-9DA7-1D2CA83AD032-%D0%9E%D1%83%D1%88%D0%B5%D0%BD%20%D0%A2%D0%B5%D0%BC%D0%BF%D1%83%D1%80%D0%B0.png?alt=media&token=606f97bc-4dc9-41aa-96ca-a9018fcdacbb&w=800&format=webp&mode=fit&q=70',
        title: 'ОУШЕН ТЕМПУРА',
        weight: 215,
        price: 134,
        isRoll: true
    },
    {
        id: '03',
        imgSrc: 'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%A2%D0%B5%D0%BC%D0%BF%D1%83%D1%80%D0%B0%20%D1%80%D0%BE%D0%BB%D0%BB%D1%8B/D8ED6D81-005D-11EC-AF41-FDD4AA4B8801-%D0%9A%D0%B0%D0%BB%D1%96%D1%84%D0%BE%D1%80%D0%BD%D1%96%D1%8F%20%D1%82%D0%B5%D0%BC%D0%BF%D1%83%D1%80%D0%B0.png?alt=media&token=07ae65a2-852a-4197-8c97-25d34b57cf24&w=800&format=webp&mode=fit&q=70',
        title: 'КАЛИФОРНИЯ ТЕМПУРА',
        weight: 220,
        price: 124,
        isRoll: true
    },
    {
        id: '04',
        imgSrc: 'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%97%D0%B0%D0%BF%D0%B5%D1%87%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5%20%D1%80%D0%BE%D0%BB%D0%BB%D1%8B/6CBDE8B1-F694-11EB-9FCA-53A60B80F763-%D0%A5%D0%B0%D0%BC%D0%B0%D0%BD%D1%96%D1%88%D1%96.png?alt=media&token=05b2aa0d-1cfa-475c-a12d-fc4b9abc2800&w=800&format=webp&mode=fit&q=70',
        title: 'ХАМАНИШИ',
        weight: 200,
        price: 169,
        isRoll: true
    },
    {
        id: '05',
        imgSrc: 'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%9A%D0%B0%D0%BB%D0%B8%D1%84%D0%BE%D1%80%D0%BD%D0%B8%D0%B8/7ED952D1-F443-11EB-A32A-892A7C913AF6-%D0%9A%D0%B0%D0%BB%D1%96%D1%84%D0%BE%D1%80%D0%BD%D1%96%D1%8F%20%D0%B7%20%D0%BB%D0%BE%D1%81%D0%BE%D1%81%D0%B5%D0%BC%20%D0%B2%20%D1%96%D0%BA%D1%80%D1%96.png?alt=media&token=02460b14-238b-4190-ac10-72335cee3c5d&w=800&format=webp&mode=fit&q=70',
        title: 'КАЛИФОРНИЯ С ЛОСОСЕМ В ИКРЕ',
        weight: 195,
        price: 159,
        isRoll: true
    },
    {
        id: '06',
        imgSrc: 'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%9A%D0%B0%D0%BB%D0%B8%D1%84%D0%BE%D1%80%D0%BD%D0%B8%D0%B8/4F70AD01-F690-11EB-9626-911F95B7A101-%D0%9A%D0%B0%D0%BB%D1%96%D1%84%D0%BE%D1%80%D0%BD%D0%B2%D1%8F%20%D0%B7%20%D1%85%D1%96%D1%8F%D1%88%D0%B8.png?alt=media&token=6de78416-1c54-4aad-bef5-a509c03cc81a&w=800&format=webp&mode=fit&q=70',
        title: 'КАЛИФОРНИЯ С ХИЯШИ',
        weight: 190,
        price: 119,
        isRoll: true
    },
    {
        id: '07',
        imgSrc: 'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%97%D0%B0%D0%BF%D0%B5%D1%87%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5%20%D1%80%D0%BE%D0%BB%D0%BB%D1%8B/C5249B51-005A-11EC-9E2E-DFD927F85AC4-%D0%A4%D1%83%D0%B4%D0%B6%D1%96.png?alt=media&token=7b92dcdd-4d4e-4abb-8d5c-15090a5b0a7c&w=800&format=webp&mode=fit&q=70',
        title: 'ФУДЖИ',
        weight: 220,
        price: 169,
        isRoll: true
    },
    {
        id: '08',
        imgSrc: 'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%97%D0%B0%D0%BF%D0%B5%D1%87%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5%20%D1%80%D0%BE%D0%BB%D0%BB%D1%8B/5C0BCD31-0025-11EC-92FC-29FFFBA774A0-%D0%9D%D1%96%D0%B6%D0%BD%D0%B8%D0%B8%CC%86.png?alt=media&token=cf5446dc-38e3-4c61-b020-2671debe5e43&w=800&format=webp&mode=fit&q=70',
        title: 'НЕЖНЫЙ С КУРИЦЕЙ',
        weight: 235,
        price: 114,
        isRoll: true
    },
    {
        id: '09',
        imgSrc: 'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%97%D0%B0%D0%BF%D0%B5%D1%87%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5%20%D1%80%D0%BE%D0%BB%D0%BB%D1%8B/F878DD91-005A-11EC-9E2E-DFD927F85AC4-%D0%9E%D0%BA%D1%96%D0%BD%D0%B0%D0%B2%D0%B0.png?alt=media&token=4e86e9a8-a9dd-4992-8355-25d9e1636f9f&w=800&format=webp&mode=fit&q=70',
        title: 'ОКИНАВА',
        weight: 194,
        price: 250,
        isRoll: true
    },
    {
        id: '10',
        imgSrc: 'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%97%D0%B0%D0%BF%D0%B5%D1%87%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5%20%D1%80%D0%BE%D0%BB%D0%BB%D1%8B/4EDF96F1-005C-11EC-BD72-C58750A2CB94-%D0%9D%D1%96%D0%B6%D0%BD%D0%B8%D0%B8%CC%86.png?alt=media&token=fcc1015f-2bf2-460b-8cf4-9da361141611&w=800&format=webp&mode=fit&q=70',
        title: 'НЕЖНЫЙ С СЫРОМ',
        weight: 215,
        price: 114,
        isRoll: true
    },
    {
        id: '11',
        imgSrc: 'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%A4%D0%B8%D0%BB%D0%B0%D0%B4%D0%B5%D0%BB%D1%8C%D1%84%D0%B8%D0%B8/DD36A561-005C-11EC-BD72-C58750A2CB94-%D0%A4%D1%96%D0%BB%D0%B0%D0%B4%D0%B5%D0%BB%D1%8C%D1%84%D1%96%D1%8F%20De-Lux.png?alt=media&token=47d77016-8cf0-4ef8-8636-a5555c3cd919&w=800&format=webp&mode=fit&q=70',
        title: 'ФИЛАДЕЛЬФИЯ DE-LUX КОПЧЕНЫЙ',
        weight: 215,
        price: 209,
        isRoll: true
    },
    {
        id: '12',
        imgSrc: 'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%A0%D0%BE%D0%BB%D0%B8/0FB0B441-005D-11EC-B8A2-074CAECE6DA1-%D0%A4%D1%83%D1%82%D0%BE%D0%BC%D0%B0%D0%BA%D1%96%20%D0%B7%20%D0%BB%D0%BE%D1%81%D0%BE%D1%81%D0%B5%D0%BC.png?alt=media&token=0202834f-f99d-434f-9ca6-0a3171c440a3&w=800&format=webp&mode=fit&q=70',
        title: 'ФУТОМАКИ С ЛОСОСЕМ',
        weight: 205,
        price: 144,
        isRoll: true
    },
    {
        id: '13',
        imgSrc: 'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%A1%D0%B5%D1%82%D0%B8/717703E1-B0E4-11EC-AA10-E19CF46FED24-1969%D1%851100-%D0%A1%D0%B5%D1%82-%D0%97%D0%A1%D0%A3.png?alt=media&token=772590d9-7f26-4b5e-9b89-fb660933d489&w=800&format=webp&mode=fit&q=70',
        title: 'СЕТ ЗСУ',
        weight: 1020,
        price: 530,
        isSet: true
    },
    {
        id: '14',
        imgSrc: 'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%A1%D0%B5%D1%82%D0%B8/53212DE1-908B-11EC-930E-A758E8F50569-1969%D1%851100%20%D0%A1%D0%B5%D1%82%20XXL.png?alt=media&token=5af9d7eb-c197-4afb-af17-04842c3a7a50&w=800&format=webp&mode=fit&q=70',
        title: 'СЕТ XXL',
        weight: 1200,
        price: 1090,
        isSet: true
    },
    {
        id: '15',
        imgSrc: 'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%A1%D0%B5%D1%82%D0%B8/523AF770-19F9-11EC-918D-C71D40A50D30-Set%20Jet_polosa_transparent%20back_1969%D1%851100_1.png?alt=media&token=04600e87-2919-43ff-bba0-815bc9e2ca55&w=800&format=webp&mode=fit&q=70',
        title: 'СЕТ ДЖЕТ',
        weight: 1000,
        price: 549,
        isSet: true
    },
    {
        id: '16',
        imgSrc: 'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%A1%D0%B5%D1%82%D0%B8/219B2671-7DC8-11EC-9172-EBE920337172-1969%D1%851100%20%D0%A1%D0%B5%D1%82%20%D0%98%D0%B3%D1%80%D0%B0%20%D0%B2%20%D0%BA%D1%80%D0%B5%D0%B2%D0%B5%D1%82%D0%BA%D1%83.png?alt=media&token=694193ba-0e76-4f24-a53d-11d40ddcad0d&w=800&format=webp&mode=fit&q=70',
        title: 'СЕТ ИГРА В КРЕВЕТКУ',
        weight: 655,
        price: 429,
        isSet: true
    },
    {
        id: '17',
        imgSrc: 'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%A1%D0%B5%D1%82%D0%B8/361B4C11-2094-11EC-B1AA-15534DD3993E-%D0%A1%D0%B5%D1%82-%D0%A2%D0%B5%D0%BF%D0%BB%D0%B8%D0%B9.png?alt=media&token=493bd745-4e97-490d-9f36-42ebc7255111&w=800&format=webp&mode=fit&q=70',
        title: 'СЕТ ТЕПЛЫЙ',
        weight: 885,
        price: 499,
        isSet: true
    },
    {
        id: '18',
        imgSrc: 'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%A1%D0%B5%D1%82%D0%B8/76009A01-3B0C-11EC-B744-439CB42A6AD3-%D0%A1%D0%B5%D1%82-%D0%9C%D0%B5%D0%B3%D0%B0-%D0%A5%D1%96%D1%82.png?alt=media&token=f29b7a2d-ad60-4167-964d-cb9e9a54c656&w=800&format=webp&mode=fit&q=70',
        title: 'СЕТ МЕГА ХИТ',
        weight: 983,
        price: 590,
        isSet: true
    },
    {
        id: '19',
        imgSrc: 'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%A1%D0%B5%D1%82%D0%B8/02478421-2095-11EC-BA07-35C5A932614A-%D0%A1%D0%B5%D1%82-5-%D0%A5%D1%96%D1%82%D1%96%D0%B2.png?alt=media&token=22c7174c-7a63-44f9-8889-2002e55545d3&w=800&format=webp&mode=fit&q=70',
        title: 'СЕТ 5 ХИТОВ',
        weight: 865,
        price: 549,
        isSet: true
    },
    {
        id: '20',
        imgSrc: 'https://x100-venus-sm-ua.gumlet.io/SKU/SUSHI-MASTER/%D0%A1%D0%B5%D1%82%D0%B8/9633C151-2548-11EC-838F-9F03E99E9AAD-%D0%A1%D0%B5%D1%82-%D0%A2%D0%B5%D0%BF%D0%BB%D0%B8%D0%B9-MIX.png?alt=media&token=ca031773-8cf1-4d7d-9990-5fef7d707340&w=800&format=webp&mode=fit&q=70',
        title: 'СЕТ ТЕПЛЫЙ МИКС',
        weight: 1345,
        price: 1100,
        isSet: true
    },
]
//Переменные
const pagesBody = document.querySelector('.pages')
const itemPerPage = 4;
let numberOfPages;
let arrayBeforePagination = [];
let pageNumber = 1;
let start = (pageNumber - 1) * itemPerPage
let end = start + itemPerPage
let pagesBtns = []
let cardsWrap = document.querySelector('.cards');
let sortedArray = [];


//Default Settings
let currentArray = productsArray;
makePages(currentArray)
renderPagination(currentArray)
findPaginationBtns ()
showPage(pagesBtns[0])





function sortByMinPrice(arr) {
    arr.sort((a, b) => a.price > b.price ? 1 : -1)
    
}
function sortByMaxPrice(arr) {
    arr.sort((a, b) => a.price < b.price ? 1 : -1)
}
function sortByMinWeight(arr) {
    arr.sort((a, b) => a.weight > b.weight ? 1 : -1)
}
function sortByMaxWeight(arr) {
    arr.sort((a, b) => a.weight < b.weight ? 1 : -1)
}
function deleteOldArrayElements () {
    document.querySelectorAll('.card').forEach(element => element.remove())
}


//Показать роллы по категориям при клике на определенную категорию
window.addEventListener('click', (e) => {
    if (e.target.dataset.show === 'all') {
        currentArray = productsArray
        showItems() 

    } else if (e.target.dataset.show === 'sets') {
        currentArray = productsArray.filter((item => item.isSet === true))
        showItems() 
        
    } else if (e.target.dataset.show === 'rolls') {
        currentArray = productsArray.filter((item => item.isRoll === true))
        showItems() 

    }
})
//Функция отображения роллов при клике на определенную категорию
function showItems() {
    deleteOldArrayElements ()
    renderPagination(currentArray) 
    getNumberOfPages (currentArray)
    makePages(currentArray)

    findPaginationBtns ()


    for (let pageBtn of pagesBtns) {
        pageBtn.addEventListener('click', () => {
            showPage(pageBtn)
        })
    }
}



//Сортировка 
window.addEventListener('click', (e) => {
    let sortPriceArrowEl = document.querySelector('#sorting-by-price-icon');
    let sortWeightArrowEl = document.querySelector('#sorting-by-weight-icon');

    //Price
    if (e.target.dataset.sortingPrice === 'true') {
        e.target.dataset.sortingPrice = 'false'
        sortByMaxPrice(currentArray)
        deleteOldArrayElements ()
        renderPagination(currentArray) 
        sortPriceArrowEl.classList.add('active')
        showPage(pagesBtns[0])

    } else if (e.target.dataset.sortingPrice === 'false') {
        e.target.dataset.sortingPrice = 'true'
        deleteOldArrayElements ()
        sortByMinPrice(currentArray)
        renderPagination(currentArray) 
        sortPriceArrowEl.classList.remove('active')
        showPage(pagesBtns[0])
    }


    //Weight
    if (e.target.dataset.sortingWeight === 'true') {
        e.target.dataset.sortingWeight = 'false'
        deleteOldArrayElements ()
        sortByMaxWeight(currentArray)
        renderPagination(currentArray) 
        sortWeightArrowEl.classList.add('active')
        showPage(pagesBtns[0])

    } else if (e.target.dataset.sortingWeight === 'false') {
        e.target.dataset.sortingWeight = 'true'
        deleteOldArrayElements ()
        sortByMinWeight(currentArray)
        renderPagination(currentArray) 
        sortPriceArrowEl.classList.remove('active')
        showPage(pagesBtns[0])
    }
})







//Получаем количество страниц при рендере
function getNumberOfPages (arr) {
    numberOfPages = arr.length/itemPerPage;
    console.log(`Pages must be = ${numberOfPages}`);
}

//Создаем кнопки для переключения страниц при рендере
function makePages(arr) {
    pagesBody.innerHTML = '';
    getNumberOfPages (arr)
    pagesBtns = [];
    for (i = 1; i < numberOfPages + 1; i++ ) {
        let page = document.createElement('div');
        page.classList.add('page')
        page.innerHTML = i;
        pagesBody.appendChild(page)
    }
    console.log(pagesBtns);
}


//Находим ранее созданные кнопки для переключения страниц 
function findPaginationBtns () {
    pagesBtns = document.querySelectorAll('.page')
    console.log(pagesBtns);
}

//Обработчик события на кнопки на главной
for (let pageBtn of pagesBtns) {
    pageBtn.addEventListener('click', () => {
        showPage(pageBtn)
    })
}

//Отоброжаем карточки товаров при нажатии на кнопку
function showPage(pageBtn) {
    pagesBtns[0].classList.add('active')
    for (let pageBtnStyle of pagesBtns) {
        pageBtnStyle.classList.remove('active')
    }
        pageBtn.classList.add('active')
        cardsWrap.innerHTML = ''
        pageNumber = pageBtn.innerHTML;
        start = (pageNumber - 1) * itemPerPage
        end = start + itemPerPage;
        console.log(currentArray);
        renderPagination(currentArray)
        console.log(pageNumber);
        
}


//Рендер
function renderPagination(arr) {
    let arrayForRender = arr.slice(start, end)

    for (let item of arrayForRender) {
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