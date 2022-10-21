let nameForm = document.querySelector("#name-form")
let logoutBtn = document.querySelector('#logout')

nameForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let nameIput = document.querySelector("#name")
    let password = document.querySelector("#password")

    localStorage.setItem("name", nameIput.value)
    localStorage.setItem("password", password.value)

    nameIput.value = ""
    password.value = ""
})