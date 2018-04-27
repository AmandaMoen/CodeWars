// Best Practice Solution

function capitalize(s,arr){
  
var capS = s.split("");

for(var i = 0; i < arr.length; i++) {
  if(capS[arr[i]]) {
    capS[arr[i]] = capS[arr[i]].toUpperCase();
  }
}

capS = capS.join("");
return capS
};