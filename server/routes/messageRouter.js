const Router = require('express')
const router = new Router()
const messageController = require('../controllers/messageController')


router.post('/', messageController.create)
router.get('/', messageController.getAll)
router.get('/:id', messageController.getOne)
router.delete('/delete/:id', messageController.delete)

module.exports = router