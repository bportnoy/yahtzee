#Yahtzee
Yahtzee is a command-line tool for generating secure passphrases using the Diceware method.

##About
[Diceware](http://world.std.com/~reinhold/diceware.html) is a method for securely generating passphrases with high amounts of entropy. It is best employed by rolling physical dice, but let's be honest: I do not own five dice, nor do I wish to reach for a set of dice when I wish to generate a passphrase.

This tool uses [Random.org](http://www.random.org) to generate five random integers for each word in your passphrase, which corresponds to a word in the [Diceware8k](http://world.std.com/~reinhold/dicewarefaq.html#diceware8k) list.

##Using Yahtzee
It's easy! If you have Node installed, just clone this repo to your machine. Then at the command line, type:

    node yahtzee <<#>>

where # is the number of words in your passphrase (default: 7).

If you don't have Node installed, you should [follow these instructions](http://howtonode.org/how-to-install-nodejs) first.

##Is this secure?
That depends. Do you trust me? Do you trust Random.org? Do you trust the author of the package I'm using to interface with Random.org? And do you trust that the NSA hasn't aimed a signal at Random.org's random number generator just to screw it up?

I've designed this code to be small and simple - if you know JavaScript, you should be able to read it in less than five minutes and make a judgment for yourself. I've also included the script I used to process the Diceware8k list.

I'll use it. Probably.

###Created by
Bradley Portnoy, just for fun