function digPow(n, p){
  // n positive integer, type number
  // p positive integer, type number
  
  // 1. separate n in digits
  // 2. construct the operation
  // 3. check if there is a k
  // 4. return k if there is one, -1 otherwise
  
  const operationResult = n.toString().split('').reduce((accumulator, currentValue, index) => {
    return accumulator + Number(currentValue) ** (p + index);
  }, 0);
  
  if (operationResult % n === 0) {
    return operationResult / n;
  }
  return -1;
}

// Solutions

function digPow(n, p) {
  var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
  return x % n ? -1 : x / n
}

// More elegant way to do the same, using Math.pow