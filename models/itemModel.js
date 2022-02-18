const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const itemSchema = mongoose.Schema(
{
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  description: {
      type: String,
      required: true,
      trim: true
  },
  license: {
      type: String,
      required: false,
      trim: true
  },
  category: {
      type: String,
      required: true,
      trim: true
  },
  imageUrl: { 
      type: String, 
      required: true,
      validate: [isEmail],
      unique: true,
      trim: true
    },
    price:
    {
        type: Number,
        required: false,
        trim: true
    },
},
{ 
    timestamps: true,
});

itemSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Item', itemSchema);