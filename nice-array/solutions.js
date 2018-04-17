function isNice(arr){
 let isNiceArray = false;
 for (let i = 0; i < arr.length; i++){
   if (arr.includes(arr[i]-1) || arr.includes(arr[i]+1)) {
     isNiceArray = true;
   } else { return false; }
 }
 return isNiceArray;
}