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

movePlateTop();
movePlateTop2();
movePlateTop3();
movePlateTop4();
movePlateTop5();

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

movePlateBottom();
movePlateBottom2();
movePlateBottom3();
movePlateBottom4();
movePlateBottom5();

var plateArr = $('.sushiPlate');
var emptyPlates = [];

function updateEmptyPlateArr(){
  for(var i = 0; i < plateArr.length; i++){
    if(!plateArr[i].html()){
      emptyPlates.push(plateArr[i])
      console.log('empty')
    }
  }
};

function randomPlate(array) {
   return array[Math.floor(Math.random() * plateArr.length)];
}

function addGoodSushi(){
    console.log('makin good sush')
    $(randomPlate(emptyPlates)).append("<img src='images/goodSushi.png' class= 'goodSushi'/>")
};

function addAmazingSushi(){
    console.log('makin some other good sush')
    $(randomPlate(emptyPlates)).append("<img src='images/amazingSushi.png' class= 'amazingSushi'/>");
};


function populateGoodSushi(){
    addGoodSushi();
    addAmazingSushi();
}

setInterval(populateGoodSushi, 3000);
setTimeout(populateGoodSushi, 5000);

$('.goodSushi').click(function() {
  console.log('test');
  (".goodSushi").remove();
});


})
