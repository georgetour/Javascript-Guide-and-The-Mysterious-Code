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



