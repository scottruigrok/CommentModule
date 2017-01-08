(function printLetterByLetter() {
    var frequency = 6000;
    var destination = "comment";
    var comments = [
  "You should think about getting a new haircut."
, "There is something on your shoulder."
, "Did you choose that outfit?"
, "I like trains."
, "Using your phone 30 minutes before going to bed is not good for your sleep."
, "What about that gym membership you're still paying for?"
, "It looks like you need some extra vitamins."
, "Have you had enough sleep?"
, "Maybe it is a smart idea to stop drinking coffee."];
    var message = comments[Math.floor(Math.random() * comments.length)];
    var i = 0;

    function typeWriterEffect() {
        document.getElementById(destination).innerHTML += message.charAt(i);
        i++;
    }
    var speed = 100;

    function typeSpeed() {
        setInterval(typeWriterEffect, speed);
    }
    var randomCommentTimer = setInterval(function () {
        typeSpeed();
        document.getElementById("firstcomment").innerHTML = message;
        if (i > message.length) {
            message = comments[Math.floor(Math.random() * comments.length)];
            document.getElementById(destination).innerHTML = "";
            i = 0;
        }
    }, frequency)
}());
/*Een functie maken die typt
Een functie maken die kiest
Een functie maken die deze aanroept
Een functie maken die dit in een interval doet
       setInterval(document.getElementById(destination).innerHTML = "", 4000);
 function repeat() {
       setInterval(function () {
           document.getElementById(destination).innerHTML = "";
           i = 0;
      }, 4000);
   }

    function repeat() {
        setTimeout(function () {
            message = Comments[Math.floor(Math.random() * Comments.length)];
            document.getElementById(destination).innerHTML = "";
            i = 0;
        }, 4000)
    }


*/