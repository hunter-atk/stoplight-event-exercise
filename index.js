

// (function() {
//   'use strict';
//
//   var controls = document.querySelector('#controls');
//   var trafficLight = document.querySelector('#traffic-light');
//
//  var red = document.querySelector('#stopLight'),
//  var yellow = document.querySelector('#slowLight');
//  var green = document.querySelector('#goLight');
//
//   var stop = false;
//   var slow = false;
//   var go = false;
//     controls.addEventListener('click', function(ev){
//       console.log(ev.target);
//
//         if (ev.target.id === "stopButton"){
//           red.classList.toggle("stop");
//           stop = true;
//           if (slow){
//             yellow.classList.toggle("slow");
//             slow = false;
//           }
//           if (go){
//             green.classList.toggle("go");
//             go = false;
//           }
//         }
//         else if (ev.target.id === "slowButton"){
//           yellow.classList.toggle("slow");
//           slow = true;
//           if (stop){
//             red.classList.toggle("stop");
//             stop = false;
//           }
//           if (go){
//             green.classList.toggle("go");
//             go = false;
//           }
//         }
//         else if (ev.target.id === "goButton"){
//           green.classList.toggle("go");
//           go = true;
//           if (slow){
//             yellow.classList.toggle("slow");
//             slow = false;
//           }
//           if (stop){
//             red.classList.toggle("stop");
//             stop = false;
//           }
//         }
//
//     })
// })();

(function () {
  'use strict';

  var controls = document.querySelector('#controls');
  var red = document.querySelector('#stopLight');
  var yellow = document.querySelector('#slowLight');
  var green = document.querySelector('#goLight');

  controls.addEventListener('click', function (ev) {
    console.log(ev.target);
    if (ev.target.id === "stopButton") {
      red.classList.add("stop");
      yellow.classList.remove("slow");
      green.classList.remove("go");
    }
    else if (ev.target.id === "slowButton") {
      yellow.classList.add("slow");
      red.classList.remove("stop");
      green.classList.remove("go");
    }
    else if (ev.target.id === "goButton") {
      green.classList.add("go");
      yellow.classList.remove("slow");
      red.classList.remove("stop");
    }
  })
})();
//
// (function () {
//   'use strict';
//   let lights = {
//     "Stop": document.getElementById('stopLight'),
//     "Slow": document.getElementById('slowLight'),
//     "Go": document.getElementById('goLight'),
//   }
//
//   let buttons = {
//     "Stop": document.getElementById('stopButton'),
//     "Slow": document.getElementById('slowButton'),
//     "Go": document.getElementById('goButton'),
//   }
//
//   let controls = document.getElementById('controls');
//   let trafficLight = document.getElementById('traffic-light');
//
//   controls.addEventListener('click', function(ev){
//     let lightBehavior = ev.target.innerText;
//     for (var item in lights) {
//       if (lights.hasOwnProperty(item)) {
//         lights[item].setAttribute('class',"bulb");
//       }
//     }
//     let lightClass = lightBehavior.toLowerCase();
//     lights[lightBehavior].classList.add(lightClass)
//   })
  //
  // function switchLight(addElement, removeElement1, removeElement2){
  //   var obj = {
  //     red: "stop",
  //     yellow: "slow",
  //     green: "go"
  //   }
  //   addElement.classList.add(obj[addElement]);
  //   removeElement1.classList.remove(obj[removeElement1]);
  //   removeElement2.classList.remove(obj[removeElement2]);
  // }
  //
  // var controls = document.querySelector('#controls');
  // var red = document.querySelector('#stopLight');
  // var yellow = document.querySelector('#slowLight');
  // var green = document.querySelector('#goLight');
  //
  // controls.addEventListener('click', function (ev) {
  //   console.log(ev.target);
  //   if (ev.target.id === "stopButton") {
  //     switchLight(red, yellow, green);
  //   }
  //   else if (ev.target.id === "slowButton") {
  //     yellow.classList.add("slow");
  //     red.classList.remove("stop");
  //     green.classList.remove("go");
  //   }
  //   else if (ev.target.id === "goButton") {
  //     green.classList.add("go");
  //     yellow.classList.remove("slow");
  //     red.classList.remove("stop");
  //   }
  // })
// })();

//
// function switchLight(addElement, removeElement1, removeElement2){
//   var obj = {
//     red: "stop",
//     yellow: "slow",
//     green: "go"
//   }
//   addElement.classList.add(obj.addElement);
//   removeElement1.classList.remove(obj.removeElement1);
//   removeElement2.classList.remove(obj.removeElement2);
// }
