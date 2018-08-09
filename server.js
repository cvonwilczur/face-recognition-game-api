const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('This is functioning');
})

app.listen(3000, () => {
  console.log('app is running on port 3000');
});


/*
--> res = this is working
/signin --> POST = success/fail
/register --> POST = return a new user object
/profile/:userId --> GET = return the user requested
/image --> PUT = update the image score on the user profile
*/
