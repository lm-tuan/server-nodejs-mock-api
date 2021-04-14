const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");


const phones = require('./mockapi/phone-data');
const projects = require('./mockapi/project-data');
const phone_numbers = require('./mockapi/phoneNumber-data');
const phonesRoute = require('./api/routes/phones.route');
const projectsRoute = require('./api/routes/projects.route');
const NumbersRoute = require('./api/routes/numbers.route');
const AuthRoute = require('./api/routes/auth.route');




const port = 3001;

const app = express();
app.use(cors());


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Hello wolrd');
})
app.use('/phones', phonesRoute);
app.use('/projects', projectsRoute);
app.use('/phone_numbers', NumbersRoute);
app.use('/login', AuthRoute);



// app.get('/phones', (req, res) => {
//     res.json(phones);
// })
// app.get('/projects', (req, res) => {
//     res.json(projects);
// })
// app.get('/phone_numbers', (req, res) => {
//     res.json(phone_numbers);
// })

app.listen(port, () => {
    console.log('Runing server', port);
})