var fs = require('fs');

var prepareList = function(){
  var list = {};
  fs.readFile('./diceware8k.txt', 'utf8', function(err, data){
    if (err) console.log(err);
    else{
      var words = data.split('\n');
      words.pop();
      console.log(words);
      units: for (var unit = 1; unit < 8; unit++){
        for (var tens = 1; tens < 7; tens++){
          for (var  hundreds = 1; hundreds < 7; hundreds++){
            for (var thousands = 1; thousands < 7; thousands++){
              for (var tenthousands = 1; tenthousands < 7; tenthousands++){
                var digit = +(unit.toString() + tens.toString() + hundreds.toString() + thousands.toString() + tenthousands.toString());
                console.log(typeof digit);
                list[digit] = words.shift();
                if (digit === 72642) break units;
              }
            }
          }
        }
      }
      console.log(list);
      fs.writeFile('./diceware8k_formatted.txt', JSON.stringify(list), 'utf8', function(err, data){
        if (err) console.error(err);
        else console.log('Word table ready.');
      })
    }
  });
};



prepareList();