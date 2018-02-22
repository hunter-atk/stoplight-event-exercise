(function() {
  'use strict';

  var controls = document.querySelector('#controls');
//  var trafficLight = document.querySelector('#traffic-light');
  var red = document.querySelector('#stopLight');
  var yellow = document.querySelector('#slowLight');
  var green = document.querySelector('#goLight');
  var stop = false;
  var slow = false;
  var go = false;
    controls.addEventListener('click', function(ev){
      console.log(ev.target);

        if (ev.target.id === "stopButton"){
          red.classList.toggle("stop");
          stop = true;
          if (slow){
            yellow.classList.toggle("slow");
            slow = false;
          }
          if (go){
            green.classList.toggle("go");
            go = false;
          }
        }
        else if (ev.target.id === "slowButton"){
          yellow.classList.toggle("slow");
          slow = true;
          if (stop){
            red.classList.toggle("stop");
            stop = false;
          }
          if (go){
            green.classList.toggle("go");
            go = false;
          }
        }
        else if (ev.target.id === "goButton"){
          green.classList.toggle("go");
          go = true;
          if (slow){
            yellow.classList.toggle("slow");
            slow = false;
          }
          if (stop){
            red.classList.toggle("stop");
            stop = false;
          }
        }

    })
})();
