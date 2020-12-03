'use strict';

const express = require('express');
const { body } = require('express-validator');
const multer = require('multer');
const catController = require('../controllers/catController');
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
  

router.get('/', catController.cat_list_get);
router.post(
  '/',
  upload.single('cat'),
  catController.make_thumbnail,
  injectFile,
  [
    body('name', 'cant be empty').isLength({ min: 1 }),
    body('age', 'must be a number').isLength({ min: 1 }).isNumeric(),
    body('weight', 'must be a number').isLength({ min: 1 }).isNumeric(),
    body('owner', 'required').isLength({ min: 1 }).isNumeric(),
    body('type', 'not image').contains('image'),
  ],
  catController.cat_create);

router.get('/:id', catController.cat_get_by_id);

router.put('/',
    [
      body('name', 'cannot be empty').isLength({min: 1}),
      body('age', 'must be a number').isLength({min: 1}).isNumeric(),
      body('weight', 'must be a number').isLength({min: 1}).isNumeric(),
      body('owner', 'required').isLength({min: 1}).isNumeric(),
    ],
    catController.cat_update_put);


router.delete('/:id', catController.cat_delete);

module.exports = router;
