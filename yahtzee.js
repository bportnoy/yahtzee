var fs = require('fs');
var key = require('./api-key');
var n = +process.argv[2] || 7;
var RandomJs = require('randomorg-js');
var randomJs = new RandomJs();
var words = [];

var generateWordCode = function(){
  var digits = [null];
  var requestsRemaining = 2;

  var result1 = randomJs
  .apikey(key) // your apikey here 
  .headers({'User-Agent': 'https://github.com/bportnoy/yahtzee'})
  .method('generateIntegers')
  .params({n:1, min: 1, max: 7})
  .id(25451)
  .post(function(error, stream, data) {
    requestsRemaining--;
    if (error) console.error(error);

    //check to see that the ID of the resposne is the ID we sent
    if (data.id !== 25451){
        console.error('Error: mismatched response ID.');
        return;
    }

    digits[0] = data.result.random.data[0];
    if (requestsRemaining === 0) getWord(digits);
  });

  var result2 = randomJs
  .apikey(key) // your apikey here 
  .headers({'User-Agent': 'https://github.com/bportnoy/yahtzee'})
  .method('generateIntegers')
  .params({n:4, min: 1, max: 6})
  .id(25451)
  .post(function(error, stream, data) {
    requestsRemaining--;
    if (error) console.error(error);

    //check to see that the ID of the resposne is the ID we sent
    if (data.id !== 25451){
        console.error('Error: mismatched response ID.');
        return;
    }

    while (data.result.random.data.length){
        digits.push(data.result.random.data.pop());
    }
    if (requestsRemaining === 0) getWord(digits);
  });

};

var getWord = function(digits){
  fs.readFile('./diceware8k_json.txt', 'utf8', function(err, data){
    if (err) console.error(err);
    else {
      digits = +digits.join('');
      words.push(wordKey[digits]);
      if (words.length === n) outputPassphrase();
    }
  });
};

var generatePassphrase = function(){
  for (var i = 0; i < n; i++){
    generateWordCode();
  }
};

var outputPassphrase = function(){
  console.log('Your passphrase is: ');
  console.log(words.join(' '));
};

//read the file and kick everything off
fs.readFile('./diceware8k_json.txt', 'utf8', function(err, data){
  if (err){
    console.error(err);
    return;
  } else {
    global.wordKey = JSON.parse(data);
    generatePassphrase();
    }
});

