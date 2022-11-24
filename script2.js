let contra = document.querySelector('#password-next')
contra.addEventListener('submit', function (event){
    event.preventDefault()

    console.log('ingreso')
    window.location="contraseñao2.html"
})