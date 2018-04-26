function solution(str){
  return str.split('').reverse().join('');
}

// Best way, recommended! 
 function reverse(str) { 
    
    let reversedString = '';

    let letters = str.split('');
    
    while(letters.length) { 
        reversedString += letters.pop();
    }
    return reversedString;
}


// With a for loop
function reverse(str) { 
    
    let reversedString = '';
    
    let letters = str.split('');
    
    for( let i = letters.length-1; i>=0; i-- ) {
        reversedString+=str[i];
    }
    return reversedString;
}

// With a counter, and while loop
function reverse(str) { 
    
    let reversedString = '';

    let x = str.length-1;
    
    while(x>=0) {
        reversedString += str[x];
        x--;
    }

    return reversedString;
}

// Using recursion to get the reverse of the string.
function reverse(str) {
    if (str === "") {
        return "";
    } else {
        let reversed = reverse(str.substr(1)) + str.charAt(0);
        return reversed;
    }
    
}