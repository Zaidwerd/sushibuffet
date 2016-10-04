function movePlate(){
  var $plate = $('.plateTop1');
  var distance = 1280;
  setInterval(function(){
    $plate.css('left', distance + 'px');
    if (distance < -300) {
      distance = 1000;
    } else {
      distance -= 5;
    }
  }, 100);
};

$(document).ready(function(){
  movePlate();
})

function movePlate2(){
  var $plate = $('.plateTop2');
  var distance = 1024;
  setInterval(function(){
    $plate.css('left', distance + 'px');
    if (distance < -300) {
      distance = 1000;
    } else {
      distance -= 5;
    }
  }, 100);
};

$(document).ready(function(){
  movePlate2();
})

function movePlate3(){
  var $plate = $('.plateTop3');
  var distance = 768;
  setInterval(function(){
    $plate.css('left', distance + 'px');
    if (distance < -300) {
      distance = 1000;
    } else {
      distance -= 5;
    }
  }, 100);
};

$(document).ready(function(){
  movePlate3();
})

function movePlate4(){
  var $plate = $('.plateTop4');
  var distance = 512;
  setInterval(function(){
    $plate.css('left', distance + 'px');
    if (distance < -300) {
      distance = 1000;
    } else {
      distance -= 5;
    }
  }, 100);
};

$(document).ready(function(){
  movePlate4();
})

function movePlate5(){
  var $plate = $('.plateTop5');
  var distance = 256;
  setInterval(function(){
    $plate.css('left', distance + 'px');
    if (distance < -300) {
      distance = 1000;
    } else {
      distance -= 5;
    }
  }, 100);
};

$(document).ready(function(){
  movePlate5();
})
