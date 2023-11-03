const prisma = require('../util/prisma')
const bcrypt = require('bcryptjs')
async function create() {
    await prisma.admin.create({
        data: {
            username: 'admin',
            password: bcrypt.hashSync('password')
        }
    })
    console.log('Admin created');
}
create()