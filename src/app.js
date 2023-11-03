const express = require('express');
const session = require('express-session');
require('dotenv').config()
const join = require('path').join
const app = express();
const staffRouter = require('./router/staff.js')
const itemRouter = require('./router/item.js')
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.urlencoded({ extended: true }));
app.set('views', join(__dirname, './views'))
app.use(express.static(join(__dirname, '../public')))
app.set('view engine', 'ejs');
app.use('/', staffRouter)
app.use('/item', itemRouter)
const port = process.env.PORT || 3030
app.listen(port, ()=>{
    console.log(`Server running on http://127.0.0.1:${port}\n`);
})