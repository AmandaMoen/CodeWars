function capitalize(s,arr){
  let stringArray = s.split('')
  
  for (let j = 0; j < arr.length; j++) {
    if (stringArray[arr[j]]) {
      stringArray[arr[j]] = stringArray[arr[j]].toUpperCase();
    }
  }
  return stringArray.join('');
};