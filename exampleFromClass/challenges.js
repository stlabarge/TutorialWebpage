// array - colors
// array - suffix
// think of a way for the index to coordinate to match the right suffix

/*  there will have to be 3 for loops, prameters

*/



let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple','black', 'grey','teal','coral'];
let suffix = ['st', 'nd','rd','th','th','th','th','th','th','th',];

function colorNums (color,sufx) {
    for ( let x=0;x<10;x++)
    console.log(color[x]);
    console.log(suf[x]);



}
colorNums(colors,suffix);


let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple','black', 'grey','teal','coral'];
let sufx = ['st', 'nd','rd','th','th','th','th','th','th','th',];

function colorNums (color,sufx) {
    for ( let x=0;x<10;x++)
   console.log(`${x+1}${sufx} is ${colors[x]}`);



}
colorNums(color,sufx);