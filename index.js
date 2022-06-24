var n = Math.floor(Math.random() * 100) + 1;

function loveCalculator() {

var yourName = document.querySelector(".yourname").value;
var theirName = document.querySelector(".theirname").value;

 if (n > 75) {
document.querySelector(".textresult").innerHTML = yourName + " & " + theirName +  ", Your Love score is " + n + "%." + " Your Love can move mountains, Hold on to each other.";
 }
 else if (n > 35 && n < 75) {
    document.querySelector(".textresult").innerHTML = yourName + " & " + theirName +  ", Your Love score is " + n + "%." + " Your Love could use a little work, more understanding and Patience.";
     }
     if (n < 35) {
        document.querySelector(".textresult").innerHTML = yourName + " & " + theirName +  ", Your Love score is " + n + "%." + " No Love found, get a job.";
     }
       
     }
    
