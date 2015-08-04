
// #START AND RESTART GAME

$(document).ready(function() {
  var position1 = 1, position2 = 1;

    function restart() {
      position1 = 1;
      position2 = 1;

      $("#player1_box > td.active").removeClass('active');
      $("#player1_box > td").first().addClass('active');
      $("#player2_box > td.active").removeClass('active');
      $("#player2_box > td").first().addClass('active');

      document.querySelector('.result1').innerHTML = "Player 1 - Position " + position1;
      document.querySelector('.result2').innerHTML = "Player 2 - Position " + position2;
      document.querySelector('.winner').innerHTML = ""
    }

  $(document).ready(function() {
    $('button#button1').click(function(){
      restart();
      });
  });


// move_one_position OF PLAYER
  $(document).on('keydown', function(event) {
    function move_one_position(person, position) {
      if (person == 'player1'){
        $("#player1_box > td.active").removeClass('active').next().addClass('active');
      }
      else {
        $("#player2_box > td.active").removeClass('active').next().addClass('active');
      }
      position = position + 1;
      return position;
    }


// #IF PRESS UP/DOWN KEY
    var code = event.keyCode || event.which;
    if (position1 == 15) {
      document.querySelector('.result1').innerHTML = "Player 1 - Position " + position1;
      alert( "WINNER: PLAYER 1" );
      document.querySelector('.winner').innerHTML = "Previous Game Winner: Player 1!";
    }
    else if (position2 == 15) {
      document.querySelector('.result2').innerHTML = "Player 2 - Position " + position2;
      alert( "WINNER: PLAYER 2" );
      document.querySelector('.winner').innerHTML = "Previous Game Winner: Player 2!";
    }
// https://www.codecademy.com/courses/web-beginner-en-JwhI1/2/4?curriculum_id=50a3fad8c7a770b5fd0007a1
    else if(code == 38) {
      position1 = move_one_position('player1', position1);
      document.querySelector('.result1').innerHTML = "Player 1 - Position " + position1;
    } 

    else if(code == 40) {
      position2 = move_one_position('player2', position2);
      document.querySelector('.result2').innerHTML = "Player 2 - Position " + position2;
    }
    else { }
  });
});
