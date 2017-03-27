
/* DOES NOT WORK, LIKELY DUE TO NOT POSTING TO PHP
   FOR FORM DATA HANDLING AND RETRIEVING VALUES FROM THERE

A temporary function to check hardcoded login information
function passwordControl(text, password)
{
    //Variable declarations for use in this function.
    var x;
    var y;
    var i;
    var j;

    //Variables are initialized prior to use in the method
    i = "admin";
    j = "password";
    x = text;
    y = password;

    //Method compares entered values to hardcoded values and either
    //sends users on to lettucegallery.html or delivers an error.
    if (x == i && y == j)
    {
        window.location.href = "lettucegallery.html";
    }
    else
    {
        document.getElementById("inputerror").innerHTML = "You have entered a wrong " +
            "username and password combination. Please try again."
    }
}
*/

/*Function that reads all text input in an HTML element and saves them
in variable "text". After which an if loop checks the input in text against
a hardcoded username and password*/
function inputReader() {
    var x = document.getElementById("loginform");
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++)
    {
        text += x.elements[i].value;
    }

    document.getElementById("outputtester").innerHTML =text;

    if (text == "adminpassword")
    {
        window.location.href = "lettucegallery.html";
    }
    else
    {
        document.getElementById("inputerror").innerHTML = "You have entered a wrong " +
            "username and password combination. Please try again."
    }

}

//A function that takes one to the login screen
function goToLogin()
{
    window.location.href = "lettucelogin.html";
}

//A function that takes one to the registration screen
function goToRegistration()
{
    window.location.href = "lettuceregister.html";
}