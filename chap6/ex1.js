var Fielddimension = document.querySelector('#dt');
var Fieldmin = document.querySelector('#vmin');
var Fieldmax = document.querySelector('#vmax');
var aff = document.querySelector('#aff');




var afficher = function () {


    var min = Math.ceil(Fieldmin.value);
    var max = Math.floor(Fieldmax.value);
    var nbofcolumn = 10;

    var nbofLigne = Math.floor(Fielddimension.value / nbofcolumn);

    var table = "<table>";

    for (i = 0; i < nbofLigne; i++) {
        table += "<tr>";
        for (j = 0; j < nbofcolumn; j++) {
            var random = Math.floor(Math.random() * (max - min + 1)) + min;

            table += `<td>${random}</td>`;

        }
        table += "</tr>";
    }

    table += "</table>";



    aff.innerHTML = table;


}


document.title = "genere tableau";