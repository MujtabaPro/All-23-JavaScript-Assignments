// // Answer 1 

// var Name = prompt("Enter Your Name");
// alert("Hi " + Name);

// // Answer 2

// var Name = +prompt("Enter Table Number");

// document.writeln(Name + "x " + 1 + "= " + Name * 1 + "<br>");
// document.writeln(Name + "x " + 2 + "= " + Name * 2 + "<br>");
// document.writeln(Name + "x " + 3 + "= " + Name * 3 + "<br>");
// document.writeln(Name + "x " + 4 + "= " + Name * 4 + "<br>");
// document.writeln(Name + "x " + 5 + "= " + Name * 5 + "<br>");
// document.writeln(Name + "x " + 6 + "= " + Name * 6 + "<br>");
// document.writeln(Name + "x " + 7 + "= " + Name * 7 + "<br>");
// document.writeln(Name + "x " + 8 + "= " + Name * 8 + "<br>");
// document.writeln(Name + "x " + 9 + "= " + Name * 9 + "<br>");
// document.writeln(Name + "x " + 10 + "= " + Name * 10 + "<br>");


// // Answer 3

// var Name = prompt("Enter City Name");
// if (Name == "karachi") {
//     alert("Welcome to city of lights")
// } else {
//     alert("Input WronG")
// }

// // answer 4

// var gender = prompt("Enter Gender")
// if (gender == "male") {
//     alert(" Good Morning Sir")
// } else {
//     alert(" Good Morning Ma’am")
// }


// // answer 5

// var color = prompt(" color of road traffic signal")
// if (color == "red") {
//     alert("vehicles must stop")
// } else if (color == "yellow") {
//     alert("vehicles should get ready to move")
// } else {
//     alert("vehicles can move now")
// }

// //  answer 6

// var max_age = prompt("Enter Max Age");
// var current_age = prompt("Enter CnrrenT Age");

// if (current_age <= max_age) {
//     alert("You Are WelCom")
// } else {
//     alert("Not Welcom")
// }

// // answer 7

// var remaining_fuel = +prompt("Please Enter remaining fuel in Car");
// if (remaining_fuel < 0.25) {
//     alert("Please refill the fuel in your car")
// } else {
//     alert("Fuel is sufficient")
// }

// // answer 8

// 8 a
// var a = 4;
// if (++a === 5) {
//     alert("output: given condition for variable a is true");
// }

// // 8B
// var b = 82;
// if (b++ === 83) {
//     alert("output: given condition for variable b is true");
// } else {
//     alert("output: given condition for variable b is false");
// }

// // 8C
// var c = 12;
// if (c++ === 13) {
//     alert("output: condition 1 is true");
// }
// if (c === 13) {
//     alert("output: condition 2 is true");
// }
// if (++c < 14) {
//     alert("output: condition 3 is true");
// }
// if (c === 14) {
//     alert("output: condition 4 is true");
// }

// // 8D
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("output: The cost equals");
// }

// // 8E
// if (true) {
//     alert("output: True");
// }
// if (false) {
//     alert("output: F");
// }

// // 8F
// if ("car" < "cat") {
//     alert("output: car is smaller than cat");
// }

// // Answer 9

// var first_sub = +prompt("Enter First Subject Mark", "English");
// var second_sub = +prompt("Enter SeconD Subject Mark", "Chemistry");
// var third_sub = +prompt("Enter third Subject Mark", "Physics");
// var total_mark = +prompt("Total Marks");
// var obtained_mark = (first_sub + second_sub + third_sub);
// var per = ((obtained_mark / total_mark) * 100);

// if (per >= 80) {
//     document.write("<h1>MarkSheet</h2>" + "Total Marks : " + total_mark + "<br>" + "Marks Obtained : " + obtained_mark + "<br>" + "Percentage : " + per + "<br>" + "Grade : " + "A-one <br>" + "Remarks : " + "Excellent")
// } else if (per >= 70) {
//     document.write("<h1>MarkSheet</h2>" + "Total Marks : " + total_mark + "<br>" + "Marks Obtained : " + obtained_mark + "<br>" + "Percentage : " + per + "<br>" + "Grade : " + "A <br>" + "Remarks : " + "Good")
// } else if (per >= 60) {
//     document.write("<h1>MarkSheet</h2>" + "Total Marks : " + total_mark + "<br>" + "Marks Obtained : " + obtained_mark + "<br>" + "Percentage : " + per + "<br>" + "Grade : " + "B <br>" + "Remarks : " + "You Need Improve")
// } else {
//     document.write("<h1>MarkSheet</h2>" + "Total Marks : " + total_mark + "<br>" + "Marks Obtained : " + obtained_mark + "<br>" + "Percentage : " + per + "<br>" + "Grade : " + "Fail <br>" + "Remarks : " + "Sorry")
// }

// // Answer 10

// var item1Name = prompt("Enter Name Of Item One");
// var item2Name = prompt("Enter Name Of Itme Two");
// var item1Price = +prompt("Enter Price Of Item One");
// var item2Price = +prompt("Enter Price Of Item Two");
// var item1Quantity = +prompt("Enter Quantity of item One");
// var item2Quantity = +prompt("Enter Quantity of item two");
// var shippingCharges = +prompt("Enter ShhippinG CharGes");

// var totalCost = ((item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges);

// document.write("<h2>Shopping Cart</h2>" + "<br/>");
// document.write("Price of " + item1Name + " is " + item1Price + " PKR<br/>");
// document.write("Quantity of " + item1Name + " is " + item1Quantity + "<br/>");
// document.write("Price of " + item2Name + " is " + item2Price + " PKR<br/>");
// document.write("Quantity of " + item2Name + " is " + item2Quantity + "<br/><br/>");
// document.write("Shipping charges: " + shippingCharges + "<br/><br/>");
// document.write("Total cost of your order is: " + totalCost + " PKR<br/>");

// if (totalCost > 2000) {
//     var discount = totalCost - ((totalCost / 100) * 10);
//     document.write("Discounted price is (10%OFF): " + discount + " PKR")
// }

// // Answer 11

// var secret = 5;
// var Input = +prompt("Guess the secret number (between 1-10)");
// if (secret === Input) {
//     alert("Bingo! Correct Answer");
// } else {
//     alert("Not Close Enough To The correct Answer");
// }

// // Answer 12

// var Input = +prompt("Enter A Number");
// if (Input % 3 === 0) {
//     alert(Input + " is divisible by 3 ");
// } else {
//     alert(Input + " is Not divisible by 3 ");
// }

// // answer 13

// var team1 = prompt("Enter Team One Name");
// var team2 = prompt("Enter Team Two Name");
// var team1scores = prompt("Enter Team One Scores");
// var team2scores = prompt("Enter Team two Scores");
// if (team1scores > team2scores) {
//     alert(team1 + " have won the Game")
// } else if (team1scores < team2scores) {
//     alert(team2 + " have Won the Game")
// } else if (team1scores === team2scores) {
//     alert("There Is a Tie")
// }

// // answer 14    

// var string = "Hello Pakistan";
// var number = 92;
// var boolean = true;


// document.write(string + " is a " + typeof(string) + "<br/>");
// document.write(number + " is a " + typeof(number) + "<br/>");
// document.write(boolean + " is a " + typeof(boolean) + "<br/>");

// // answer 15

// var input = +prompt("Enter Number To Check even or odd num....")
// if (input % 2 === 0) {
//     alert(input + " Is Even")
// } else {
//     alert(input + " Is Odd")
// }

// // answer 16

// var temp = +prompt("Enter the temperature");
// if (temp > 40) {
//     alert("It is too hot outside.");
// } else if (temp > 30 && temp <= 40) {
//     alert("The Weather today is Normal.");
// } else if (temp > 20 && temp <= 30) {
//     alert("Today's Weather is cool.");
// } else if (temp > 10 && temp <= 20) {
//     alert("OMG! Today's weather is so Cool.");
// } else {
//     alert("INVALID INPUT");
// }

// // answer 17


// var first_Num = +prompt("Enter First Number");
// var second_Num = +prompt("Enter SeconD Number");
// var operator = prompt("Enter Operator E.g + - * / ");

// if (operator == "+") {
//     res = first_Num + second_Num;
//     alert(first_Num + " + " + second_Num + " is = " + res)
// } else if (operator == "-") {
//     res = first_Num - second_Num;
//     alert(first_Num + " - " + second_Num + " is = " + res)
// } else if (operator == "*") {
//     res = first_Num * second_Num;
//     alert(first_Num + " * " + second_Num + " is = " + res)
// } else if (operator == "/") {
//     res = first_Num / second_Num;
//     alert(first_Num + " / " + second_Num + " is = " + res)
// }

// // answer 18

// var Input = prompt("Please Enter The Day Name")
// if (Input === "Monday" || Input === "Tuesday" || Input === "Wednesday" || Input === "Thursday" || Input === "Friday") {
//     alert(" It,s a Week Day")
// } else if (Input === "Saturday") {
//     alert("It,s Weenked")
// } else if (Input === "Saturday") {
//     alert("Yay! It,s a Holiday")
// } else {
//     alert("Invalid Input")
// }

// // answer 19

// var score = +prompt("Enter your score");
// if (score > 50) {
//     alert("You are passed.");
// } else {
//     alert("Try again!");
// }

// // answer 20

// var a = +prompt("Enter First num");
// var b = +prompt("Enter Second Num");
// if (a > b) {
//     alert("The Greater num OF " + a + " and " + b + " is " + a)
// } else if (b > a) {
//     alert("The Greater num OF " + a + " and " + b + " is " + b)
// } else {
//     alert(a + " and " + b + " are Equal")
// }

// // Answer 21

// var Input = prompt("Enter LanGuage Code E.g 'es' for Spanish 'it' for Italian 'fr' for French");
// if (Input === "es" || Input === "Es" || Input === "ES") {
//     alert("Hola Mundo");
// } else if (Input === "it" || Input === "It" || Input === "IT") {
//     alert("Ciao mondo");
// } else if (Input === "fr" || Input === "Fr" || Input === "FR") {
//     alert("Hellow World");
// } else {
//     alert("Invalid Input");
// }

// // Answer 22

// var Input = +prompt("Enter a Number");
// if (Input > 0) {
//     alert("This Number Is Positive")
// } else {
//     alert("This Number Is Negative")
// }

// // answer 23

var Num = +prompt("Enter A Number");
var Noun = prompt("Enter A Noun");
if (Num === 1) {
    alert(Num + " " + Noun);
} else {
    alert(Num + " " + Noun + "s")
}