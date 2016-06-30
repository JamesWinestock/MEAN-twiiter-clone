const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  createdAt: Date,
  updatedAt: Date,
  tweets: [{
    text: String, isLiked: {type: Boolean, default: false}
  }]
});

userSchema.methods.addTweet = function(text) {
  this.tweets.push({text: text});
  this.save();
};

userSchema.methods.listTweets = function(text) {
  this.tweets.forEach(tweet => {
    console.log('\n');
    console.log(`${this.username} has tweeted ${tweet.text}`);
    console.log('\n');
  });
};

userSchema.methods.findTweets = function(search) {
  // [match1, match2] or []
  return this.tweets.filter(tweet => {
    return tweet.indexOf(searchString) >= 0 ? true :false;
  });
}

const User = mongoose.model('User', userSchema);

module.exports = User;
