const router = require('express').Router();
const controller = require('../controller/item.controller.js');
const prisma = require('../util/prisma.js');
const guard = require('../util/guard.js')
router.get('/add', guard.staffAuth,(req, res, next)=>{
    let type = [
        'Phone',
        'Laptop',
        'TV',
        'Camera',
        'Desktop',
        'Monitor',
        'Other',
    ]
    res.render('shop/add.ejs', {error:null, user: req.user, type})
})
router.get('/items', guard.staffAuth,async (req, res, next)=>{
    let items = await prisma.item.findMany()
    res.render('shop/items.ejs', {error:null, user: req.user, items})
})
router.post('/add', guard.staffAuth,controller.addItem);
router.post('/complete', guard.staffAuth,controller.completeWork);
router.post('/work', guard.staffAuth,controller.startWork);

module.exports = router