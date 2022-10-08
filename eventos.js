function addContato() {
    // let novaTarefa= document.getElementById('input_nova_tarefa')
    console.log(input_nova_tarefa.value.split(" "))
}

// atualizarContatos();

async function atualizarContatos() {
    // fetch('https://633867b7937ea77bfdbf9c86.mockapi.io/pessoa')// resquet/promise
    //     .then(response => response.json())// resposta da resquest/promise
    //     .then(body => {// resposta do resposta.json() === corpo da resquest/promise
    //         console.log(body)
    //         // let tarefas = document.getElementById("tarefas")// forma "normal" de fazer
    //         tarefas.innerHTML = "<ul>"
    //         body.forEach(pessoa => {
    //             tarefas.innerHTML += `<li>${pessoa.nome} - ${pessoa.idade} <button onclick="deletar(${pessoa.id})">Deletar</button></li>`
    //         });
    //         tarefas.innerHTML += "</ul>"
    //     })

    let response = await fetch('https://633867b7937ea77bfdbf9c86.mockapi.io/pessoa')
    let body = await response.json()
    // let tarefas = document.getElementById("tarefas")// forma "normal" de fazer
    tarefas.innerHTML = "<ul>"
    body.forEach(pessoa => {
        tarefas.innerHTML += `<li>${pessoa.nome} - ${pessoa.idade} <button onclick="deletar(${pessoa.id})">Deletar</button></li>`
    })
    tarefas.innerHTML += "</ul>"
}
async function deletar(identificador) {
    console.log(`Deletarei o ${identificador}`)

    // fetch('https://633867b7937ea77bfdbf9c86.mockapi.io/pessoa/' + identificador, {
    //     method: 'DELETE',
    // }).then(res => {
    //     if (res.ok) {
    //         console.log('Deu certo')
    //         AtualizarContatos()
    //     } else {
    //         console.log('Deu erro')
    //     }
    // })

    let response = fetch('https://633867b7937ea77bfdbf9c86.mockapi.io/pessoa/' + identificador, {
        method: 'DELETE',
    })
    if (response.ok) {
        atualizarContatos()
    } else {
        console.log((await response).statusText)
    }

}