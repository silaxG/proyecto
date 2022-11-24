let formulario = document.querySelector('#form-inicio')
formulario.addEventListener('submit', function (event){
    event.preventDefault()

    console.log('ingreso')
    window.location="inicio.html"
})


