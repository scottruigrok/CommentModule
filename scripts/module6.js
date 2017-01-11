(function printLetterByLetter() {
    var frequency = 3000;
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
    var speed = 100;

    function randomCommentTimer() {
        document.getElementById(destination).innerHTML = "";
        var typeSpeed = setInterval(function () {
            document.getElementById(destination).innerHTML += message.charAt(i);
            i++;
            if (i > message.length) {
                clearInterval(typeSpeed);
                message = comments[Math.floor(Math.random() * comments.length)];
                i = 0;
                callComment = setTimeout(randomCommentTimer, frequency);
            }
        }, speed);
    }
    var callComment = setTimeout(randomCommentTimer, frequency);
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