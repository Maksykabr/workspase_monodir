const express = require('express');
const axios = require('axios');

const app = express();
const port = 5000;

const url = 'http://localhost:3000/';


function get_data(link) {
    return axios.get(link)
      .then(response => {
        const data = response.data;
        console.log('Response:', data);
        return data;
      })
      .catch(error => {
        console.error('Error:', error.message);
        return error.message;
    });
}

app.get('/', (req, res) => {
  get_data(url)
    .then(returnedData => {
      res.send(returnedData);
    })
    .catch(error => {
      res.status(500).send(`Error: ${error}`);
    });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
  