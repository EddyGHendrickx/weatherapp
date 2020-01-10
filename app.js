// USE COMMENTS!!!!

let tempDayHTML1 = document.getElementById("tempDayOne");
let tempDayHTML2 = document.getElementById("tempDayTwo");
let tempDayHTML3 = document.getElementById("tempDayThree");
let tempDayHTML4 = document.getElementById("tempDayFour");
let tempDayHTML5 = document.getElementById("tempDayFive");


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
            let tempOfAllDays = [];
            let temp = data.list[0].main.temp;
            for (i = 0;i < data.list.length; i++){
                tempOfAllDays.push(data.list[i].main.temp);
            }
            var tempDay1 = tempOfAllDays.slice(0,8);
            var tempDay2 = tempOfAllDays.slice(8,16);
            var tempDay3 = tempOfAllDays.slice(16,24);
            var tempDay4 = tempOfAllDays.slice(24,32);
            var tempDay5 = tempOfAllDays.slice(32,40);

            var avgTempDay1 = average(tempDay1) - 273;
            var avgTempDay2 = average(tempDay2) - 273;
            var avgTempDay3 = average(tempDay3) - 273;
            var avgTempDay4 = average(tempDay4) - 273;
            var avgTempDay5 = average(tempDay5) - 273;


            tempDayHTML1.innerHTML = avgTempDay1.toString();
            tempDayHTML2.innerHTML = avgTempDay2.toString();
            tempDayHTML3.innerHTML = avgTempDay3.toString();
            tempDayHTML4.innerHTML = avgTempDay4.toString();
            tempDayHTML5.innerHTML = avgTempDay5.toString();





        })
        .catch(function (error) {
            console.log("error")
        });



});

