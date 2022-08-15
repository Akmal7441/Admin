const {
    Router
} = require('express')
const router = Router()
const Admins = require('../model/Admins')
router.get('/', async (req, res) => {
    const admins = await Admins.find()
    res.render('admins', {
        title: 'Admins',
        admins
    })
})
router.get('/add/', async (req, res) => {
    res.render('addAdmins', {
        title: "Add admin"
    })
})
router.post('/add', async (req, res) => {
    const {
        adminposition,
        adminName,
        adminImg,
        adminAbout,
        adminPhone
    } = req.body

    const admin = new Admins({
        adminposition,
        adminName,
        adminImg,
        adminAbout,
        adminPhone
    })
    admin.save()
    res.redirect('/admins')

})

module.exports = router