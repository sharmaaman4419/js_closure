//question 1 

function nonsense(string) {
 var blab = function() {
    alert(string);
}
return blab();
}
setTimeout(nonsense, 2000, "welcome");
//question 1.2

function nonsense(string) {
    var blab = function() {
        alert(string);
    }
    return blab;
}
var blabLater = nonsense("hello");
var blabAgainLater = nonsense("welcome");
// question 1.3

blabAgainLater gives output "hello";
blabLater gives output "welcome";
// question 2

var lastNameTrier = function(firstName){   
     var innerFunction = function(lastName) {
        console.log(firstName+" "+lastName);
     }
     return innerFunction;
 };
 var firstName = lastNameTrier("Aman");
 firstName("sharma");
