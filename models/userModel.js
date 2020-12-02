'use strict';
const pool = require('../database/db');
const promisePool = pool.promise();

const getUser = async (id) => {
  try {
    console.log('userModel.getUser', id);
    const [
      rows,
    ] = await promisePool.execute('SELECT * FROM wop_user WHERE user_id = ?', [
      id,
    ]);
    return rows[0];
  } catch (e) {
    console.error('userModel:', e.message);
  }
};

const getAllUsers = async () => {
  try {
    const [rows] = await promisePool.execute('SELECT * FROM wop_user');
    return rows;
  } catch (e) {
    console.error('userModel:', e.message);
  }
};

const getUserLogin = async (params) => {
  try {
    console.log(params);
    const [rows] = await promisePool.execute(
      'SELECT * FROM wop_user WHERE email = ?;',
      params
    );
    return rows;
  } catch (e) {
    console.log('error', e.message);
  }
};

const insertUser = async (req) => {
  try {
    const [rows] = await promisePool.execute(
        'INSERT INTO wop_user (name, email, password)' +
        'VALUES (?, ?, ?)',
        [
          req.body.name,
          req.body.username,
          req.body.password]);
    console.log('userModel insert: ', rows);
    return rows.insertId;
  } catch (e) {
    console.log('userModel insert error: ', e);
    return 0;
  }
};


const updateUser = async (id, req) => {
  try {
    const [rows] = await promisePool.execute(
        'UPDATE wop_user SET name = ?, email = ?, password = ?' +
        'WHERE user_id = ?;', [
          req.body.name, req.body.username, req.body.passwd, id,
        ]);
    console.log('userModel update', rows);
    return rows.affectedRows === 1;

  } catch (e) {
    console.log('userModel error: ', e);
    return false;
  }
};

const deleteUser = async (id, req) => {
  try {
    const [rows] = await promisePool.execute(
        'DELETE FROM wop_user WHERE user_id = ?;',
        [id]);
    console.log('userModel delete', rows);
  } catch (e) {
    console.log('userModel error:', e);
    return false;
  }
};

module.exports = {
  getAllUsers,
  getUser,
  getUserLogin,
  updateUser,
  insertUser,
  deleteUser,
};
