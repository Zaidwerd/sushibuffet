function movePlate(){
  var $plate = $('.plateTop1');
  var distance = 1200;
  setInterval(function(){
    $plate.css('left', distance + 'px');
    if (distance < -300) {
      distance = 1200;
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
  var distance = 900;
  setInterval(function(){
    $plate.css('left', distance + 'px');
    if (distance < -300) {
      distance = 1200;
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
  var distance = 600;
  setInterval(function(){
    $plate.css('left', distance + 'px');
    if (distance < -300) {
      distance = 1200;
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
  var distance = 300;
  setInterval(function(){
    $plate.css('left', distance + 'px');
    if (distance < -300) {
      distance = 1200;
    } else {
      distance -= 5;
    }
  }, 100);
};

$(document).ready(function(){
  movePlate4();
})
