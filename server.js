const express = require('express');
const app = express();
const port = 3000;

app.get('./weather', (req, res) => {
    const city = req.query.city;
    const apiKey = process.env.API_KEY;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    axios.get(url)
    .then(response => {
        res.json(response.data)
    })
    .catch(error => {
        res.json({ error: error.toString() })
    })
})

app.listen(port, () => {
    console.log(`Weather app listening at http://localhost:${port}`)
})