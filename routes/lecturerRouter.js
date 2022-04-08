// import controllers review, lecturers
const lecturerController = require('../controllers/lecturerController.js')



// router
const router = require('express').Router()


// use routers
router.post('/addLecturer', lecturerController.upload , lecturerController.addLecturer)

router.get('/allLecturers', lecturerController.getAllLecturers)

router.get('/published', lecturerController.getPublishedLecturer)








// Lecturers router
router.get('/:id', lecturerController.getOneLecturer)

router.put('/:id', lecturerController.updateLecturer)

router.delete('/:id', lecturerController.deleteLecturer)

module.exports = router