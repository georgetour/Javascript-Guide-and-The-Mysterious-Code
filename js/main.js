/*====Pure javascript DOM manipulation with no jquery====*/



//=====Manipulate CSS with javascript=====
var products = document.querySelector('#mainSection');

products.style.backgroundColor = "#f2e6d9";

products.style.borderRadius = "25px";//End Manipulate CSS with javascript




//Numbering mysterious code with loop
var mysteriousCode = document.querySelectorAll(".mysteriousCode");

for(var index in mysteriousCode){
    mysteriousCode[index].innerHTML += " "+ index;
}//====End Numbering mysterious code=======




//===Adding or removing elements dynamically with javascript===========================
var p = document.createElement("p");
p.style.backgroundColor = "lightblue";
p.style.padding = "5px";
p.textContent ="Appended with javascript! How cool you are?";
var text= document.querySelector("#text");

text.appendChild(p);//===End Adding or removing elements dynamically with javascript===




//===Mysterious Code(interview question) 14 result=============
var mainArticle = document.getElementById("mainArticle");
var newSection = document.createElement("section");
newSection.innerHTML = "<p id='sectionParagraph'>created paragraph</p>";
mainArticle.appendChild(newSection);

var sectionParagraph = document.getElementById("sectionParagraph");
sectionParagraph.style.border = "1px solid black";





//====Multiplication table========

//Temp variable to store the table else it doesn't work since innerHTML resets the content
var table ="<table class='multiplicationTable'>";

var loopInsideLoop = document.getElementById("loopInsideLoop");


for (var i=1; i<=10; i++){

    for(var k=1; k<=10; k++){
        table += "<td>"+ i *k + " " + "</td>";
    }
    //Creating rows
    table += "<tr>";
}
table += "</table>";
loopInsideLoop.innerHTML = table;
//====End Multiplication table========


//=========Product hover effect==============

var product = document.querySelectorAll(".productsLayout");



function greyEffect() {
    this.style.backgroundColor = "#f2f2f2";
    this.children[1].style.display = "inline-block";

}

function normalImg(){
    this.style.backgroundColor = "white";
    this.children[1].style.display = "none";
}

function productHoverEffect() {
    product[0].onmouseover = greyEffect;
    product[0].onmouseout = normalImg;
    product[1].onmouseover = greyEffect;
    product[1].onmouseout = normalImg;
}

productHoverEffect();
//=========End Product hover effect===========



//=====Event listener=====
var canYouHearMe = document.getElementById("canYouHearMe");

function changeText(){
    this.innerHTML = "YES I CAN HEAR YOU!";
}

function changeColor() {
    this.style.color = "darkblue";
}

function reset(){
    this.innerHTML = "Can you hear me?";
    this.style.color = "black";
}


canYouHearMe.addEventListener("mouseover",changeText);
canYouHearMe.addEventListener("mouseover",changeColor);
canYouHearMe.addEventListener("mouseout",reset);


var stopChangingColor = document.getElementById("stopChangingColor");

stopChangingColor.addEventListener("click",function () {
   canYouHearMe.removeEventListener("mouseover",changeColor) ;
});


//===Event Object created by first argument===
var coolDiv = document.getElementById("coolDiv");

function doSomething(event){
        coolDiv.innerHTML = event.altKey;
        console.log(event.target.nodeName);

}

coolDiv.onclick = doSomething ;

var menuItem3 = document.getElementById("menuItem3");

function prevent(event) {
    event.preventDefault();
}


menuItem3.onclick = prevent;
//===End Event Object created by first argument===


//==Bubbling==
var bigCircle = document.getElementById("bigCircle");

function increaseCircle(event,whatCircle){
    //For all browsers else for modern we can do only e = event
    var e = event || window.event;
    whatCircle = e.target || e.srcElement;
    whatCircle.style.width = "300px";
    whatCircle.style.height = "300px";
}




bigCircle.onclick = function(event){
    increaseCircle(event,this);
};
//========End bubbling=============


//===Back To top and onscroll====
var backToTop = document.getElementById("backToTop");
var pageOffSet = document.getElementById("pageOffSetY");


backToTop.onclick = function () {
  window.scrollBy(0, -1 * window.pageYOffset)  ;
};

window.onscroll = function () {
    if(window.pageYOffset > 2000){
        backToTop.style.display = "block";
    }
    else{
        backToTop.style.display = "none";
    }
    pageOffSet.innerHTML = parseInt(window.pageYOffset);
};//===End Back To top and onscroll====



//====Director Timer====
var startCounting = document.getElementById("startCounting");
var counter = document.getElementById("counter");


function directorThree(){
    counter.innerHTML = "3";
}

function directorTwo(){
    counter.innerHTML = "2";
}

function directorOne(){
    counter.innerHTML = "1";
}

function directorAction(){
    counter.innerHTML = " action";
    counter.style.backgroundImage = "url('assets/img/action-director.png')";

}

function byeCrazyDirector(){
    counter.style.display = "none";
    counter.style.backgroundImage = "url('')";
}

function timerStart(){
    counter.style.display = "block";
    setTimeout(directorThree,0);
    setTimeout(directorTwo,1000);
    setTimeout(directorOne,2000);
    setTimeout(directorAction,3000);
    setTimeout(byeCrazyDirector,4000);
}

startCounting.onclick = function () {
    timerStart();
};//====End Director Timer====


//===TimerWatch=====
var minutes = document.getElementById("minutes");
minutes.innerHTML =0;
var addMinutes = document.getElementById("addMinutes");

function moreMinutes(){
    addMinutes.onclick = function () {
        var test= parseInt(minutes.innerHTML);
        test++;
        minutes.innerHTML = test;
        console.log(minutes);
    }
}
moreMinutes();

var seconds = document.getElementById("seconds");
var startValue = 5;
seconds.value = startValue;


function reduceSeconds(){
    seconds.value--;
    console.log(seconds.value);
    seconds.innerHTML = seconds.value;
    for(i = 0; i < 5; i++){

        if(seconds.value == 0){
            console.log("seconds 0");
            reduceMinutes();
            seconds.value = 5;
        }
    }

}

function reduceMinutes(){
    minutes.innerHTML--;
}

function startTimer(){
    var startTimerWatch = document.getElementById("startTimerWatch");
    startTimerWatch.onclick = function () {
        setInterval(reduceSeconds,1000);

    };


}

startTimer();




/*var startCounting = document.getElementById("startCounting");



    var startingValue = 3;

    function lower(){
        counter.innerHTML = -- startingValue;
    }


    var counter = document.getElementById("counter");
    counter.innerHTML= startingValue;

    function director(){

        counter.innerHTML= startingValue;
        setInterval(lower,1000)

    }
    startCounting.onclick = function () {
        director();
    };


*/


















