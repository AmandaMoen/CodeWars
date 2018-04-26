function high(x){
  let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let words = x.split(' ');
  let totalScores = [];

  words.forEach(word => {
    let scoreCounter = 0;
    word.split('').forEach(letter => {
      scoreCounter += letters.indexOf(letter) + 1;
    });
    totalScores.push(scoreCounter);
  });

  let highest = totalScores.reduce((a,b) => {
    return Math.max(a,b);
  });

  return words[totalScores.indexOf(highest)];
}