$(function(){
  $('#computerPick').hide();

  $('#victory').hide();

  $('#tie').hide();

  $('#lose').hide();


  var arrayChoices = ['Pierre', 'Feuille', 'Ciseaux'];
  var gamerChoice = null;
  var gamerWin = 0;
  var counterGame = 0;
  var percentWin = 0;
  $('.choice').draggable({
    revert : true,
    snap : '#droppable',
    snapMode: 'inner'
  });
  $('#playerRock').mouseup(function(){
    gamerChoice = 0;
    console.log('Choix du joueur' + gamerChoice);
  });
  $('#playerPaper').mouseup(function(){
    gamerChoice = 1;
    console.log('Choix du joueur' + gamerChoice);
  });
  $('#playerSissors').mouseup(function(){
    gamerChoice = 2;
    console.log('Choix du joueur' + gamerChoice);
  });
  $( "#droppable" ).droppable({
    accept: '.answer',
    drop : function(event, ui){
      counterGame++;
      if (counterGame == 10) {
        alert('la partie est terminée');
      } else {
      var computerChoice = Math.floor(Math.random() * arrayChoices.length);
      console.log('Choix de l\'ordinateur' + computerChoice);
      //j'affiche l'image du choix du computer
      if (computerChoice== 0) {
        $('#computerRock').show();
      } else if (computerChoice== 1) {
       $('#computerPaper').show();
     } else if (computerChoice== 2) {
        $('#computerSissors').show();
      }
      //Je compare les variables
      if(gamerChoice == computerChoice){
        alert('Egalité');
      } else if((gamerChoice == 0 && computerChoice == 2)||(gamerChoice == 1 && computerChoice == 0) || (gamerChoice == 2 && computerChoice == 1)){
        gamerWin++;
        alert('Gagné');
      } else{((gamerChoice == 2 && computerChoice == 0)||(gamerChoice == 0 && computerChoice == 1) || (gamerChoice == 1 && computerChoice == 2))
        alert('Perdu');
      }
    }
    }

  });
  if(counterGame == 10){
    percentWin = gamerWin * 100 / counterGame;

    $('#victory').find('p').html('Bravo, vous avez gagné. Pourcentage de réussite : ' + percentWin + '%').show();
    $('#tie').find('p').html('Vous êtes Aex equo !' ).show();
    $('#lose').find('p').html('Désolé vous avez perdu !').show();
  }
 });
