import { NextApiRequest, NextApiResponse } from "next";
import { mongooseConnect } from "../../lib/mongoose";
import { Service } from "../../models/Service";
import {AdditionalService} from "../../models/AdditionalService";
import {DryService} from "../../models/DryService";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  await mongooseConnect();

  

  if (req.method === 'GET') {
    if (req.query.id) {
      const service = await Service.findById(req.query.id);
      res.status(200).json(service);
    } else if (req.query.email) {
      const service = await Service.findOne({email: req.query.email});
      res.status(200).json(service);
    } else if (req.query.slug) {
      await AdditionalService.init();
      await DryService.init();
      const service = await Service.findOne({slug: req.query.slug})
        .populate({path: 'additionalServices', select: 'name price time image countable'})
        .populate({path: 'dryServices', select: 'name price time image countable'});
      res.status(200).json(service);
    } else {
      const services = await Service.find({}).sort({createdAt: 1});
      res.status(200).json(services);
    }
  }
}