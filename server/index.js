require('dotenv').config()

const express= require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
const controller = require('./controller');


const port = process.env.PORT;

const app = express();

app.use(bodyParser.json())


massive(process.env.CONNECTION_STRING)
.then((dbInstance) => {
    app.set('db', dbInstance);
    console.log('connected to the db')
})
.catch((err) => {
    console.log(err)
})

app.get('/api/houses', controller.getAll);
app.post('/api/houses', controller.create);
app.delete('/api/houses/:id', controller.delete);







app.listen(port, () => {
    console.log(`Ahoy mat-ee on port: ${port}`);
})