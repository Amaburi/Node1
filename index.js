const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const userRoute = require('./router/user');

const app = express();
const port = 5000;



app.use(cors());

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))

const db = require('./model')
db.sequelize.sync()

app.get('/', (req, res) => {
    res.send('Hiiiiii made by Jy!');
});

app.use('/api/user', userRoute)


app.listen(port, () => console.log(`App listening on port http://localhost:${port}...`));