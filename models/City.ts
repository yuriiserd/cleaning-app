const { Schema, models, model } = require("mongoose");

const CitySchema = new Schema({
  name: {type: String, required: true},
  price: {type: Number, required: true}
}, {
  timestamps: true
});

export const City = models.City || model('City', CitySchema);