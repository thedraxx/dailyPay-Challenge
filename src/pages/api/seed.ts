// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { data } from "../../database/data";
import { IData } from "@/interfaces/dataInterface";
import { IDatum } from "../../interfaces/dataInterface";

type Data = {
  data: IDatum[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ data });
}
