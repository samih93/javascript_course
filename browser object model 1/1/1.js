// 10-15

// 10
// 11
// 12
// 13
// 14
// 15


// 20-10

// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20

let range = prompt('“Print Number From – To”');

let nbs = range!==null ? range.split('-'):null;
let nb1 = nbs !=null? nbs[0]:0;
let nb2 = nbs !=null? nbs[1]:0;
if((nb1!==0 || nb2!==0) &&  nb1>nb2)
{
    for(let i =nb2 ;i<=nb1;i++)
    {
        console.log(i);
    }
}
else
{
    for(let i =nb1 ;i<=nb2;i++)
    {
        console.log(i);
    }
}