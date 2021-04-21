const elementsList = document.querySelectorAll("#randomNum");
const elementsArray = [...elementsList];
setInterval(function() {
    elementsArray.forEach(element => {
        element.innerHTML = '#' + Math.floor((Math.random() * 8) + 2) + ":&nbsp;";
    });
}, 10);
