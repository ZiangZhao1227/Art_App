'use strict';

const artModel = require('../models/artModel');
const { validationResult } = require('express-validator');
const { makeThumbnail } = require('../utils/resize');
const { getCoordinates } = require('../utils/imageMeta');
const arts = artModel.arts;


const art_list_get = async (req, res) => {
  const arts = await artModel.getAllArts();
  res.json(arts);
};

const art_get_by_id = async (req, res) => {
  console.log('artController: http get art with path param', req.params);
  const art = await artModel.getArt(req.params.id);
  res.json(art);
};



const art_get_by_uid = async (req, res) => {
  console.log('artController: http get art with path param', req.params);
  const art = await artModel.getAllbyUserId(req.params.uid);
  res.json(art);
};


const make_thumbnail = async (req, res, next) => {
  try {
    const ready = await makeThumbnail(
      { width: 160, height: 160 },
      req.file.path,
      './thumbnails/' + req.file.filename
    );
    if (ready) {
      console.log('make_thumbnail', ready);
      next();
    }
  } catch (e) {
    next();
  }
};

const art_create = async (req, res) => {
  //here we will create a art with data coming from req...
  console.log('artController art_create', req.body, req.file);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log('validation', errors.array());
    return res.status(400).json({ errors: errors.array() });
  }

  const id = await artModel.insertArt(req);
  const art = await artModel.getArt(id);
  res.send(art);
};

const art_update_put = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log('validation', errors.array());
    return res.status(400).json({ errors: errors.array() });
  }
  const updateOk = await artModel.updateArt(req);
  res.json(`{message: "updated... ${updateOk}"}`);
};

const art_delete = async (req, res) => {
  const deleteOk = await artModel.deleteArt(req.params.id);
  res.json(deleteOk);
};

module.exports = {
  art_list_get,
  art_get_by_id,
  art_create,
  art_update_put,
  art_get_by_uid,
  art_delete,
  make_thumbnail,
};
