// Agregar un evento de clic al botón de carga
var loadButton = document.getElementById('save-button');
if(loadButton){
  loadButton.addEventListener('click', () => {
    var markupStr = $('#summernote').summernote('code');
  
    console.log(markupStr);
  });
};



$(document).ready(function () {
  $('#summernote').summernote({
    height: 300,                 // set editor height
    minHeight: null,             // set minimum height of editor
    maxHeight: null,             // set maximum height of editor
    focus: true                  // set focus to editable area after initializing summernote
  });
});


//LOGIN///
// JavaScript con la función para realizar la solicitud POST
var loginBtn = document.getElementById('btnLogin');
if(loginBtn){


  loginBtn.addEventListener('click', () => {
    console.log("ejecuta")
    // Obtener los valores del formulario
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // URL de la API REST
    let apiUrl = 'https://galatea-backend.onrender.com/auth/login'; // Reemplaza con la URL de tu API


    // Datos a enviar en la solicitud POST
    let data = {
      "username": username,
      "password": password
    };

    // Configuración de la solicitud
    let requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    // Realizar la solicitud POST
    fetch(apiUrl, requestOptions)
      .then(response => response.json())
      .then(data => {
        // Manejar la respuesta de la API
        console.log('Respuesta de la API:', data);
        console.log("funca")
      })
      .catch(error => {
        // Manejar errores
        console.error('Error al realizar la solicitud:', error);
        console.log("no funca")
        
      });
  });
};
var registerBtn = document.getElementById('btnRegister');
if(registerBtn){
  
  registerBtn.addEventListener('click', () => {
    console.log("ejecuta")
    // Obtener los valores del formulario
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;
    let role = document.getElementById("role").value;
    console.log(role)
    // URL de la API REST
    let apiUrl = 'https://galatea-backend.onrender.com/auth/register'; // Reemplaza con la URL de tu API


    // Datos a enviar en la solicitud POST
    let data = {
      "name":name,
      "email":email,
      "username": username,
      "password": password,
      "roles":[role]
    };
    console.log(data)

    // Configuración de la solicitud
    let requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    // Realizar la solicitud POST
    fetch(apiUrl, requestOptions)
      .then(response => response.json())
      .then(data => {
        // Manejar la respuesta de la API
        console.log('Respuesta de la API:', data);
      })
      .catch(error => {
        // Manejar errores
        console.error('Error al realizar la solicitud:', error);
      });
  });
};