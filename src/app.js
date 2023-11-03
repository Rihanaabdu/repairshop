const express = require('express');
require('dotenv').config()
const join = require('path').join
const app = express();
const staffRouter = require('./router/staff.js')
app.set('views', join(__dirname, './views'))
app.use(express.urlencoded)
app.use(express.static(join(__dirname, '../public')))
app.set('view engine', 'ejs');
app.use('/', staffRouter)
const port = process.env.PORT || 3030
app.listen(port, ()=>{
    console.log(`Server running on http://127.0.0.1:${port}\n`);
})