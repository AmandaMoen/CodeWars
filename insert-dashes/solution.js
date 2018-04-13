// Create a function
function insertDash(num) {
// Set up newArray
 let newArray = [];
 let numArray = num.toString().split('');
 for ( var i = 0; i<numArray.length-1; i++) {
   if ((parseInt(numArray[i]) %2 !== 0)  && (parseInt(numArray[i+1]) %2 !== 0)) {
     newArray.push(parseInt(numArray[i]));
     
     newArray.push('-');
   } else {
     newArray.push(parseInt(numArray[i]));
   }
   if (i === numArray.length-2){
     newArray.push(parseInt(numArray[i+1]));
   }
 }
 let newString = newArray.join('');
 return newString;
}