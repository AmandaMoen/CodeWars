function mutateMyStrings(stringOne, stringTwo){
  let arrayOne = stringOne.split('');
  let arrayTwo = stringTwo.split('');
  let answer = [arrayOne.join('')];
  for (let i = 0; i < arrayOne.length; i++){
    if (arrayOne[i] !== arrayTwo[i]) {
      arrayOne[i] = arrayTwo[i];
      answer.push(arrayOne.join(''));
    };
  };
  return answer.join('\n')+'\n';
}