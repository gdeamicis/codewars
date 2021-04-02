
// Using a helper array
function songDecoder(song){
  let words = song.split('WUB');
  words = words.filter(word => word !== '');
  let decodedSong = '';
  words.forEach(word => {
    decodedSong = decodedSong + word + ' ';
  });
  decodedSong = decodedSong.substring(0, decodedSong.length - 1);
  return decodedSong;
}


// Unfinished
// Using two pointers to avoid using memory
function songDecoder(song){
  let initPointer = 0;
  let rollingPointer = 0;
  
  let decodedSong = '';
  
  console.log('song: ', song);
  
  while(initPointer < song.length) {
    if (song[rollingPointer] === 'W') {
      rollingPointer++;
      if (song[rollingPointer] === 'U') {
        rollingPointer++;
        if (song[rollingPointer] === 'B') {
            initPointer = ++rollingPointer;
          if (decodedSong.length !== 0 && decodedSong[decodedSong.length - 1] !== ' ' && initPointer < song.length) {
            decodedSong = decodedSong + ' ';
          }
        } else {
          decodedSong += song[rollingPointer];
          initPointer++;
          rollingPointer = initPointer;
        }
      } else {
        decodedSong += song[rollingPointer];
        initPointer++;
        rollingPointer = initPointer;
      }
    } else {
      decodedSong += song[rollingPointer];
      initPointer++;
      rollingPointer = initPointer;
    }
  }
  return decodedSong;
}

// Solutions

function songDecoder(song){
  return song.replace(/(WUB)+/g," ").trim()
}

// Explanation: Above a regular expression is used. It will match any combination of values corresponding here to WUB, and the + sign indicates that it will match between one and unlimited times, thus removing the necessity of watching for extra spaces. If you don't know what a regular expression is, you can take a look on this link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions, and you can use this link to test some regexps: https://regex101.com/. Then it is trimmed, removing extra possible heading and trailing whitespaces.

function songDecoder(song){
  return song.split('WUB').filter(Boolean).join(' ');
}

// Explanation: Boolean is here used as a constructor function within the filter. As '' is a falsy value, it will return false on the filter, so removing the extra spaces

function songDecoder(song){
  var str = '';
  for(var i=0;i<song.length;i++){
    if((song[i] == 'W' && song[i+1] == 'U' && song[i+2] == 'B') 
    || (song[i-1] == 'W' && song[i] == 'U' && song[i+1] == 'B')
    || (song[i-2] == 'W' && song[i-1] == 'U' && song[i] == 'B'))
      str += str[str.length-1] !== ' ' ? ' ' : '';
    else
      str += song[i];
  }
  return str.trim();
}

// Explanation: Interesting use of only one index to check from index - 2 to index + 2 characters for the WUB combination, it then would be converted to a whitespace of an empty string accordingly. A better index solution than the one in progress :)