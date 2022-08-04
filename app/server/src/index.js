const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
var cors = require('cors');

const routeTasks = require('./routes/tasks');

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/api/tasks', routeTasks, (req, res) => res.sendStatus(401));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Server is running and listening to port ${port} ...`);
