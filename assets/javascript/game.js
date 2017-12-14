// generate a random number for the computer to use
var cpuNumber = Math.floor((Math.random()*120) + 19);
// The crystals need to generate a random number also
var crystalNumber1 = Math.floor((Math.random()* 12)+ 1);
var crystalNumber2 = Math.floor((Math.random()* 12)+ 1);
var crystalNumber3 = Math.floor((Math.random()* 12)+ 1);
var crystalNumber4 = Math.floor((Math.random()* 12)+ 1);
// The score of the random number needs to be stored
var score = 0;
// The wins and losses need to be stored;
var wins = 0;
var losses = 0;

document.getElementById("totalscore").innerHTML = score;
document.getElementById("winscount").innerHTML = ("wins: " +wins);
document.getElementById("lossescount").innerHTML = ("losses: " + losses);

$("#winscount").text(wins);
$("lossescount").text(losses)
function start(){
	document.onclick(crystalNumber);
}

// for the wins counter
function win(){
	win++;
	$("winscount").text(wins);
}
// for loss count
function lose(){
	losses++;
	$(lossescount).text(losses);
}
$("#red").on("click", function(){
	score = score + crystalNumber1;
		$("#totalscore").text(score);
		if (score == cpuNumber){
			win();
		}
		else if (score > cpuNumber){
			lose();
		}
})
$("#blue").on("click", function(){
	score = score + crystalNumber2;
		$("#totalscore").text(score);
		if (score == cpuNumber){
			win();
		}
		else if (score > cpuNumber){
			lose();
		}
})
$("#yellow").on("click", function(){
	score = score + crystalNumber3;
		$("#totalscore").text(score);
		if (score == cpuNumber){
			win();
		}
		else if (score > cpuNumber){
			lose();
		}
})
$("#green").on("click", function(){
	score = score + crystalNumber4;
		$("#totalscore").text(score);
		if (score == cpuNumber){
			win();
		}
		else if (score > cpuNumber){
			lose();
		}
})