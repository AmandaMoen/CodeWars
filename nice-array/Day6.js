function isNice(arr){
  return `Ì am Nice `
}

// Best practices solutions:
function isNice(arr){
  let nice = false;
  for (let i = 0; i < arr.length; i++){
    if (arr.includes(arr[i]-1)| arr.includes(arr[i]+1)) {nice = true;}
    else {nice = false; return nice;}
  }
  return nice;
}

function isNice(arr){
  return !!arr.length && arr.every(x => arr.some(y => y === x - 1 ||  y === x + 1));
}