const { Schema, models, model } = require("mongoose");

const ServiceSchema = new Schema({
  name: {type: String, required: true},
  slug: {type: String, required: true, unique: true},
  image: {type: String},
  showImage: {type: Boolean},
  icon: {type: String},
  propertiresTitle: {type: String},
  properties: [{
    title: {type: String},
    propId: {type: String},
    type: {type: String},
    image: {type: String},
    time: {type: String},
    price: {type: String},
    priceType: {type: String},
    choose: {
      title: {type: String},
      propId: {type: String},
      type: {type: String},
      image: {type: String},
      time: {type: String},
      price: {type: String},
      priceType: {type: String},
    }
  }],
  datesDiscountTitle: {type: String},
  datesDiscount: {type: Object},
  additionalServicesTitle: {type: String},
  additionalServices: [{type: Schema.Types.ObjectId, ref: 'AdditionalService'}],
  dryServicesTitle: {type: String},
  dryServices: [{type: Schema.Types.ObjectId, ref: 'DryService'}],
}, {
  timestamps: true
});

export const Service = models.Service || model('Service', ServiceSchema);
