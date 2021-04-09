function solution(str){
  return str.length % 2 === 0 ?
    str.split(/(.{2})/).filter(Boolean) :
    (str + '_').split(/(.{2})/).filter(Boolean);
}

// Alternative solutions

function solution(s){
  return (s+"_").match(/.{2}/g)||[]
}

// Preappend '_' and use match to find characters grouped by 2