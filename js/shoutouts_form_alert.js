function validateForm() {
    var x = document.forms["shoutbox_myForm"]["user"].value;
    var y = document.forms["shoutbox_myForm"]["message"].value;
    if (x == "" || y == "") {
        document.getElementById("error_message").innerHTML = "Please fill in your name and a message";
        document.getElementById("error_message").style.background = "red";
        document.getElementById("error_message").style.color = "white";
        document.getElementById("error_message").style.padding = "5px";
        document.getElementById("error_message").style.marginBottom = "20px";
        return false;
    }
}