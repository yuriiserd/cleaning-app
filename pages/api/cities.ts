import { NextApiRequest, NextApiResponse } from "next";
import { mongooseConnect } from "../../lib/mongoose";
import { City } from "../../models/City";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  await mongooseConnect();

  if (req.method === 'GET') {
    if (req.query.id) {
      const city = await City.findById(req.query.id);
      res.status(200).json(city);
    } else {
      const city = await City.find({}).sort({name: 1}).exec();
      res.status(200).json(city);
    }
  }

}