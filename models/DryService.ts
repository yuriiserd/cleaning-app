const { Schema, models, model } = require("mongoose");

const DryServiceSchema = new Schema({
  name: {type: String, required: true},
  time: {type: String},
  price: {type:String},
  image: {type: String},
  content: {type: String},
  gallery: {type: [String]},
  countable: {type: Boolean, default: false}
}, {
  timestamps: true
});

export const DryService = models.DryService || model('DryService', DryServiceSchema);
