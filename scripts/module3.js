(function printLetterByLetter() {
    // This is a module which you can use for your website. Load the module by putting this in the body tag: onload="printLetterByLetter();" .
    var frequency = 6000;
    // You can change the frequency of which the comments refresh here. 1000 = 1 second
    var destination = "comment";
    //  Here you can choose the destination div. The comments will appear in the div that is called out here.
    var comments = [
        //This is the place where you can add, remove or change comments. Dont forget to use commas.
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
    // The 'message' variable chooses a random comment from the 'comments'array.
    var i = 0;
    // This variabele will be used for the coming Function. Here it is set to 0.
    function typeWriterEffect() {
        // This function uses the .charAt method and the variable i to write the comment letter by letter. It writes one letter of the comment and sums up the variable i by 1. It repeats this untill the comment is fully typed out.
        document.getElementById(destination).innerHTML += message.charAt(i);
        i++;
    }
    var typespeed = 100;
    // This variable will be used in the coming function. This determines the typespeed of which the letters appear from the comment.
    function typeWriter() {
        // This function combines the function typeWriterEffect with the variable typespeed to type out the comment that is chosen at random by the variable message.
        setInterval(typeWriterEffect, typespeed);
    }
    var randomCommentTimer = setInterval(function () {
        // This variable is the one that actually makes the comment show up on the .html page. It uses the function typeWriter to type a random comment onto the html page in the chosen div.
        // After it has done this, it will do execute this variable again because of the closed function/module in the chosen time within the variable frequency.
        typeWriter();
        document.getElementById("firstcomment").innerHTML = message;
        //This will show the previous comment. 
        //I put it here while coding to show if the function actually refreshed at the intented time, and it worked. And now it looks good.
        if (i > message.length) {
            // This if statement will only be called when the variable i is bigger than the length of the comment. This means that the comment is now fully typed on the screen. So it is time for the next comment to appear.
            message = comments[Math.floor(Math.random() * comments.length)];
            // Here the variable message gets a new random comment to be typed out.
            document.getElementById(destination).innerHTML = "";
            // This will set the chosen div to be blank. This has to be done so there is room for the new comment.
            i = 0;
            // The variable i is set back to 0. This will give the variable room to count the next comment that is going to be typed out. 
        }
    }, frequency)
}());