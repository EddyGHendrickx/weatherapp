// USE COMMENTS!!!!

let tempDayHTML1 = document.getElementById("tempDayOne");
let tempDayHTML2 = document.getElementById("tempDayTwo");
let tempDayHTML3 = document.getElementById("tempDayThree");
let tempDayHTML4 = document.getElementById("tempDayFour");
let tempDayHTML5 = document.getElementById("tempDayFive");

let descDayHTML1 = document.getElementById("descDayOne");
let descDayHTML2 = document.getElementById("descDayTwo");
let descDayHTML3 = document.getElementById("descDayThree");
let descDayHTML4 = document.getElementById("descDayFour");
let descDayHTML5 = document.getElementById("descDayFive");

let iconDay1 = document.getElementById("iconDayOne");
let iconDay2 = document.getElementById("iconDayTwo");
let iconDay3 = document.getElementById("iconDayThree");
let iconDay4 = document.getElementById("iconDayFour");
let iconDay5 = document.getElementById("iconDayFive");

let cityName = document.getElementById("cityName");

let frank = document.getElementById("frank");


let daysDiv = document.getElementById("days");
daysDiv.style.visibility = "hidden";

//To return the day of the week
let toDay = new Date();
let weekdays = new Array(7);
weekdays[0] = "Sunday";
weekdays[1] = "Monday";
weekdays[2] = "Tuesday";
weekdays[3] = "Wednesday";
weekdays[4] = "Thursday";
weekdays[5] = "Friday";
weekdays[6] = "Saturday";

//function to calculate average of array (temperature in this case)
function average(array) {
    return Math.round(array.reduce((a, b) => a + b) / array.length);
}
let input = document.getElementById("input");


let button = document.getElementById("frank").addEventListener("click", function () {
    //displaying green background
    frank.style.display = "none";
    daysDiv.style.visibility = "visible";

    daysDiv.style.backgroundColor = "lightblue";

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input.value}&APPID=be8257068799ca9f1eccf80a6e84c26f`)
        .then(response => response.json())
        .then(data => {
            getPhoto();
            console.log(data);
            cityName.innerHTML = data.city.name;
            //Making empty array, to push new elements in it
            let tempOfAllDays = [];
            let discOfAllDays = [];
            let iconOfAllDays = [];
            // Pushing only the temperature of every iteration in new array
            for (i = 0; i < data.list.length; i++) {
                tempOfAllDays.push(data.list[i].main.temp);
            }
            //Pushing the description, every 8 iterations, so I have 5 elements(one for each day)
            for (o = 0; o < data.list.length; o++) {
                discOfAllDays.push(data.list[o].weather[0].description);
                iconOfAllDays.push(data.list[o].weather[0].icon);
                o++;
                o++;
                o++;
                o++;
                o++;
                o++;
                o++;

            }
            //Slicing big array into smaller arrays, per day
            var tempDay1 = tempOfAllDays.slice(0, 8);
            var tempDay2 = tempOfAllDays.slice(8, 16);
            var tempDay3 = tempOfAllDays.slice(16, 24);
            var tempDay4 = tempOfAllDays.slice(24, 32);
            var tempDay5 = tempOfAllDays.slice(32, 40);

            // Averaging temperature, and converting to Celcius
            var avgTempDay1 = average(tempDay1) - 273;
            var avgTempDay2 = average(tempDay2) - 273;
            var avgTempDay3 = average(tempDay3) - 273;
            var avgTempDay4 = average(tempDay4) - 273;
            var avgTempDay5 = average(tempDay5) - 273;

            //Icons
            iconDay1.setAttribute("src", `http://openweathermap.org/img/wn/${iconOfAllDays[0]}@2x.png`);
            iconDay2.setAttribute("src", `http://openweathermap.org/img/wn/${iconOfAllDays[1]}@2x.png`);
            iconDay3.setAttribute("src", `http://openweathermap.org/img/wn/${iconOfAllDays[2]}@2x.png`);
            iconDay4.setAttribute("src", `http://openweathermap.org/img/wn/${iconOfAllDays[3]}@2x.png`);
            iconDay5.setAttribute("src", `http://openweathermap.org/img/wn/${iconOfAllDays[4]}@2x.png`);

            //Putting temp in HTML
            tempDayHTML1.innerHTML = `Today </br> <strong id="tempToday">${avgTempDay1.toString()}°C</strong>`;
            tempDayHTML2.innerHTML = `Tomorrow </br> ${avgTempDay2.toString()}°C`;
            tempDayHTML3.innerHTML = `${weekdays[toDay.getDay()+2]} </br> ${avgTempDay3.toString()}°C`;
            tempDayHTML4.innerHTML = `${weekdays[toDay.getDay()+3]} </br> ${avgTempDay4.toString()}°C`;
            tempDayHTML5.innerHTML = `${weekdays[toDay.getDay()+4]} </br> ${avgTempDay5.toString()}°C`;

            //Putting desc in HTML
            descDayHTML1.innerHTML = `<strong> ${discOfAllDays[0].toString()}</strong>`;
            descDayHTML2.innerHTML = `<strong> ${discOfAllDays[1].toString()}</strong>`;
            descDayHTML3.innerHTML = `<strong> ${discOfAllDays[2].toString()}</strong>`;
            descDayHTML4.innerHTML = `<strong> ${discOfAllDays[3].toString()}</strong>`;
            descDayHTML5.innerHTML = `<strong> ${discOfAllDays[4].toString()}</strong>`;


        })
        .catch(function (error) {
            daysDiv.classList.add("bg-danger");

            daysDiv.innerHTML = "THIS DOESN'T EXIST"
        });


});


async function getPhoto(){
    let response = await fetch(`https://api.unsplash.com/search/photos?query=${input.value}&client_id=8b3303518e733b03bb9fbe890041915da381de31ef0602ad71dc8adfd4b79f83`);
    let data = await response.json();
    console.log(data.results[3]);
    let bgPicture = data.results[2].urls.full;
    document.body.style.backgroundImage = `url(${bgPicture})`;
}


