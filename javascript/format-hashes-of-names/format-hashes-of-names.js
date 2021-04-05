function list(names){
  return names.reduce((accumulator, currentName, index) => {
      return index === 0 ? currentName.name : (index === names.length - 1 ? accumulator + ' & ' + currentName.name : accumulator + ', ' + currentName.name);
  }, '');
}

// Alternative solutions

function list(names) {
  var xs = names.map(p => p.name)
  var x = xs.pop()
  return xs.length ? xs.join(", ") + " & " + x : x || ""
}

// Clever use of pop to extract the last element of the returned array from map, and checking whether it has to be joined through its length or not

var list = (names) =>  names.map(x => x.name).join(', ').replace(/(.*),(.*)$/, "$1 &$2")

// Using replace to map the last comma to &