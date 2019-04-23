let shout = string => string.toUpperCase();

let whisper = string => string.toLowerCase();

let logShout = string => console.log(shout(string));

let logWhisper = string => console.log(whisper(string));

// check if a string is uppercase
let isUpperCase = str => str === str.toUpperCase();

let sayHiToGrandma = string => {
  let response;
  switch(string) {
    case 'hello':
      response = 'I can\'t hear you';
      break;
    case 'HELLO':
      response = ''
  }
}