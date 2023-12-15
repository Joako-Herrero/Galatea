const urlParams = new URLSearchParams(window.location.search);

// Obtener el valor del parámetro 'id'
const articleId = urlParams.get('id');


function cargaArticulo(id) {

    const baseURL = 'https://galatea-backend.onrender.com/articulo/find/';
    const apiUrl = baseURL + id;


    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }

    })
        .then(response => response.json())
        .then(data => {

            console.log('Respuesta de la API:', data);
            return data;


        })
        .then(data => {
            const article = data;
            const titleElementHeader = document.querySelector("title");
            titleElementHeader.textContent = article.title;
            const tituloElement = document.querySelector(".banner h1");
            tituloElement.textContent = article.title;
            tituloElement.style.backgroundImage = 'url(${data.banner})';

            let date = article.date;
            const fecha = new Date(date).toLocaleDateString("es-ES", {
                format: "dd-mm-yyyy",
            });
            const fechaElement = document.querySelector(".blog-post-meta");
            fechaElement.textContent = fecha;

            const htmlElement = document.querySelector(".blog-post");
            htmlElement.innerHTML = article.html;
        })
        .catch(error => {
            // Manejar errores
            console.error('Error al realizar la solicitud:', error);
            console.log("no funca")

        });
};

window.onload = function () {
    cargaArticulo(articleId);
};

