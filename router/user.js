const userController = require('../controller/user');
const router = require('express').Router();


router.post('/', userController.create);
router.get('/', userController.getAll);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);
router.get('/:id', userController.findOne);



module.exports = router;