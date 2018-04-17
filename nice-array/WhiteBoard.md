Problem Domain: Write a function that checks whether a passed array is "nice"(n-1 or n+1 for every n value). The function returns a boolean value after checking the array.

Algorithm: Loop through each number of the array
    Check if current num is +1 or -1 than any other number in the array
    Continue until one number doesn't have a n+1 or n-1, then return false
    If all numbers pass, then return true

Pseudo-coding:
    //Input -> array of numbers
    //Output -> boolean validation 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    for(let i = 0; i < array.length; i++)
       Check each num induvidually against each number:
       for(let j = 0; j < array.length; j++)
        if(array[i] === array[j]+1 || array[i] === array[j]-1)