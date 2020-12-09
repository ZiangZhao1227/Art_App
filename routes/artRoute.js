'use strict';

const express = require('express');
const { body } = require('express-validator');
const multer = require('multer');
const artController = require('../controllers/artController');
const router = express.Router();

//prevent multer for saving wrong file types
const fileFilter = (req, file, cb) => {
    if (!file.mimetype.includes('image')) {
      return cb(null, false, new Error('not an image'));
    } else {
      cb(null, true);
    }
  };
  
  const upload = multer({dest: 'uploads/', fileFilter});

  const injectFile = (req, res, next) => {
    if (req.file) {
      req.body.type = req.file.mimetype;
    }
    console.log('inject', req.body);
    next();
  };

  router.post(
    '/',
     upload.single('art'),
     artController.make_thumbnail,
     injectFile,
    [
      body('description', 'cannot be empty').isLength({min: 1}),
      body('owner', 'required').isLength({min: 1}).isNumeric(),
      body('type', 'not image').contains('image'),
    ],
    artController.art_create);
  

router.get('/', artController.art_list_get);


router.get('/:id', artController.art_get_by_id);

router.get('/art/:uid', artController.art_get_by_uid);

router.put('/',
    [
      body('description', 'cannot be empty').isLength({min: 1}),
      body('owner', 'required').isLength({min: 1}).isNumeric(),
    ],
    artController.art_update_put);


router.delete('/:id', artController.art_delete);

module.exports = router;
