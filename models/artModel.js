'use strict';
const pool = require('../database/db');
const promisePool = pool.promise();

const getArt = async (id) => {
  try {
    console.log('artModel getArt', id);
    const [
      rows,
    ] = await promisePool.execute(
      'SELECT art_gallery.*, art_user_info.name AS owner_name FROM art_gallery LEFT JOIN art_user_info ON art_gallery.owner = art_user_info.user_id WHERE art_gallery.art_id = ? ',
      [id]
    );
    return rows[0];
  } catch (e) {
    console.error('artModel:', e.message);
  }
};

const insertArt = async (req, coords) => {
  try {
    const [
      rows,
    ] = await promisePool.execute(
      'INSERT INTO art_gallery(description, owner,filename) VALUES (?,?,?);',
      [
        req.body.description,
        req.body.owner,
        req.file.filename,
      ]
    );
    console.log('artModel insert:', rows);
    return rows.insertId;
  } catch (e) {
    console.error('artModel geinsertArt:', e);
    return 0;
  }
};

const getAllArts = async () => {
  try {
    console.log('artModel getAllArts');
    const [rows] = await promisePool.execute(`SELECT art_id, art_gallery.description, owner, filename, user_id, art_user_info.name 
    AS ownername FROM art_gallery LEFT JOIN art_user_info ON owner = user_id`
    );
    return rows;
  } catch (e) {
    console.error('artModel getAllArts:', e.message);
  }
};


const getAllbyUserId = async (uid) => {
  try {
    const [rows] = await promisePool.execute(`SELECT art_id, art_gallery.description , owner, filename, user_id, art_user_info.name 
    AS ownername FROM art_gallery LEFT JOIN art_user_info ON owner = user_id WHERE owner = ?`,
    [uid]
    );
    return rows;
  } catch (e) {
    console.error('artModel getAllArtsByUsers:', e.message);
  }
};

const updateArt = async (req) => {
  try {
    console.log(req.body);
    const [rows] = await promisePool.execute(
        'UPDATE art_gallery SET description = ?, owner = ? ' +
        'WHERE art_id = ?;',
        [
          req.body.description,
          req.body.owner,
          req.body.id]);
    console.log('artModel update', rows);
    return rows.affectedRows === 1;
  } catch (e) {
    return false;
  }
};

const deleteArt = async (id) => {
  try {
    const [
      rows,
    ] = await promisePool.execute('DELETE FROM art_gallery WHERE art_id = ?', [id]);
    console.log('artModel delete: ', rows);
    return rows.affectedRows === 1;
  } catch (e) {
    return false;
  }
};

module.exports = {
  getAllArts,
  getArt,
  getAllbyUserId,
  insertArt,
  updateArt,
  deleteArt,
};
