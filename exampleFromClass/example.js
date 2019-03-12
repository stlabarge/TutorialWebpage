function main(){
	let a =1;
	let b=2;
	let c=-3;
	mystery(a,b,c);
	mystery(c,4,a);
	mystery(a+b,b+c,c+a);
}

function mystery(w,y,z) {
console.log(y + "+" + w + "=" + z)
}

main();
// a function can call a function!
// his actually isnt doing Math 
//think of the chicken machine
// the second fuction is reassgining names (c,a,b) would be 1,2,-3



/* 

tools:
function 
some kind of statement --if statement -- boolean
method-- reverse? 
.split ('') to turnstrings into arrays

string --> to array --> mash array backtogether backwards?
*/

function checker(){
    let str = 'bob';
    let rev = str.split('').reverse().join('');

    console.log(rev); 

    if(str == rev){
        console.log(true);
    } else {
        console.log(false);
    }
  }

  checker ()
 