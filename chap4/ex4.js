let a = [12, 8, 15, 7, 10];


//console.log(a.sort((a, b) => a - b));
//[8,12,15,7,10]
//[8,12,7,15,10]
// [8,7,12,15,10]
// [7,8,12,10,15]



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


console.log(myfunction1(a));

