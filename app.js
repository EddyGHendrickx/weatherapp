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


//function to calculate average of array (temperature in this case)
function average(array){
    return Math.floor(array.reduce((a, b) => a + b) / array.length);
}


let button = document.getElementById("run").addEventListener("click", function () {

    let input = document.getElementById("input");
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=antwerp&APPID=be8257068799ca9f1eccf80a6e84c26f`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            //Making empty array, to push new elements in it
            let tempOfAllDays = [];
            let discOfAllDays = [];
            let temp = data.list[0].main.temp;
            // Pushing only the temperature of every iteration in new array
            for (i = 0;i < data.list.length; i++){
                tempOfAllDays.push(data.list[i].main.temp);
            }
            //Pushing the discription, every 8 iterations, so I have 5 elements(for each day)
            for (o = 0;o < data.list.length; o++){
                discOfAllDays.push(data.list[o].weather[0].description);
                o++;
                o++;
                o++;
                o++;
                o++;
                o++;
                o++;

            }

            //Slicing big array into smaller arrays, per day
            var tempDay1 = tempOfAllDays.slice(0,8);
            var tempDay2 = tempOfAllDays.slice(8,16);
            var tempDay3 = tempOfAllDays.slice(16,24);
            var tempDay4 = tempOfAllDays.slice(24,32);
            var tempDay5 = tempOfAllDays.slice(32,40);
            // Averaging temperature, and converting to Celcius
            var avgTempDay1 = average(tempDay1) - 273;
            var avgTempDay2 = average(tempDay2) - 273;
            var avgTempDay3 = average(tempDay3) - 273;
            var avgTempDay4 = average(tempDay4) - 273;
            var avgTempDay5 = average(tempDay5) - 273;

            //Putting temp in HTML
            tempDayHTML1.innerHTML = avgTempDay1.toString();
            tempDayHTML2.innerHTML = avgTempDay2.toString();
            tempDayHTML3.innerHTML = avgTempDay3.toString();
            tempDayHTML4.innerHTML = avgTempDay4.toString();
            tempDayHTML5.innerHTML = avgTempDay5.toString();

            //Putting desc in HTML
            descDayHTML1.innerHTML = discOfAllDays[0].toString();
            descDayHTML2.innerHTML = discOfAllDays[1].toString();
            descDayHTML3.innerHTML = discOfAllDays[2].toString();
            descDayHTML4.innerHTML = discOfAllDays[3].toString();
            descDayHTML5.innerHTML = discOfAllDays[4].toString();


        })
        .catch(function (error) {
            console.log("error")
        });



});

