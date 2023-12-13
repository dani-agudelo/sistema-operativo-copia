document.addEventListener("DOMContentLoaded", function (event) {

   const form = document.querySelector("form")
   form.addEventListener("submit", function (e) {
      e.preventDefault()
      const nombre = document.querySelector("#nombre").value
      const password = document.querySelector("#password").value
      const rol = document.querySelector(".rol").value

      const url = 'http://localhost:8080/api/usuarios/';

      const usuarioNuevo = {
         nombre: nombre,
         password: password,
         rol: rol
      };

      fetch(url, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(usuarioNuevo)
      })
         .then(response => response.json())
         .then(data => {
            console.log('Usuario creado con éxito:', data);
            Swal.fire(
               'Perfecto',
               'Usuario creado con éxito!',
               'success'
             )
             setTimeout(() => {
               location.href = "http://localhost:5501/resources/html/escritorio.html"
            }, 2000);
         })
         .catch(error => {
            console.error('Error al crear el usuario:', error);
         });








   })
})