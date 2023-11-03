const prisma = require('../util/prisma')
const addItem = async (req, res, next)=>{
    const type = req.body.type;
    const model = req.body.model;
    if (!type && !model) return res.render('shop/add.ejs', {error:'Invalid item', user: req.user, type})
    let admin = await prisma.item.create({
        data: {
            type,
            model,
            staff_id: req.user.id
        }
    })
    if(!admin) return res.render('shop/admin.ejs',{error: "Invalid credentials", user:req.user});
    let check = bcrypt.compareSync(password, admin.password)
    if (!check)res.render('shop/admin.ejs',{error: "Invalid credentials", user:req.user});
    req.user = admin;
    res.render('shop/register.ejs', {user: req.user});
}  
const completeWork = async (req, res, next)=>{
    const id = req.params.id
    let staff = await prisma.item.update({
        where: {
            id
        },
        data: {
            status: Completed
        }
    })
    res.render('shop/items.ejs', {user: req.user});
}  
const startWork = async (req, res, next)=>{
    const id = req.params.id
    let staff = await prisma.item.update({
        where: {
            id
        },
        data: {
            status: Active
        }
    })
    res.render('shop/items.ejs', {user: req.user});
}
module.exports = {
    addItem,
    completeWork,
    startWork
}