$(document).ready(function (){

  // Top Belt
  function movePlateTop(){
    var $plate = $('#plateTop1');
    var distance = 1000;
    setInterval(function(){
      $plate.css('left', distance + 'px');
      if (distance < -300) {
        distance = 1000;
      } else {
        distance -= 5;
      }
    },100);
  };

  function movePlateTop2(){
    var $plate = $('#plateTop2');
    var distance = 750;
    setInterval(function(){
      $plate.css('left', distance + 'px');
      if (distance < -300) {
        distance = 1000;
      } else {
        distance -= 5;
      }
    }, 100);
  };

  function movePlateTop3(){
    var $plate = $('#plateTop3');
    var distance = 500;
    setInterval(function(){
      $plate.css('left', distance + 'px');
      if (distance < -300) {
        distance = 1000;
      } else {
        distance -= 5;
      }
    }, 100);
  };

  function movePlateTop4(){
    var $plate = $('#plateTop4');
    var distance = 250;
    setInterval(function(){
      $plate.css('left', distance + 'px');
      if (distance < -300) {
        distance = 1000;
      } else {
        distance -= 5;
      }
    }, 100);
  };

  function movePlateTop5(){
    var $plate = $('#plateTop5');
    var distance = 0;
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
    movePlateTop();})
  $(document).ready(function(){
    movePlateTop2();})
  $(document).ready(function(){
    movePlateTop3();})
  $(document).ready(function(){
    movePlateTop4();})
  $(document).ready(function(){
    movePlateTop5();})

  // Bottom Belt

  function movePlateBottom(){
    var $plate = $('#plateBottom5');
    var distance = 1000;
    setInterval(function(){
      $plate.css('right', distance + 'px');
      if (distance < -300) {
        distance = 1000;
      } else {
        distance -= 5;
      }
    }, 100);
  };

  function movePlateBottom2(){
    var $plate = $('#plateBottom4');
    var distance = 750;
    setInterval(function(){
      $plate.css('right', distance + 'px');
      if (distance < -300) {
        distance = 1000;
      } else {
        distance -= 5;
      }
    }, 100);
  };

  function movePlateBottom3(){
    var $plate = $('#plateBottom3');
    var distance = 500;
    setInterval(function(){
      $plate.css('right', distance + 'px');
      if (distance < -300) {
        distance = 1000;
      } else {
        distance -= 5;
      }
    }, 100);
  };

  function movePlateBottom4(){
    var $plate = $('#plateBottom2');
    var distance = 250;
    setInterval(function(){
      $plate.css('right', distance + 'px');
      if (distance < -300) {
        distance = 1000;
      } else {
        distance -= 5;
      }
    }, 100);
  };

  function movePlateBottom5(){
    var $plate = $('#plateBottom1');
    var distance = 0;
    setInterval(function(){
      $plate.css('right', distance + 'px');
      if (distance < -300) {
        distance = 1000;
      } else {
        distance -= 5;
      }
    }, 100);
  };

  $(document).ready(function(){
    movePlateBottom();})
  $(document).ready(function(){
    movePlateBottom2();})
  $(document).ready(function(){
    movePlateBottom3();})
  $(document).ready(function(){
    movePlateBottom4();})
  $(document).ready(function(){
    movePlateBottom5();})

var plateArr = $('.sushiPlate')
console.log(plateArr)

function randomPlate(array) {
   return array[Math.floor(Math.random() * array.length)];
}

function addGoodSushi(){
  if ($('.sushiPlate')){
    $(randomPlate(plateArr)).append("<img src='images/goodSushi.png' class= 'goodSushi'/>")
  }};

function removeGoodSushi(){
}

function populateGoodSushi(){
    addGoodSushi();
    removeGoodSushi();
    setInterval(populateGoodSushi, 3000);
}

setTimeout(populateGoodSushi, 3000);

$('.goodSushi').click(function() {
  console.log('test');
  (".goodSushi").remove();
});


})
