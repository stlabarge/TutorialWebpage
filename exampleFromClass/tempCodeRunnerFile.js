let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple','black', 'grey','teal','coral'];
let sufx = ['st', 'nd','rd','th','th','th','th','th','th','th',];

function colorNums (color,sufx) {
    for ( let x=0;x<10;x++)
   console.log(`${x+1}${sufx} is ${colors[x]}`);



}
colorNums(color,sufx);