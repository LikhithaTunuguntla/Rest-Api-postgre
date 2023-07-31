const {Router} = require('express');
const controller = require('./controller');

const router = Router();

router.get('/students',controller.getStudents);
router.get('/students/:id',controller.getStudentById);
router.post('/students',controller.addStudent);
router.put('/students/:id',controller.updateStudent);
router.delete('/students/:id',controller.deleteStudent);

module.exports = router;

