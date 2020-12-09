'use strict';
const pool = require('../database/db');
const promisePool = pool.promise();

const getComment = async (id) => {
  try {
    console.log('CommentModel getComment', id);
    const [rows] = await promisePool.execute(
      'SELECT art_comment.*, art_user_info.name AS owner_name FROM art_comment LEFT JOIN art_user_info ON art_comment.user_id = art_user_info.user_id WHERE art_comment.art_id = ?;',
      [id]
    );
    return rows;
  } catch (e) {
    console.error('CommentModel:', e.message);
  }
};

const insertComment = async (req, coords) => {
  try {
    const [rows] = await promisePool.execute(
      'INSERT INTO art_comment(user_id,art_id,comment, com_type) VALUES (?,?,?,?);',
      [
        req.body.user_id,
        req.body.art_id,
        req.body.comment,
        req.body.co_type,
      ]
    );
    console.log('CommentModel insert:', rows);
    return rows.insertId;
  } catch (e) {
    console.error('CommentModel insertComment:', e);
    return 0;
  }
};

const getAllComments = async () => {
  try {
    console.log('CommentModel getAllComments');
    const [rows] = await promisePool.execute(`SELECT Comment_id, Comment_gallery.description, owner, filename, user_id, Comment_user_info.name 
    AS ownername FROM Comment_gallery LEFT JOIN Comment_user_info ON owner = user_id`
    );
    return rows;
  } catch (e) {
    console.error('CommentModel getAllComments:', e.message);
  }
};


const getAllbyUserId = async (uid) => {
  try {
    const [rows] = await promisePool.execute(`SELECT Comment_id, Comment_gallery.description , owner, filename, user_id, Comment_user_info.name 
    AS ownername FROM Comment_gallery LEFT JOIN Comment_user_info ON owner = user_id WHERE owner = ?`,
    [uid]
    );
    return rows;
  } catch (e) {
    console.error('CommentModel getAllCommentsByUsers:', e.message);
  }
};

const updateComment = async (req) => {
  try {
    console.log(req.body);
    const [rows] = await promisePool.execute(
        'UPDATE Comment_gallery SET description = ?, owner = ? ' +
        'WHERE Comment_id = ?;',
        [
          req.body.description,
          req.body.owner,
          req.body.id]);
    console.log('CommentModel update', rows);
    return rows.affectedRows === 1;
  } catch (e) {
    return false;
  }
};

const deleteComment = async (id) => {
  try {
    const [
      rows,
    ] = await promisePool.execute('DELETE FROM Comment_gallery WHERE Comment_id = ?', [id]);
    console.log('CommentModel delete: ', rows);
    return rows.affectedRows === 1;
  } catch (e) {
    return false;
  }
};

module.exports = {
  getAllComments,
  getComment,
  getAllbyUserId,
  insertComment,
  updateComment,
  deleteComment,
};
