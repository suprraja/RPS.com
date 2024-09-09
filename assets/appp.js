
const game = () => {
    let pScore = 0;
    let cScore = 0;
  
    //Start the Game
    const startGame = () => {
      const playBtn = document.querySelector(".intro button");
      const introScreen = document.querySelector(".intro");
      const match = document.querySelector(".match");
  
      playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
      });
    
    };
    const playmatch= ()=>{
      const options = document.querySelectorAll(".options button")
      console.log(options)
      const playerhand = document.querySelector(".player-hand")
      const computerhand = document.querySelector(".computer-hand")
      const hands = document.querySelectorAll(".hands img")

      hands.forEach (hand => {
        hand.addEventListener("animationend" , function(){
          this.style.animation = '';
        });
      });
      let computeroptions = ['rock','paper','scissors']
      options.forEach(option =>{
        option.addEventListener("click", function() {
          let computerrandom= Math.floor(Math.random() * 3)
          let computerchoice = computeroptions[computerrandom]
          console.log(computerchoice)

          setTimeout(()=>{
            compare(this.textContent,computerchoice);
          playerhand.src = `${this.textContent}.png`;
          computerhand.src = `${computerchoice}.png`;
          },2000)

          playerhand.style.animation = "shakePlayer 2s ease";
          computerhand.style.animation = "shakeComputer 2s ease ";


        
        });
      });


    };
    const updatescore = () =>{
      let playerscore = document.querySelector(".player-score p")
      let computerscore = document.querySelector(".computer-score p")
      playerscore.textContent = pScore
      computerscore.textContent = cScore
    }

    const compare = (playerchoice,computerchoice) => {

      const winner = document.querySelector(".winner");

      if (playerchoice === computerchoice){
        winner.textContent = 'It is a tie'
        return;
      }
      if (playerchoice === 'rock' ){
        if(computerchoice === 'scissors'){
          winner.textContent= 'Player wins!';
          pScore++
          updatescore();
          return;
        }
        else{
          winner.textContent = 'Computer wins';
          cScore++
          updatescore();

          return;
        }
      }
     
      if (playerchoice === 'rock' ){
        if(computerchoice === 'paper'){
          winner.textContent= 'computer wins!';
          cScore++
          updatescore();

          return;
        }
        else{
          winner.textContent = 'Player wins';
          pScore++
          updatescore();

          return;
        }
      }
      if (playerchoice === 'paper' ){
        if(computerchoice === 'scissors'){
          winner.textContent= 'computer wins!';
          cScore++
          updatescore();
          return;
        }
        else{
          winner.textContent = 'Player wins';
          pScore++
          updatescore();

          return;
        }
      }    
      if (playerchoice === 'scissors' ){
        if(computerchoice === 'paper'){
          winner.textContent= 'player wins!';
          pScore++
          updatescore();

          return;
        }
        else{
          winner.textContent = 'computer wins';
          cScore++
          updatescore();

          return;
        }
      }      
    };


    
    startGame();
    playmatch();
  
  };
game();

