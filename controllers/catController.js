'use strict';

const catModel = require('../models/catModel');
const { validationResult } = require('express-validator');
const { makeThumbnail } = require('../utils/resize');
const { getCoordinates } = require('../utils/imageMeta');
const cats = catModel.cats;


const cat_list_get = async (req, res) => {
  const cats = await catModel.getAllCats();
  res.json(cats);
};

const cat_get_by_id = async (req, res) => {
  console.log('catController: http get cat with path param', req.params);
  const cat = await catModel.getCat(req.params.id);
  res.json(cat);
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

const cat_create = async (req, res) => {
  //here we will create a cat with data coming from req...
  console.log('catController cat_create', req.body, req.file);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log('validation', errors.array());
    return res.status(400).json({ errors: errors.array() });
  }
  //get gps coordinates from image
  const coords = await getCoordinates(req.file.path);
  console.log('coords', coords);
  req.body.coords = coords;

  const id = await catModel.insertCat(req);
  const cat = await catModel.getCat(id);
  res.send(cat);
};

const cat_update_put = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log('validation', errors.array());
    return res.status(400).json({ errors: errors.array() });
  }
  const updateOk = await catModel.updateCat(req);
  res.json(`{message: "updated... ${updateOk}"}`);
};

const cat_delete = async (req, res) => {
  const deleteOk = await catModel.deleteCat(req.params.id);
  res.json(deleteOk);
};

module.exports = {
  cat_list_get,
  cat_get_by_id,
  cat_create,
  cat_update_put,
  cat_delete,
  make_thumbnail,
};
