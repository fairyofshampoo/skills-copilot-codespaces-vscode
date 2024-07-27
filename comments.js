// Create web server
// 1. Load express
// 2. Create an instance of express
// 3. Create a route for GET /comments
// 4. Send a response with comments data
// 5. Listen on port 3000
// 6. Load comments data from comments.json
// 7. Create a route for POST /comments
// 8. Add a new comment to comments data
// 9. Save comments data to comments.json
// 10. Send a response with the new comment

// 1. Load express
const express = require('express');
const fs = require('fs');

// 2. Create an instance of express
const app = express();

// 3. Create a route for GET /comments
app.get('/comments', (req, res) => {
  // 4. Send a response with comments data
  res.send(comments);
});

// 5. Listen on port 3000
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

// 6. Load comments data from comments.json
const comments = JSON.parse(fs.readFileSync('comments.json'));

// 7. Create a route for POST /comments
app.post('/comments', express.json(), (req, res) => {
  // 8. Add a new comment to comments data
  comments.push(req.body);

  // 9. Save comments data to comments.json
  fs.writeFileSync('comments.json', JSON.stringify(comments, null, 2));

  // 10. Send a response with the new comment
  res.send(req.body);
});

// POST /comments
// {
//   "content": "This is a new comment"
// }

// GET /comments
// [
//   {
//     "content": "This is a comment"
//   },
//   {
//     "content": "This is another comment"
//   },
//   {
//     "content": "This is a new comment"
//   }
// ]