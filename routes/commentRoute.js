'use strict';

const express = require('express');
const { body } = require('express-validator');
const commentController = require('../controllers/commentController');
const router = express.Router();

router.post(
  '/',
  [
    body('user_id', 'required').isLength({min: 1}).isNumeric(),
    body('art_id', 'required').isLength({min: 1}).isNumeric(),
    body('comment', 'cannot be empty').isLength({min: 1}),
    body('co_type', 'required').isLength({min: 1}).isNumeric(),
  ],
  commentController.comment_create);

router.get('/', commentController.comment_list_get);


router.get('/:id', commentController.comment_get_by_id);

router.get('/comment/:uid', commentController.comment_get_by_uid);

router.put('/',
    [
      body('user_id', 'required').isLength({min: 1}).isNumeric(),
      body('art_id', 'required').isLength({min: 1}).isNumeric(),
      body('comment', 'cannot be empty').isLength({min: 1}),
      body('co_type', 'required').isLength({min: 1}).isNumeric(),
    ],
    commentController.comment_update_put);

    
    
router.delete('/:id', commentController.comment_delete);

module.exports = router;
