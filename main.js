const view = document.getElementById("view");
const steps = document.getElementById("step");


const colors = ["rgb(24,146,36)","rgb(110,9,86)","rgb(238,230,65)","rgb(156,92,13)"];

 setInterval(function() {
   
   let value = Math.floor(Math.random() * colors.length);
   steps.style.transition = "2s";
   steps.style.background = colors[value];
 }, 3000);


function getChange(){
  
  steps.style.display = "none";
  view.style.width = "100%";
  view.style.height = "100%";
  view.style.overflow = "scroll";
  view.style.background = "#060504ec"
  view.style.marginTop = "12px";
  view.style.boxShadow = "#ffffff7f 2px 0px 0px 0px";
 let number = document.getElementById("number");
 number.style.background = "#2a2827ec";
 number.style.width ="30px";
 number.style.height ="100%";
 number.style.display = "flex";
 number.style.flexDirection = "column";

 
}

function showDialog(){
  alert("You need our main website in order to view questions and answer them");
}