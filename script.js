let status_login = document.getElementById('status_login')
let status_cadastrar = document.getElementById('status_cadastro')

let usuario_login = document.getElementById('usuario_login')
let senha_login = document.getElementById('senha_login')

let usuario_cadastrar = document.getElementById('usuario_cadastro')
let senha_cadastrar = document.getElementById('senha_cadastro')
let confirmacao_senha_cadastrar = document.getElementById('confirmar_senha')

let usuarios = JSON.parse(localStorage.getItem('usuarios')) || []


function realizar_login(event){
    event.preventDefault()
    
    const procurar_usuario = usuarios.find((item) => {
        return item.usuario === usuario_login.value
    })

    const index_comparar = usuarios.indexOf(procurar_usuario)

    if(index_comparar != -1){ // se existe usuário cadastrado no localStorage
        if(usuario_login.value === usuarios[index_comparar].usuario && senha_login.value === usuarios[index_comparar].senha){
            status_login.innerText = 'Login realizado com sucesso!'
        } else{
            status_login.innerText = 'O usuário e/ou senha não estão corretos'
        }

        setTimeout(() => {
            status_login.innerText = ''
        }, 3500)
    }
}

function cadastrar_conta(event){
    event.preventDefault()

    const usuario_existe = usuarios.find(item => {
        return item.usuario === usuario_cadastrar.value
    })

    if(usuario_existe === undefined){
        if(senha_cadastrar.value === confirmacao_senha_cadastrar.value){
            usuarios.push({usuario: usuario_cadastrar.value, senha: senha_cadastrar.value})
        
            localStorage.setItem('usuarios', JSON.stringify(usuarios))
    
            status_cadastrar.innerText = 'Cadastro realizado com sucesso!'
        } else{
            status_cadastrar.innerText = 'A senha não foi digitada corretamente'
    
        }
    } else{
        status_cadastrar.innerText = 'Já existe um usuário com esse nome'
    }

    setTimeout(() => {
        status_cadastrar.innerText = ''
    }, 3500)
}

