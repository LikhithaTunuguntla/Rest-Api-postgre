const express = require('express');
const routes = require('./src/student/routes.js');

const app = express();

const port = 3000;

app.use(express.json());
app.use('/',routes);

app.listen(port,()=>
console.log(`App listening to the port: ${port}`)
);