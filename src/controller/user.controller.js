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
    if(!admin) return res.render('shop/admin.ejs',{error: "Invalid credentials", user: req.session.user});
    let check = bcrypt.compareSync(password, admin.password)
    if (!check)res.render('shop/admin.ejs',{error: "Invalid credentials", user: req.session.user});
    req.session.user = admin;
    req.session.user.type = 'admin'
    res.redirect('/register/staff');
}  
const staffLogin = async (req, res, next)=>{
    const username = req.body.username
    const password = req.body.password
    let staff = await prisma.staff.findUnique({
        where: {
            username
        }
    })
    if(!staff) return res.render('shop/login.ejs',{error: "Invalid credentials", user: req.session.user});
    let check = bcrypt.compareSync(password, staff.password)
    if (!check)res.render('shop/login.ejs',{error: "Invalid credentials", user: req.session.user});
    req.session.user = staff;
    req.session.user.type = 'staff'
    res.redirect('/item/items');
} 
const staffRegister = async (req, res, next)=>{
    const username = req.body.username
    let password = req.body.password
    const name = req.body.name
    if (!username && !password && !name)  return res.render('shop/register.ejs', {error: 'Invalid staff', user: req.session.user})  
    password = bcrypt.hashSync(password)
    let staff = await prisma.staff.create({
        data: {
            name,
            username,
            password
        }
    })
    console.log(staff);
    if(!staff) return res.render('shop/register.ejs',{error: "Invalid credentials", user: req.session.user});
    let check = bcrypt.compareSync(password, staff.password)
    if (!check)res.render('shop/register.ejs',{error: "Invalid credentials", user: req.session.user});
    res.redirect('/register/staff');
}  

module.exports = {
    adminLogin,
    staffLogin,
    staffRegister
}