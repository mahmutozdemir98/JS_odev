var today = new Date();

var myVar=setInterval(function(){myTimer()},1000);
var gunler = [" Pazar", " Pazartesi", " Salı", " Çarşamba", " Perşembe", " Cuma", " Cumartesi"];

function myTimer() 
{
    var d = new Date();
    document.querySelector("#nClock").innerHTML = d.toLocaleTimeString();
    document.querySelector("#nClock").innerHTML += gunler[today.getDay()];
}


document.querySelector("#name").innerHTML = prompt("Adınızı giriniz:")
