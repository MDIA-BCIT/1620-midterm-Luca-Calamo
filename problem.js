/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, log out "Access Granted!"
- If the user's input does not match, log out "Access Denied!"
- If the user's input is "forgot", log out "Here is a hint"
- If the user's input is "reset", log out "Let's reset your account"

Invoke examples of the function that fullfil each condition listed above. Feel free to work locally using node, and then paste your code into this file when it runs.

CHALLENGE
- If the password set is "forgot" or "reset", aside from "Access Granted", also log: "This password you set should not be used because it glitches the system".
- If the password is less than 5 characters, log out "Your password is too short!".
*/

let password = "okiedokie";


function passCheck(input, correctPassword) {
    if (input === correctPassword) {
        console.log("Access Granted")
    } else if (input === "forgot") {
        console.log("Here is a hint")
    } else if (input === "reset") {
        console.log("Let's reset your account")
    } else if (input.length < 5) {
        console.log("Your password is too short!")
    } else {
        console.log("Access denied")
    }
}




passCheck("okiedokie", password);
//Password matches//

passCheck("forgot");
//forgot password//

passCheck("reset");
//reset password//

passCheck("hooray");
//wrong password//

passCheck("dope");
//password too short//

/*for Challenge 1 I think you have to set forgot and reset as paramaters instead of strings like I was doing. 
I couldnt come up with a solution to keep them as strings to and have them print 2 diffrent outputs.


//not sure which way is proper so did both just in case//


/*
function passCheck (input, correctPassword, passwordLength) {
    if (input === correctPassword) {
        return "Access Granted"
    } else if  (input === "forgot") {
        return "Here is a hint"
    } else if  (input === "reset") {
        return "Let's reset your account"
    } else if (input.length  < 5) {
        return "Your password is too short!"
    } else {
        return "Access denied"
    }
} */



/*console.log(passCheck("okiedokie", password));
//Password matches//

console.log(passCheck("forgot"));
//forgot password//

console.log(passCheck("reset"));
//reset password//

console.log(passCheck("hooray"));
//wrong password//

console.log(passCheck("dope"));
//password too short//
*/