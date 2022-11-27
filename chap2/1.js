var note = parseInt(prompt("entrer note "));
// note>10 
var res = note < 10 ? "Insuffisant" :
    note < 12 ? "Recu sans mention, Passable" :
        note < 14 ? "Recu avec mention A.Bien" :
            "Recu avec mention Bien";
console.log(res);

var res;

switch (note) {
    case 1:
        res = "monday";
        break;
    case 2:
        res = "tuesday";
        break;

    case 3:
        res = "wendsday";
        break;
    case 3:
        res = "wendsday";
        break;

    default:
        res = "Recu avec mention Bien";
        break
}



