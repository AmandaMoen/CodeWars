// My head is at the wrong end!

function fixTheMeerkat(arr) {
// If the array is longer than 1 item long run this.
 if (arr.length > 1){
   // Assign the object at index 0 to "first".
   let first = arr[0];
   // Assign the object at the end of the array to "last".
   let last = arr[arr.length - 1];
   // Switch the original "first" with "last"
   arr[0] = last;
   // Switch the original "last" with "first"
   arr[arr.length - 1] = first;
   // Return the corrected order of the array.
   return arr;
  }
  else {
    // Return the array.
    return arr;
  }
}