var n = parseInt(prompt("Entrer un nombre"));
var res = "";
for (var i = 2; i < n; i++) {
    if (n % i === 0) {
        res += `${i},`;
    }
}
if (res != "") {
    console.log(`Diviseur de ${n}  = 1,${res} ${n}`);
}
else {
    console.log(`Diviseur de ${n} = 1 , ${n} (premier)`);

}


