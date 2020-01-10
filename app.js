// USE COMMENTS!!!!


let button = document.getElementById("run").addEventListener("click", function () {

    let input = document.getElementById("input");
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=antwerp&APPID=be8257068799ca9f1eccf80a6e84c26f`)
        .then(response => response.json())
        .then(data => {
            console.log(data);








        })
        .catch(error => console.log("error"));



});

