const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/guild', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
  console.log('We are connected to MongoDB!');
});

const adminSchema = new mongoose.Schema({
  password: String,
  username: String,
});

const userSchema = new mongoose.Schema({
  message: String,
  name: String,
  realm: String,
  spec: String,
  tag: String,
});

const matSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
})

const Admin = mongoose.model('Admin', adminSchema);
const Mat = mongoose.model('Mat', matSchema);
const User = mongoose.model('User', userSchema);

module.exports = { Admin, Mat, User };
