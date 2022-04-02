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

