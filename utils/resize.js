'use strict';

const sharp = require('sharp');

const makeThumbnail = async (size, file, thumbname) => { 
  // file = full path to image (req.file.path), thumbname = filename (req.file.filename)
  // size is entered as an object: {width: X, height: Y}
  // TODO: use sharp to create a png thumbnail of 160x160px, use async await
  console.log('makeThumbnail', file, thumbname);
  const thumbnail = await sharp(file).resize(size.width, size.height).toFile(thumbname);
  return thumbnail;
};

module.exports = {
  makeThumbnail,
};
