// Write a function insertDash(num)/InsertDash(int num) that will insert dashes ('-') between each two odd numbers in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

// FUNDAMENTALS	STRINGS		ARRAYS

// Insert Dashes

/* Best Practices Solution */
function insertDash(num) {
   return num.toString().replace(/[13579](?=[13579])/g, "$&-");
}

function insertDash(num) {
   return String(num).replace(/([13579])(?=[13579])/g, '$1-');
}