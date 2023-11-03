import prisma from "./prisma";

export const adminAuth = async (req, res, next)=>{
    if (!req.user) return res.redirect('/');
    let admin = await prisma.admin.findUnique({
        where: {
            id: req.user.id
        }
    })
    if(!admin) return res.redirect('/');
}
export const staffAuth = async (req, res, next)=>{
    if (!req.user) return res.redirect('/');
    let admin = await prisma.staff.findUnique({
        where: {
            id: req.user.id
        }
    })
    if(!admin) return res.redirect('/');
}