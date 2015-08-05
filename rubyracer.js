
// #START AND RESTART GAME

$(document).ready(function(){
  var position1 = 1, position2 = 1;

 // 1ST PART - RESTART / START
  function restart(){
    position1 = 1;
    position2 = 1;

    $("#player1_strip > td.active").removeClass('active');
    $("#player1_strip > td").first().addClass('active');
    $("#player2_strip > td.active").removeClass('active');
    $("#player2_strip > td").first().addClass('active');

    document.querySelector('.result1').innerHTML = "Player 1 - Position " + position1;
    document.querySelector('.result2').innerHTML = "Player 2 - Position " + position2;
    document.querySelector('.winner').innerHTML = ""
  }


  $('button#1').click(function(){
    restart();
  });



// 2ND PART - IF PRESS UP/DOWN KEY
// move_one_position OF PLAYER (USE KEYUP ALSO WORKS)
  $(document).on('keydown', function(event){
    function update_player_position(person, position){
      if (person == 'player1'){
        $("#player1_strip > td.active").removeClass('active').next().addClass('active');}
      else {
        $("#player2_strip > td.active").removeClass('active').next().addClass('active');}
      position = position + 1;
      return position;
    }

    var code = event.keyCode || event.which;
    if (position1 == 15){
      document.querySelector('.result1').innerHTML = "Player 1 - Position " + position1;
      alert( "WINNER: PLAYER 1" );
      document.querySelector('.winner').innerHTML = "Previous Game Winner: Player 1!";
    }
    else if (position2 == 15){
      document.querySelector('.result2').innerHTML = "Player 2 - Position " + position2;
      alert( "WINNER: PLAYER 2" );
      document.querySelector('.winner').innerHTML = "Previous Game Winner: Player 2!";
    }
// https://www.codecademy.com/courses/web-beginner-en-JwhI1/2/4?curriculum_id=50a3fad8c7a770b5fd0007a1
    else if(code == 38){
      position1 = update_player_position('player1', position1);
      document.querySelector('.result1').innerHTML = "Player 1 - Position " + position1;
    } 

    else if(code == 40){
      position2 = update_player_position('player2', position2);
      document.querySelector('.result2').innerHTML = "Player 2 - Position " + position2;
    }
    else { }
  });

});
