window.addEventListener("load", function () {
    let count = 0;
    const compteurHtml = document.querySelector(".game");
    const titre = document.querySelector("h1");
    compteurHtml.addEventListener("click", function () {
        titre.innerHTML = `Vous avez cliqué ${++count} fois sur cette bannière`;
    });
});