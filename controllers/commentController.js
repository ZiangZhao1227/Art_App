'use strict';

const commentModel = require('../models/commentModel');
const { validationResult } = require('express-validator');
const { makeThumbnail } = require('../utils/resize');
const { getCoordinates } = require('../utils/imageMeta');
const comments = commentModel.comments;


const comment_list_get = async (req, res) => {
  const comments = await commentModel.getAllComments();
  res.json(comments);
};

const comment_get_by_id = async (req, res) => {
  console.log('commentController: http get comment with path param', req.params);
  const comment = await commentModel.getComment(req.params.id);
  res.json(comment);
};


const comment_get_by_uid = async (req, res) => {
  console.log('commentController: http get comment with path param', req.params);
  const comment = await commentModel.getAllbyUserId(req.params.uid);
  res.json(comment);
};

const like_create = async (req, res) => {
  console.log('commentController: http get like with path param', req.params.art_id, req.params.user_id, req.params.status);
  const like = await commentModel.insertLike(req.params.art_id, req.params.user_id, req.params.status);
  res.json(like);
};

const like_update = async (req, res) => {
 const like = await commentModel.updateLike(req.params.art_id, req.params.user_id, req.params.status);
  res.json(`{message: "updated... ${like}"}`);
  console.log('commentController: http get like update with path param', req.params.art_id, req.params.user_id, req.params.status);

};

const comment_create = async (req, res) => {
  console.log('commentController comment_create', req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log('validation', errors.array());
    return res.status(400).json({ errors: errors.array() });
  }

  const id = await commentModel.insertComment(req);
  const comment = await commentModel.getComment(id);
  res.send(comment);
};

const comment_update_put = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log('validation', errors.array());
    return res.status(400).json({ errors: errors.array() });
  }
  const updateOk = await commentModel.updateComment(req);
  res.json(`{message: "updated... ${updateOk}"}`);
};

const comment_delete = async (req, res) => {
  const deleteOk = await commentModel.deleteComment(req.params.id);
  res.json(deleteOk);
};

module.exports = {
  comment_list_get,
  comment_get_by_id,
  comment_create,
  like_create,
  like_update,
  comment_update_put,
  comment_get_by_uid,
  comment_delete,
};
