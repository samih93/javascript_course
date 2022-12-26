// ex1 : 
function calculate(firstnumber, secondnumber, operation) {

  if (secondnumber == undefined) {
    console.log("Second Number Not Found");
  }
  else {
    switch (operation) {
      case "add": console.log(firstnumber + secondnumber); break;
      case "subtract": console.log(firstnumber - secondnumber); break;
      case "multiply": console.log(firstnumber * secondnumber); break;
      default: console.log(firstnumber + secondnumber); break;
    }
  }
}



// Needed Output
calculate(20); // Second Number Not Found
calculate(40, 30); // 70
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600


//////////////////////////////////////////////////////////////////////////


// ex2 : 
function ageInTime(theAge) {
  // your code here 
  var nbofmonths;
  if (theAge >= 10 && theAge <= 100) {
    nbofmonths = Math.floor(parseInt(12) * theAge);
    console.log(`${nbofmonths} Months`);
  }
  else {
    console.log("Age Out Of Range");
  }
}

// Needed Output

ageInTime(9); // Age Out Of Range
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

//////////////////////////////////////////////////////////////////////////////


//ex3 : ...numbers ==> u can add many parameters  and u can catch them by looping on numbers 
// example multiply(2,3,4) ==> numbers.lenght = 3 so u can loop on numbers and catch each parameter
function multiply(...numbers) /// 
{
  var res = 1;
  numbers.forEach((e) => {
    if (!isNaN(e))
      res *= parseInt(e);
  })
  console.log(res);
}

// Needed Output
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
multiply(100.5, 10, "B", 15); // 15000
multiply(100, 10, 2, 15, 3, 5, 4, 3, 4, 5, "sasdas"); // 15000



function specialMix(...tab) {
  var sum = 0;
  tab.forEach((e) => {
    if (!isNaN(parseInt(e)))
      sum += parseInt(e);
  });
  return sum == 0 ? "All Is Strings" : sum;
}


console.log(specialMix(10, 20, 30, 40)); //100
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings




var new_list = ["samih", "ahmad", "mohamd", "ali", "elie"];

new_list.forEach((e) => {
  if (e.includes('a'))
    console.log(e);
});

// array of element contains a

new_list = new_list.map((e) => {
  return e.includes('a') ? e + "test" : "";
});
console.log(new_list);




// reverse array 
var a1 = [12, 434, 3, 5, 8, 0, 1, 22];



function myreverse(array) {
  var reversearray = [];
  for (i = array.length - 1; i >= 0; i--) {

    reversearray.push(array[i]);
  }
  return reversearray;
}





