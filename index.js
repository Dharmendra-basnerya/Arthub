const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://dharmendrabasnerya2005:hptsinSUwv9Tqnb7@cluster1.gef5s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1');

// Define Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

// Create Model
const User = mongoose.model('users', userSchema);

// Create and Save User Examples
const user1 = new User({
  username: 'ankhagsb253@gGHvc',
  password: 'MZVgb'
});

user1.save().then(() => console.log("save successfully")).catch((err) => console.log("error", err));

// const user2 = new User({
//   username: 'kfdjlkfj lkdj ln',
//   password: 'jkdfdnf,mdfkj'
// });

// user2.save().then(() => console.log("save successfully")).catch((err) => console.log("error", err));

// Middleware to parse JSON bodies
app.use(express.json());

// Root Route
app.get('/', (req, res) => {
  res.send('Hello Mr. dharmendra!');
});

// Signup Route
app.post('/signup', (req, res) => {
  const { username, password } = req.body;  // Get username and password from request body
  const user = new User({ username, password });

  user.save()
    .then(() => {
      res.send({ message: 'saved successfully' });
    })
    .catch(() => {
      res.send({ message: 'server error' });
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});






