name = prompt("Please enter your name")
alert ("hello" + name);
// welcome alert. Short intro//
alert ("Welcome. To begin using the calculator please select either (1) for basic or (2) for advanced use");

var user_choice = prompt("Chose between (1) or (2)?");

//asking for user input
if (user_choice === "1") {
  alert ("you have selected the advanced version ");
}else
num1 = prompt ("Advanced: Input first number");

alert ("would you like to use power or square root?")
// alert("Advance: Input another number")
num2 = prompt("Advance: Now input another number");
alert (num1 +   num2);




{
  alert ("you have chosen the basic version");
  //ask user for two numbers
   num1 = prompt ("Basic Now input one number");
  alert("Basic: Now input another number")
   num2 = prompt("Basic: Now input another number");
  alert (num1 +   num2);
  // //users has the choice of choosing the operation for the sum of the numbers input previously
  {
      var text;
      var operators = prompt("Please chose an operator: (1) = subtraction (2) = addition, (3) = multiplication, (4) divison");
      switch(operators) {
          case "-":
          text = "You have chosen subtraction";
          break;
      case "+":
          text = "You have chosen addition";
          break;
          case "*":
          text = "You have chosen multiplication";
          break;
          default:
          alert ("Please select one of the four mentioned previously")

      }
    }
}


var sum = "num1 + operators + num2"
alert (num1 + operators + num2);














// / Chapter One //
// var name = prompt("Hello, enter your name: ");
// alert ("hello, " + name);
//
// var choice = prompt("Do you want to apply for Sparta Global?: (1)Yes (2)No");
//
// if (choice == "1") {
//  alert("congratulations " + name + " we are very interested in your CV and would like to take you to the next stage of a phone interview! We will phone you next week!");
// } else if (choice == "2") {
//  alert("Not sure why you would say no...");
//  throw "goodbye";
// }
//
// // Chapter Two //
// var phone_ring = prompt("*ring, ring, ring!!* " + name + " answers the call. Do you tell them?:(1)I just want the money, (2)Tell them your experiences and your passion to work at Sparta (3)Decide to hang up the phone");
//
// if (phone_ring == "2") {
//  alert("Congratulations " + name + " you are invited to our sparta day!")
// } else if (phone_ring == "1") {
//  alert("Unfortunately you did not make it to the next stage :disappointed: ")
//  throw "try again in the next 3 months";
// } else if (phone_ring == "3") {
//  alert("Decide to hang up the phone");
//  throw "try again in the next 3 months";
// }
// // Chapter 3 //
// var global_day = prompt("You attend the Sparta Global day assessment. Do you decide?:(1) To walk out during the assessment, (2)Take part in the group activities and answer all questions as best as you can (3)Choose to sweet talk the assessment leader");//
