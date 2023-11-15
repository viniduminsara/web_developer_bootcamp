const jokes = require("give-me-a-joke");
const colors = require("colors")

jokes.getRandomDadJoke (function(joke) {
    console.log('------------------------');
    console.log(joke.rainbow);
});