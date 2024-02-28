'use strict';

const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let tokenSchema = new Schema({
  token: String
}, {
  versionKey: false // You should be aware of the outcome after set to false
});

module.exports = {
  tokenSchema
};
