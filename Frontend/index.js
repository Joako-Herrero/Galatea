import { setArticleId } from './config.js';

function miniaturas() {
    console.log("ejecuuuutaaaandp");
    const apiUrl = 'https://galatea-backend.onrender.com/articulo/list';

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
        let lista = data;
        for ( lista of lista) {
            let minititulo = lista.miniTitle;
            let miniatura = lista.miniature;
            let sinopsis = lista.sinopsis;
            let date = lista.date;
            let id = lista.id;
            const fecha = new Date(date).toLocaleDateString("es-ES", {
                format: "dd-mm-yyyy",
            });

            const articulos = document.getElementById("articulos");
            const articleContainer = document.createElement("div");
            articulos.appendChild(articleContainer);
            articleContainer.classList.add("col-md-6");

            const articleCard = document.createElement("div");
            articleCard.setAttribute("data-article-id", id);
            articleCard.classList.add("row", "g-0", "border", "rounded", "overflow-hidden", "flex-md-row", "mb-4", "shadow-sm", "h-md-250", "position-relative");

            const articleContent = document.createElement("div");
            articleContent.classList.add("col", "p-4", "d-flex", "flex-column", "position-static");

            const articleTitle = document.createElement("h3");
            articleTitle.classList.add("mb-0");
            articleTitle.textContent = minititulo;

            const articleCategory = document.createElement("strong");
            articleCategory.classList.add("d-inline-block", "mb-2", "text-primary");
            articleCategory.textContent = "Cinema";

            const articleNew = document.createElement("div");
            articleNew.classList.add("mb-1", "text-body-secondary");
            articleNew.textContent = fecha;

            const articleDescription = document.createElement("p");
            articleDescription.classList.add("card-text", "mb-auto");
            articleDescription.textContent = sinopsis;

            const articleLink = document.createElement("a");
            articleLink.classList.add("stretched-link");
            articleLink.href = `/articulos/plantilla.html?id=${id}`;
            articleLink.textContent = "Continue reading";

            const articleThumbnail = document.createElement("div");
            articleThumbnail.classList.add("col-auto", "d-none", "d-lg-block");

            const articleImage = document.createElement("img");
            articleImage.classList.add("bd-placeholder-img", "img-fluid");
            articleImage.setAttribute("src", miniatura);
            articleImage.setAttribute("width", "200");
            articleImage.setAttribute("height", "250");
            articleImage.setAttribute("role", "img");
            articleImage.setAttribute("aria-label", "Placeholder: Thumbnail");
            articleImage.setAttribute("preserveAspectRatio", "xMidYMid slice");
            articleImage.setAttribute("focusable", "false");

          

            // Append elements
            articleContent.appendChild(articleCategory);
            articleContent.appendChild(articleTitle);
            articleContent.appendChild(articleNew);
            articleContent.appendChild(articleDescription);
            articleContent.appendChild(articleLink);

            articleThumbnail.appendChild(articleImage);

            articleCard.appendChild(articleContent);
            articleCard.appendChild(articleThumbnail);
            articleContainer.appendChild(articleCard);
        }
        
    })
   
    .catch(error => {
        // Manejar errores
        console.error('Error al realizar la solicitud:', error);
        console.log("no funca");
    });
}

window.onload = miniaturas;



