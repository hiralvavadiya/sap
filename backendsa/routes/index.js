var express = require('express');
var router = express.Router();
var stud = require('../controller/studcontroller');
var upload = require('../controller/uploadcontroller');
var note = require('../controller/notecontroller');
var reg = require('../controller/loginReg')

/* GET home page. */
// application
router.post('/api/app',stud.app_index);
router.get('/api/app',stud.app_get_data);

// upload document
router.post('/api/up',upload.upload_index);
router.get('/api/up',upload.upload_get_data);

// note
router.post('/api/note',note.note_index);
router.get('/api/note',note.note_get_data);
router.get('/api/note/:id',note.note_del);

// register
router.post('/api/reg',reg.register_index);
router.get('/api/reg',reg.register_get_data);

// login
router.post('/login',reg.login);
router.get('/logout',reg.logout);

module.exports = router;