(function printLetterByLetter(destination, message, speed) {
    var i = 0;
    var RandomComment = [
  "You should think about getting a new haircut."
, "There is something on your shoulder."
, "Did you choose that outfit?"
, "I like trains."
, "Using your phone 30 minutes before going to bed is not good for your sleep."
, "What about that gym membership you're still paying for?"
, "It looks like you need some extra vitamins."
, "Have you had enough sleep?"
, "Maybe it is a smart idea to stop drinking coffee."];
    var destination = "comment";
    var message = RandomComment[Math.floor(Math.random() * RandomComment.length)];
    var speed = 60;
    var interval = setInterval(function () {
        document.getElementById(destination).innerHTML += message.charAt(i);
        i++;
        if (i > message.length) {
            clearInterval(interval);
        }
    }, speed);
}());