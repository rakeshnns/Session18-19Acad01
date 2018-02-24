//Self invoking function.
(function (){
   
console.log('called app.js');


  console.log(navigator.onLine);
  if(!navigator.onLine) { // true|false
    document.querySelector(".Offline").removeAttribute('hidden');
  }
/* If data found 
var app = {
    isLoading: true,
    visibleCards: {},
    selectedCities: [],
    spinner: document.querySelector('.loader'),
    cardTemplate: document.querySelector('.cardTemplate'),
    container: document.querySelector('.main'),
  }; */
  var cln;
  var board;
  var Main = document.querySelector(".main");
  var loader = document.querySelector(".loader");
  var numOfDivs;
  var FromGP;
  var DesGP;
  var TimearGP;
  var StatusGP;

  function createDiv() {
    var board = document.querySelector(".cardTemplate"),    //Selecting all div with cardTemplate class Div.
    cln = board.cloneNode(true);                            //Cloning the cardTemplate class DIv.
    cln.remove('cardTemplate');                             //Removing  class carTemplate from cloned Div.

  /*  cln.classList.add('New');
    cln.querySelector('.New .from').textContent = FromGP;
    cln.querySelector('.New .des').textContent = DesGP;
    cln.querySelector('.New .timear').textContent = TimearGP;
    cln.querySelector('.New .status').textContent = StatusGP;
    cln.remove('New');*/

    cln.querySelector('.from').textContent = FromGP;
    cln.querySelector('.des').textContent = DesGP;
    cln.querySelector('.timear').textContent = TimearGP;
    cln.querySelector('.status').textContent = StatusGP;

    cln.removeAttribute('hidden');

    return cln;
  }

  function createAndModifyDivs(numOfDivs, From, Des, Timear, Status) {
      
      myDivs = [];
      i = 0;
    
      FromGP = From;
      DesGP = Des;
      TimearGP = Timear;
      StatusGP = Status;

      console.log(FromGP);
      console.log(DesGP);

 /*   for (i; i < numOfDivs; i += 1) {*/
      myDivs.push(createDiv());             //Creating new div for all entry of data
      Main.appendChild(myDivs[i]);          //Appending new Div to main Div 
      loader.setAttribute('hidden', true);  //Hiding loadersDiv
  /*  } */
  }

/* Getting data from Data folder*/ 
  var xmlhttp = new XMLHttpRequest();
  var url = "http://localhost:3000/FlightData";

  xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      myFunction(myArr);
   }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();

function myFunction(arr){

  var out = "";
  var i;
  /* for each record intiating DIV with Data*/
  for(i=0;i<arr.length;i++){
      console.log(arr);
      /*out += arr[i].from + arr[i].des + arr[i].timear + arr[i].status;*/
      console.log(arr[i].id);
      console.log(arr[i].from);
      console.log(arr[i].des);

      /* Function to create and Modify DIV*/
      createAndModifyDivs(i, arr[i].from, arr[i].des, arr[i].timear, arr[i].status);
  }
 }
 
 
   // TODO add service worker code here
   if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./service-worker.js')
             .then(function() { console.log('Service Worker Registered'); });
  } 

})();
