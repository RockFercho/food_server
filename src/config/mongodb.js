const mongoose = require('mongoose');

const uri = 'mongodb+srv://rockfercho:abcdefABCDEF@swfood.hfxcy7s.mongodb.net/';
// const uri = 'mongodb://localhost:27017/swfood';
async function connect() {
  await mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
  console.log('Data base connected ...');
}

module.exports = {
  connect
};

