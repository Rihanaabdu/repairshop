const router = require('express').Router();
const controller = require('../controller/user.controller.js')
router.get('/', (req, res, next)=>{
    res.render('shop/login.ejs', {error:null})
})
router.get('/admin', (req, res, next)=>{
    res.render('shop/admin.ejs', {error:null})
})
router.post('/', controller.adminLogin);
router.post('/', controller.staffLogin);

module.exports = router