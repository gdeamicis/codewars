function inArray(array1,array2){
  const r = [];
  array1.forEach(a1Element => {
    if (array2.findIndex(a2Element => a2Element.includes(a1Element)) > -1) {
      r.push(a1Element);
    }
  });
  // order array
  r.sort();
  return r;
}

function inArray(array1,array2){
  return Array.from(new Set(array1.filter(a1Element => array2.findIndex(a2Element => a2Element.includes(a1Element)) > -1).sort()));
}

// Alternative solutions

function inArray(arr1, arr2) {
  return arr1.filter(function(needle) {
    return arr2.some(function(haystack) {
      return haystack.indexOf(needle) > -1;
    });
  }).sort();
}

// Using some to find if an element of arr1 i in arr2, and indexOf at string level

function inArray(array1,array2){
  return array1
    .filter(a1 => array2.find(a2 => a2.match(a1)))
    .sort()
}

// Using match at string level


