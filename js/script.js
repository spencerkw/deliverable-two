/**
 * Front-End Deliverable Part 2
 * By Spencer Keashly-Warters
 */

//ask for the event type
var eventType = prompt("What type of event are you going to? (casual, semi-formal, or formal)");
//if the event type is invalid, ask again until it a valid option is entered
while (!(eventType === "casual" || eventType === "semi-formal" || eventType === "formal")) {
  eventType = prompt("Please enter a valid type. (casual, semi-formal, or formal)");
}

//ask for the temperature, then make it a number
var tempFahr = prompt("What is the temperature (in F)?");
tempFahr = parseInt(tempFahr, 10);
//if the temp isn't a number, ask again until a number is entered
while (isNaN(tempFahr)) {
  tempFahr = prompt("Please enter a valid numeric temperature (in F).");
  tempFahr = parseInt(tempFahr, 10);
}

//determine the clothing based on event type
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

//determine the clothing based on temperature
var tempClothing = "";

if (tempFahr < 54) { //less than 54 degrees
  tempClothing = "a coat";
} else if (tempFahr <= 70) { //between 54 and 70 degrees
  tempClothing = "a jacket";
} else { //more than 70 degrees
  tempClothing = "no jacket";
}

//construct the result string and output to console
var result = "Since it is " + tempFahr +
  " degrees and you are going to a " + eventType +
  " event, you should wear " + eventClothing +
  " and " + tempClothing + ".";
console.log(result);
