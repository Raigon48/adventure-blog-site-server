const express = require('express');
const bodyParser = require('body-parser');

const mongoConnect = require('./util/database').mongoConnect;

const userRoute = require('./router/userRoute');
const postRoute = require('./router/postRoute');

const app = express();

app.set('view engine' , 'ejs');
app.set('views' , './views');

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use('/user', userRoute);
app.use('/post', postRoute);

mongoConnect(() => {
    app.listen(4000, () => {
        console.log('Server is running on port 4000');
    })
});
