const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/guild', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
  console.log('We are connected to MongoDB!');
});

const userSchema = new mongoose.Schema({
  name: String,
  class: String,
  realm: String,
  spec: String,
});

const matSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
})

const Mat = mongoose.model('Mat', matSchema);
const User = mongoose.model('User', userSchema);

module.exports = { Mat, User };
