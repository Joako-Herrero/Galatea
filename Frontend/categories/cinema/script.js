///Show More and Less buttons for the categories pages

const btnShowMore = document.getElementById("show-more-btn");
btnShowMore.addEventListener("click", () => {
    btnShowMore.style.display='none';
    const elementos = document.querySelectorAll(".elemento");
    elementos.forEach((elemento) => {
        elemento.style.display = 'block';
      });
     btnShowLess.style.display='inline-block';
});


const btnShowLess = document.getElementById("show-less-btn");
btnShowLess.addEventListener("click", () => {
    btnShowLess.style.display='none';
    const elementos = document.querySelectorAll(".elemento");
    elementos.forEach((elemento) => {
        elemento.style.display = 'none';
    });
    btnShowMore.style.display='inline-block';
});
///Show More and Less buttons for the categories pages
