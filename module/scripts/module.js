(function printLetterByLetter() {
    /* This is a module which you can implement into your website. Load the module 
     */
    var destination = "comment";
    //  Here you can choose the destination div where you want the snappy comments to display.
    var frequency = 1000;
    //You can change the frequency of which the comments change here. 1000 = 1 second
    var RandomComment = [
      //Here you can add, remove or change comments. Dont forget to use commas.
  "You should think about getting a new haircut."
, "There is something on your shoulder."
, "Did you choose that outfit?"
, "I like trains."
, "Using your phone 30 minutes before going to bed is not good for your sleep."
, "What about that gym membership you're still paying for?"
, "It looks like you need some extra vitamins."
, "Have you had enough sleep?"
, "Maybe it is a smart idea to stop drinking coffee."];
    var RandomCommentTimer = setInterval(function () {
        var message = RandomComment[Math.floor(Math.random() * RandomComment.length)];
        //The 'message' variable chooses a random comment from the array.
        document.getElementById(destination).innerHTML = message;
    }, frequency)
}());