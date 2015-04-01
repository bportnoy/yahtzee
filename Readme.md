# Yahtzee
Yahtzee is a command-line tool for generating secure passphrases using the Diceware method.

# About
[Diceware](http://world.std.com/~reinhold/diceware.html) is a method for securely generating passphrases with high amounts of entropy. It is best employed by rolling physical dice, but let's be honest: I do not own five dice, nor do I wish to reach for a set of dice when I wish to generate a passphrase.

This tool uses [Random.org](http://www.random.org) to generate five random integers for each word in your passphrase, which 

# Co-creators
Noah Sluss
Steve Webster

#### Node-Gyp
[Node-gyp](https://github.com/TooTallNate/node-gyp) is needed to build this module. It should be installed globally, that is, with the `-g` switch:

  npm install -g node-gyp