const express = require('express'),
    router = express.Router();

//importamos el controlador
const controller = require('../controllers/student-controller');

router.post('/create-student', controller.createStudent);

router.get('/', controller.readStudents);

router.get('/edit-student/:id', controller.getStudent);

router.put('/update-student/:id', controller.updateStudent);

router.delete('/delete-student/:id', controller.deleteStudent);

module.exports = router;