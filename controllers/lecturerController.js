const db = require('../models')

// image Upload
const multer = require('multer')
const path = require('path')


// create main Model
const Lecturer = db.lecturers

// main work

// 1. create lecturer

const addLecturer = async (req, res) => {

    let info = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        profession: req.body.profession,
    }

    const lecturer = await Lecturer.create(info)
    res.status(200).send(lecturer)
    console.log(lecturer)

}



// 2. get all Lecturers

const getAllLecturers = async (req, res) => {

    let lecturers = await Lecturer.findAll({})
    res.status(200).send(lecturers)

}

// 3. get single lecturer

const getOneLecturer = async (req, res) => {

    let id = req.params.id
    let lecturer = await Lecturer.findOne({ where: { id: id }})
    res.status(200).send(lecturer)

}

// 4. update Lecturer

const updateLecturer = async (req, res) => {

    let id = req.params.id

    const lecturer = await Lecturer.update(req.body, { where: { id: id }})

    res.status(200).send(lecturer)
   

}

// 5. delete lecturer by id

const deleteLecturer = async (req, res) => {

    let id = req.params.id
    
    await Lecturer.destroy({ where: { id: id }} )

    res.status(200).send('Lecturer is deleted !')

}

// 6. get published lecturer

const getPublishedLecturer = async (req, res) => {

    const lecturers =  await Lecturer.findAll({ where: { published: true }})

    res.status(200).send(lecturers)

}





// 8. Upload Image Controller

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
}).single('image')

module.exports = {
    addLecturer,
    getAllLecturers,
    getOneLecturer,
    updateLecturer,
    deleteLecturer,
    getPublishedLecturer,
    upload
    
}