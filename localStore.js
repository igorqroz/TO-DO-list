let nameForm = document.querySelector("#name-form")
let welcomeContainer = document.querySelector("#welcome")
let logoutBtn = document.querySelector("#logout")
let lista = document.querySelector("#ListaTelefonica")

function checkuser() {
    let userName = localStorage.getItem("name")

    if (userName) {
        nameForm.style.display = "none"
        welcomeContainer.style.display = "block"

        let userNameElement = document.querySelector("#userName")

        userNameElement.textContent = userName;
    } else {
        nameForm.style.display = "block"
        welcomeContainer.style.display = "none"
    }
}

nameForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let nameInput = document.querySelector("#name")

    localStorage.setItem("name", nameInput.value)

    nameForm.value = ""

    let senhaInput = document.querySelector("#senha")

    localStorage.setItem("senha", senhaInput.value)

    nameForm.value = ""

    checkuser()
})

logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("name")

    checkuser()
})

checkuser()
