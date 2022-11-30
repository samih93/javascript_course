var num1 = prompt("Enter num1");
var num2 = prompt("Enter num2");
var num3 = prompt("Enter num3");

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    console.log("Les valeurs saisies doivent être des valeurs numériques");
}
else {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);


    var firstmin;
    var firstmax;
    var res = "";



    if (num1 < num2) {
        firstmin = num1;
        firstmax = num2;

    }
    else {
        firstmin = num2;
        firstmax = num1;
    }

    // 1 - firstmax < num3  ? ==> firstmin - first max - num3 
    if (firstmax < num3) {
        res += firstmin + " - " + firstmax + " - " + num3;
    }
    // first max > num3  
    else {
        res += `${firstmin < num3 ? firstmin + " - " + num3 : num3 + ' - ' + firstmin}` + ' - ' + firstmax;
    }


    console.log(res);


}