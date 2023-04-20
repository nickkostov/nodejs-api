const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.static('public'));

app.get('/ping', async (req, res) => {
  try {
    const response = await axios.get('http://bo:3000/ping');
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error occurred');
  }
});

app.listen(4000, () => {
  console.log('Server listening on port 4000');
});
