  let score = {
             wincount:0,
            tiecount:0,
            loosecount:0
        };
            const scoresever=JSON.parse(localStorage.getItem('score'))
        if(scoresever){
     score=scoresever;
        }
        updateScoreElements();
      
            function pickcomputermove(){
                        randonnum= Math.random();
                            computermove='';
                            if(randonnum>0 && randonnum<1/3){
                                computermove=document.querySelector('.imag1').innerHTML;
                                democomputer=computermove;
                                computermove='rock';
                            }else if(randonnum>1/3 && randonnum<2/3)
                            { 
                                computermove=document.querySelector('.imag2').innerHTML;
                                democomputer=computermove;
                                computermove='Paper';
                                
                            }else if(randonnum>2/3 && randonnum<1)
                            {
                                computermove=document.querySelector('.imag3').innerHTML;
                                democomputer=computermove;
                                computermove='scissor';
                            }
                            return computermove;
            }
            var stopinterval;
            function AutoPlay(){
               var autoplaytext= document.querySelector('.autoplay').innerHTML;
               if(autoplaytext === 'Auto Play'){
                         stopinterval= setInterval(function(){
                                var playerplay=pickcomputermove();
                                    displayresult(playerplay);
                                },1000)
               document.querySelector('.autoplay').innerHTML="STOP Play"            
               }else{
                 clearInterval(stopinterval);
                 document.querySelector('.autoplay').innerHTML="Auto Play"    
               }
                
  }
            function displayresult(playerplay)
            {
                    computermove=pickcomputermove();
                        let result='';
                        if(playerplay==='scissor' )
                        {
                            if(computermove === 'rock')
                            {
                                result='lose';
                            }else if(computermove === 'Paper'){
                                result='win';
                            }
                            else if(computermove === 'scissor'){
                                result='tie';
                            }
                            playerplay=document.querySelector('.imag3').innerHTML;
                        }
                       else if(playerplay==='Paper' )
                        {
                            if(computermove === 'rock')
                            {
                                result='win';
                            }else if(computermove === 'Paper'){
                                result='tie';
                            }
                            else if(computermove === 'scissor'){
                                result='loose';
                            }
                            playerplay=document.querySelector('.imag2').innerHTML;
                        }
                       else if(playerplay==='rock' )
                        {
                            if(computermove === 'rock')
                            {
                                result='tie';
                            }else if(computermove === 'Paper'){
                                result='loose';
                            }
                            else if(computermove === 'scissor'){
                                result='win';
                            }
                            playerplay=document.querySelector('.imag1').innerHTML;
                        }
                        if(result === 'win')
                        {    
                            score.wincount += 1;
                        }else if(result === 'tie'){
                           score.tiecount += 1;
                        }else{
                           score.loosecount += 1;
                        }
                        localStorage.setItem('score',JSON.stringify(score));
                        updateScoreElements();
                        document.querySelector('.game_result').innerHTML=`You ${result}.`;
                        document.querySelector('.computerpic').innerHTML=`YOU PICKED:-  ${playerplay}    ${democomputer} -:COMPUTER PICKED`;
        }
        function resetscore(){
            score={
                wincount:0,
                loosecount:0,
                tiecount:0
            }
            updateScoreElements();
            localStorage.removeItem('score');
        }
            function updateScoreElements(){
            document.querySelector('.score').innerHTML=`WIN: ${score.wincount}, LOOSE: ${score.loosecount}, TIE: ${score.tiecount}`;
          }
