let a = [8, 5, 3, 19, 12];




function myfunction(tab) {
    for (i = 0; i < tab.length; i++) {
        for (j = i + 1; j < tab.length; j++) {
            if (tab[i] >= tab[j]) {
                var temp = tab[i];
                tab[i] = tab[j];
                tab[j] = temp;
            }
        }
        console.log(tab);
    }
    return tab;

}

function indexOfminOfarray(index, tab) {
    var min = tab[index];
    var IndexminOfarray = index;
    for (i = index; i < tab.length; i++) {
        if (min > tab[i]) {
            min = tab[i];
            IndexminOfarray = i;

        }
    }
    return IndexminOfarray;
}


function myfunction2(tab) {
    for (j = 0; j < tab.length; j++) {
        var indexminofarray = indexOfminOfarray(j, tab)
        //  console.log(indexminofarray);
        if (tab[j] > tab[indexminofarray]) {
            //  alert(1);
            var temp = tab[j];
            tab[j] = tab[indexminofarray];
            tab[indexminofarray] = temp;
        }
    }

    return tab;

}

console.log(a);
console.log(myfunction2(a));


// function myfunction1(tab) {
//     for (i = tab.length - 1; i >= 1; i++) {
//         for (j = 0; j < i; j++) {
//             if (tab[j] >= tab[j + 1]) {
//                 var temp = tab[j];
//                 tab[j] = tab[j + 1];
//                 tab[j + 1] = temp;
//             }
//         }
//         // console.log(tab);
//     }
//     return tab;

// }



