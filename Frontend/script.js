const worker = new Worker('jwtWorker.js');


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
        worker.postMessage({ type: 'SET_TOKEN', token: data.token });
        window.location.href = 'index.html';
      })
      .catch(error => {
        // Manejar errores
        console.error('Error al realizar la solicitud:', error);
        console.log("no funca")
        
      });
  });
};

var loadButton = document.getElementById('save-button');
if(loadButton){
  loadButton.addEventListener('click', () => {
    var markupStr = $('#summernote').summernote('code');
    var title=document.getElementById("title");
    var date=document.getElementById("fechaInput");
    var banner=document.getElementById("banner");
    var minititle=document.getElementById("minititle");
    var miniature=document.getElementById("miniature");
    var sinopsis=document.getElementById("sinopsis");

    let apiUrl = 'https://galatea-backend.onrender.com/articulo/create';
    
    let data = {
        "title":title,
        "date":date,
        "banner":banner,
        "minititle":minititle,
        "miniature":miniature,
        "sinopsis":sinopsis,
        "html":markupStr
    };
    worker.postMessage({ type: 'GET_TOKEN' });
    console.log("ejectu antes if");
    // Escuchar la respuesta del worker
    worker.addEventListener('message', (event) => {
      if (event.data.type === 'TOKEN') {
        const token = event.data.token;

        let requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(data)
        };
        console.log("ejectu");
        fetch(apiUrl, requestOptions)
          .then(response => response.json())
          .then(data => {
            // Manejar la respuesta de la API
            console.log('Respuesta de la API:', data);

          })
          .catch(error => {
          
            console.error('Error al realizar la solicitud:', error);
            console.log("no funca")
            
          });
    };
  });
})};
