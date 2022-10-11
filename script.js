var mutualList = ["What music do you listen to?","Where do you see yourself in five years?", "What are your hobbies?", "What's your favorite holiday?", "What was the last book you read?", "What is your favorite movie?"];
var myMutuals = document.getElementById("myMutuals");
myMutuals.addEventListener("click", displayQ);

var question = document.getElementById("question");

var count = 0;

function displayQ() {
  question.innerHTML = mutualList[count];
  count = count+=1; // equals to count++;
  //resets count to 0 if count goes over the quoteList's sizes
  if (count == mutualList.length) {count = 0;}
}

var friendList = ["What is your favorite childhood memory?", "How would your friends describe you?", "What is your first impression on your friend?", "Who would you want to play you in a movie of your life?", "What song would you say best sums you up?", "What's been your happiest memory this past year?", "What title would you give this chapter in your life?"];
var myFriends = document.getElementById("myFriends");
myFriends.addEventListener("click", displayQ2);

function displayQ2() {
  question.innerHTML = friendList[count];
  count = count+=1; // equals to count++;
  //resets count to 0 if count goes over the quoteList's sizes
  if (count == friendList.length) {count = 0;}
}

var homieList = [" If you could go back in time to change one thing, what would it be?", "What motivates you to work hard?", "What is your proudest accomplishment?", "What do you think our most important similarities are?", "How would you describe me to a stranger?", "If you could gain any one ability or quality you admire in someone else, which would you choose?"];
var myHomies = document.getElementById("myHomies");
myHomies.addEventListener("click", displayQ3);

function displayQ3() {
  question.innerHTML = homieList[count];
  count = count+=1; // equals to count++;
  //resets count to 0 if count goes over the quoteList's sizes
  if (count == homieList.length) {count = 0;}
}

