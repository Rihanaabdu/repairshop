const prisma = require('./prisma.js')

const adminAuth = async (req, res, next)=>{
    if (!req.user) return res.redirect('/');
    let admin = await prisma.admin.findUnique({
        where: {
            id: req.user.id
        }
    })
    if(!admin) return res.redirect('/');
    next()
}
const staffAuth = async (req, res, next)=>{
    if (!req.user) return res.redirect('/');
    let admin = await prisma.staff.findUnique({
        where: {
            id: req.user.id
        }
    })
    if(!admin) return res.redirect('/');
    next()
}
const noAuth = async (req, res, next)=>{
    if (req.session.user && req.session.user.type == 'admin') return res.redirect('/register/staff');
    if (req.session.user && req.session.user.type == 'staff') return res.redirect('/add');
    next()
}
module.exports = {
    adminAuth,
    staffAuth,
    noAuth
}