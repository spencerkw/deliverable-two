/**
* Front-End Deliverable Part 2
* By Spencer Keashly-Warters
*/

var eventType = prompt("What type of event are you going to? (casual, semi-formal, or formal)");
var tempFahr = prompt("What is the temperature (in F)?");

var eventClothing = "";
switch (eventType) {
case "casual":
  eventClothing = "something comfy";
  break;
case "semi-formal":
  eventClothing = "a polo";
  break;
case "formal":
  eventClothing = "a suit";
  break;
default:
  eventClothing = "unknown";
}

var tempClothing = "";
tempFahr = parseInt(tempFahr, 10);
if (tempFahr < 54) {
  tempClothing = "a coat";
} else if (tempFahr <= 70) {
  tempClothing = "a jacket";
} else {
  tempClothing = "no jacket";
}

var result = "Since it is " + tempFahr +
  " degrees and you are going to a " + eventType +
  " event, you should wear " + eventClothing +
  " and " + tempClothing + ".";
console.log(result);
