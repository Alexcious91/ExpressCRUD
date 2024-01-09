const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.set('view engine', 'ejs')

const userRouter = require('./routes/userRoutes')
app.use('/', userRouter)

app.listen(port, () => {
    console.log(`Server started listening at http://localhost:${port}`);
});