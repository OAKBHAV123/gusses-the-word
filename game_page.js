player1_name= localStorage.getItem("player1");
player2_name=localStorage.getItem("player2");

document.getElementById("player1_name").innerHTML= player1_name +":";
document.getElementById("player2_name").innerHTML=player2_name + ":";

player1_score = 0;
player2_score = 0;

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Qusetion turn : " + player1_name;
document.getElementById("player_ans").innerHTML="Ans turn : " + player2_name;

function send()
{
   get_word=document.getElementById("word").value 
   word=get_word.toLowerCase();
   console.log(word);

charA1 = word.charAt(1);
console.log(charA1);

mid=Math.floor(word.length /2);
charAt_mid=word.charAt(mid);
console.log(charAt_mid);

end=word.length -1;
charAt_end=word.charAt(end);
console.log(charAt_end);

remove_1=word.replace(charA1,"_");
remove_mid=remove_1.replace(charAt_mid,"_");
remove_end=remove_mid.replace(charAt_end,"_");
console.log(remove_end);

question_word="<h4 id='word_display'>Question : " + remove_end + "</h4>" ;
ans="<br>Ans. <input type='text' id='input_check_box'>";
check_button="<br><br> <button class='btn btn-primary' onclick='check()'>Check</button>";
row= question_word + ans + check_button;
document.getElementById("output").innerHTML= row;
document.getElementById("word").value="";
}

question_turn= "player1";
ans_turn="player2";

function check()
{
   get_ans=document.getElementById("input_check_box").value;
   ans_lower=get_ans.toLowerCase();
   console.log(ans_lower);

   if (word == ans_lower)
   {
      if(ans_turn == "player1")
      {
         player1_score = player1_score + 1;
         document.getElementById("player1_score").innerHTML= player1_score; 
      }
      else 
      {
         player2_score=player2_score + 1;
         document.getElementById("player2_score").innerHTML=player2_score;
      }
   }
   
   if(question_turn == "player1")
   {
      question_turn = "player2"
      document.getElementById("player_question").innerHTML="question turn : "+player2_name;
   }
   else
   {
      question_turn = "player1"
      document.getElementById("player_question").innerHTML="question turn : "+ player1_name;
   }

   if(ans_turn == "player1")
   {ans_turn = "player2"
   document.getElementById("player_ans").innerHTML="ans turn : "+player2_name;
   }
   else
   {
      ans_turn ="player1"
      document.getElementById("player_ans").innerHTML="ans turn : " + player1_name;
   }
   document.getElementById("output").innerHTML="";
   }




