const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/relationshipDemo')
    .then(() => console.log('Database connected :)'))
    .catch(err => console.log('Database connection error :('));

const userSchema = new mongoose.Schema({    
    username: String,
    age: Number
});

const User = mongoose.model('User', userSchema);

const tweetSchema = new mongoose.Schema({
    text: String,
    likes: Number,
    user: { type: mongoose.Schema.ObjectId, ref: 'User'}
});

const Tweet = mongoose.model('Tweet', tweetSchema);

const makeTweet = async() => {
    const user = new User({ username: 'Vinidu', age: 18 });
    const tweet = new Tweet({ text: 'Hi', likes: 4 });
    tweet.user = user;
    await user.save();
    await tweet.save();
}

const findtweet = async() => {
    const tweet = await Tweet.findOne({ text: 'Hi' }).populate('user');
    console.log(tweet);
}

// makeTweet();

findtweet();

