let c=Math.ceil(Math.random()*10);let atp=0;
function checkguess(){
    let guess=Number(document.getElementById('guessField').value);
    if(guess==c){
        document.getElementById("result").innerHTML='Congratulations! You have guessed the correct number';
    }
    else{
        document.getElementById("result").innerHTML='Sorry! Try again<br>Here The Hint: ';
        if(guess>c){
            document.getElementById("result").innerHTML+='Try a smaller number';
        }
        else{
            document.getElementById("result").innerHTML+='Try a larger number';
        }
    }
    atp++;
    document.getElementById("attempts").innerHTML='Attempts: '+atp;

}
function reset(){
    c=Math.ceil(Math.random()*10);
    atp=0;
    document.getElementById("result").innerHTML='';
    document.getElementById("guessField").value='';
    document.getElementById("attempts").innerHTML='';
}
document.querySelector('button.guessbtn').addEventListener('click',checkguess);
document.querySelector('button.restartbtn').addEventListener('click',reset);



