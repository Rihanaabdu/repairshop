const router = require('express').Router();
const controller = require('../controller/user.controller.js');
const guard = require('../util/guard.js')
router.get('/', guard.noAuth,(req, res, next)=>{
    res.render('shop/login.ejs', {error:null, user: req.session.user})
})
router.get('/admin', guard.noAuth,(req, res, next)=>{
    res.render('shop/admin.ejs', {error:null, user: req.session.user})
})
router.get('/register/staff', guard.adminAuth, (req, res, next)=>{
    res.render('shop/register.ejs', {error:null, user: req.session.user})
})
router.get('/logout', (req, res, next)=>{
    req.session.user = null;
    res.redirect('/')
})
router.post('/admin', guard.noAuth, controller.adminLogin);
router.post('/', guard.noAuth, controller.staffLogin);
router.post('/register/staff', guard.noAuth, controller.staffRegister);

module.exports = router