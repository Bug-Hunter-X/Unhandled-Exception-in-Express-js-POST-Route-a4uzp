const express = require('express');
const app = express();
app.use(express.json({ strict: true })); // added strict: true for better error handling
app.post('/user', (req, res) => {
  try {
    if (!req.body || !req.body.name) {
      return res.status(400).json({ error: 'Missing or invalid user name' });
    }
    const user = req.body;
    console.log(user.name);
    res.send('User created');
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));