$(document).ready(function (){

// grab information from landing
  function toObject(arr) {
    var rv = {};

    for (var i = 0; i < arr.length; i++){
      var parts = arr[i].split('=');
      if (parts.length === 2){
        var key = parts[0];
        var value = parts[1];
        rv[key] = value;
      }
    }

    return rv;
  }

  var inputHTML = function (name, value){
    return '<div>' +
        '<span>' + name + ': </span><span>' + value + '</span>' +
        '<input type="hidden" name="' + name +'" value="' + value +'">' +
      '</div>';
  }

  var queryString = window.location.search.substr(1).split('&');


  var myUsername = toObject(queryString);

  for (var key in myUsername){
   $("#username").append($(inputHTML(key, myUsername[key])));
  }


// Top Belt animation
function movePlateTop(){
    let plateT = $('#plateTop1');
    let distance = 1000;
    setInterval(function(){
      plateT.css('left', distance + 'px');
      if (distance < -300) {
        distance = 1000;
      } else {
        distance -= 5;
      }
    },100);
  };

function movePlateTop2(){
    let plateT2 = $('#plateTop2');
    let distance = 750;
    setInterval(function(){
      plateT2.css('left', distance + 'px');
      if (distance < -300) {
        distance = 1000;
      } else {
        distance -= 5;
      }
    }, 100);
  };

function movePlateTop3(){
    let plateT3 = $('#plateTop3');
    let distance = 500;
    setInterval(function(){
      plateT3.css('left', distance + 'px');
      if (distance < -300) {
        distance = 1000;
      } else {
        distance -= 5;
      }
    }, 100);
  };

function movePlateTop4(){
    let plateT4 = $('#plateTop4');
    let distance = 250;
    setInterval(function(){
      plateT4.css('left', distance + 'px');
      if (distance < -300) {
        distance = 1000;
      } else {
        distance -= 5;
      }
    }, 100);
  };

function movePlateTop5(){
    let plateT5 = $('#plateTop5');
    let distance = 0;
    setInterval(function(){
      plateT5.css('left', distance + 'px');
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

// Bottom Belt animation
function movePlateBottom(){
    let plateB = $('#plateBottom5');
    let distance = 1000;
    setInterval(function(){
      plateB.css('right', distance + 'px');
      if (distance < -300) {
        distance = 1000;
      } else {
        distance -= 5;
      }
    }, 100);
  };

function movePlateBottom2(){
    let plateB2 = $('#plateBottom4');
    let distance = 750;
    setInterval(function(){
      plateB2.css('right', distance + 'px');
      if (distance < -300) {
        distance = 1000;
      } else {
        distance -= 5;
      }
    }, 100);
  };

function movePlateBottom3(){
    let plateB3 = $('#plateBottom3');
    let distance = 500;
    setInterval(function(){
      plateB3.css('right', distance + 'px');
      if (distance < -300) {
        distance = 1000;
      } else {
        distance -= 5;
      }
    }, 100);
  };

function movePlateBottom4(){
    let plateB4 = $('#plateBottom2');
    let distance = 250;
    setInterval(function(){
      plateB4.css('right', distance + 'px');
      if (distance < -300) {
        distance = 1000;
      } else {
        distance -= 5;
      }
    }, 100);
  };

function movePlateBottom5(){
    let plateB5 = $('#plateBottom1');
    let distance = 0;
    setInterval(function(){
      plateB5.css('right', distance + 'px');
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

// Game play

var plateArr = $('.sushiPlate');
var emptyPlates = [];
var score= 0;
var timeSet= 60;
var playing = false;
var start = document.getElementById("start");
var goodSushiImg = "<img src='images/goodSushi.png' class= 'goodSushi'/>";
var amazingSushiImg = "<img src='images/amazingSushi.png' class= 'amazingSushi'/>";

function keepTime(){
  $('.timer').html('Time: ' + timeSet)
}

function gameOver(){
    alert("Game Over" + score)
  }

function keepScore(){
  $('.score').html('Score: ' + score);
}

function updateEmptyPlateArr(){
  for(var i = 0; i < plateArr.length; i++){
    if(plateArr.html() == ''){
      emptyPlates.push(plateArr[i])
    }
  }
};

function randomPlate(array) {
  min= Math.ceil(0);
  max= Math.floor(11);
  return array [Math.floor(Math.random() * (max-min)+min)];
}

function addGoodSushi() {
    var prevScore = score;
    $(randomPlate(plateArr)).append(goodSushiImg);
    setTimeout(function() {
    	$(goodSushiImg).remove();
    }, 1000)
  }

function addAmazingSushi() {
    var prevScore = score;
    $(randomPlate(plateArr)).append(amazingSushiImg);
    setTimeout(function() {
    	$(amazingSushiImg).remove();
    }, 1000)
  }

  // $('.sushiPlate').on('click', function(){
  //     var htmlstring = $('.sushiPlate').html()
  //     if (htmlstring == goodSushiImg)
  //     $('.goodSushi').removeClass();
  //     score += 10;
  //   });

  $('.start').on("click", function() {
      if (!playing) {
          playing = true;
          keepScore();
          getSushi = setInterval(function() {
              addGoodSushi();
              addAmazingSushi();
              updateEmptyPlateArr()
          }, 1500);
      }
  });

  for (var i = 0; i < plateArr.length; i++) {
      $(plateArr[i]).on("click", function() {
          if (playing) {
              var plateArr = this;
              if (this.innerhtml == goodSushiImg) {
                  score+10;
              }
              else if(this.innerhtml == amazingSushiImg){
                 score+20;
              }
              else if(timeSet === 0){
                  gameOver();
          	}
              keepScore();
          }
      })
  }

// setInterval(populateGoodSushi, 3000);
// setTimeout(populateGoodSushi, 5000);

keepTime();
});
