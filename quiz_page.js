player_one_var = localStorage.getItem("player_one");
player_two_var = localStorage.getItem("player_two");

score_one = 0;
score_two = 0;

document.getElementById("player1_name").innerHTML = player_one_var;
document.getElementById("player2_name").innerHTML = player_two_var;

document.getElementById("p1_score").innerHTML = ": " + score_one;
document.getElementById("p2_score").innerHTML = ": " + score_two;

document.getElementById("question_turn").innerHTML = "Question Turn: " + player_one_var;
document.getElementById("answer_turn").innerHTML = "Answer Turn: " + player_two_var;

function send() {
number1 = document.getElementById("number").value;
number2 = document.getElementById("number2").value;

question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
input_box = "<br>Answer : <input type='text' id='check_answer'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row =  question_number + input_box + check_button ; 
document.getElementById("output").innerHTML = row;
document.getElementById("number1").value = "";
document.getElementById("number2").value = "";
}