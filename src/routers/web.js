const express = require('express')

const router = express.Router()
const { getHomepage, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser, postDeleteUser, postHandleRemoveUser } = require('../controllers/homeController')

router.get('/', getHomepage)
router.get('/create', getCreatePage)
router.get('/update/:id', getUpdatePage)

router.post('/create-user', postCreateUser)
router.post('/update-user', postUpdateUser)
router.post('/delete-user', postHandleRemoveUser)
router.post('/delete-user/:id', postDeleteUser)

module.exports = router;