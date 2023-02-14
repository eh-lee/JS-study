// function agree(q, y, n){
//     if(confirm(q))
//     y()
//     else
//     n()
// }

// agree(
//     "sth?",
//     () => alert("d"),
//     () => alert("dd")
// )

// function agree(q, y, n){
    //     if(confirm(q))
    //     y()
    //     else
    //     n()
    // }
    
    // agree(
    //     "sth?",
    //     () => alert("d"),
    //     () => alert("dd")
    // )


// function agree(q, y, n){
//     if(confirm(q))
//     y()
//     else
//     n()
// }

// agree(
//     "sth?",
//     () => alert("d"),
//     () => alert("dd")
// )

// function fct(q, y, n){
//     if(confirm(q)) y()
//     else n()
// }    

// fct (
//     "sth?",
//     () => alert('dd'),
//     () => alert('ddf')
// )


// function sth(q, yes, no){
//     if(confirm(q)) yes()
//     else no()
// }

// sth (
//     "question?",
//     () => console.log("yes"),
//     () => console.log("no")
// )

function sumAll(...ages){
    let sum = 0;
    for (let age of ages) sum += age;
    return sum;
}

console.log( sumAll(31, 29, 32, 32));
