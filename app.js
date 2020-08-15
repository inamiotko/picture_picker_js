'use strict'

const statusDisplay = document.querySelector('.gamestatus')
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];
function currentTime(){
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let midday = "AM";
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    midday = (hour>=12) ? "PM" : "AM";
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour);
    document.getElementById("clock").innerHTML = hour + " : " + min + " : " + sec + " " +midday; 
    let t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
}
function randomImg(){
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    let imgName = "img" + randomNumber+".jpg";
    document.getElementById("imageid").src= imgName;
    }

function updateTime(x){
    if(x<10){
        return "0" + x;
    }else{
        return x;
    }

}

currentTime();
