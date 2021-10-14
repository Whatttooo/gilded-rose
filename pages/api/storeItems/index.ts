import nc from 'next-connect';
import type { NextApiRequest, NextApiResponse } from 'next';
import { storeItems } from '../../../src/data/data';

const handler = nc().get((req: NextApiRequest, res: NextApiResponse) => {
  res.json({ data: storeItems });
});

export default handler;
