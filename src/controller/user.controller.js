const prisma = require('../util/prisma')
const bcrypt = require('bcryptjs')
const adminLogin = async (req, res, next)=>{
    const username = req.body.username
    const password = req.body.password
    let admin = await prisma.admin.findUnique({
        where: {
            username
        }
    })
    if(!admin) return res.render('shop/admin.ejs',{error: "Invalid credentials"});
    let check = bcrypt.compareSync(password, admin.password)
    if (!check)res.render('shop/admin.ejs',{error: "Invalid credentials"});
    req.user = admin;
    res.render('shop/register.ejs');
}  
const staffLogin = async (req, res, next)=>{
    const username = req.body.username
    const password = req.body.password
    let staff = await prisma.staff.findUnique({
        where: {
            username
        }
    })
    if(!staff) return res.render('shop/login.ejs',{error: "Invalid credentials"});
    let check = bcrypt.compareSync(password, staff.password)
    if (!check)res.render('shop/login.ejs',{error: "Invalid credentials"});
    req.user = staff;
    res.render('shop/register.ejs');
}  
module.exports = {
    adminLogin,
    staffLogin
}