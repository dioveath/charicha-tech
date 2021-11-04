const config = require('./config');

const express = require('express');

const app = express();


// app.use(bodyParser.)
app.use(express.json());

const APIRoute = require('./routes/api/v1');
app.use('/api/v1', APIRoute);

app.get('/', (req, res) => res.json({ status: "success", statusCode: 200, message: "Hello, World!" }));

app.listen(config.PORT, () => console.log("Listening @localhost:" + config.PORT));
