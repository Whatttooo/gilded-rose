import nc from 'next-connect';
import type { NextApiRequest, NextApiResponse } from 'next';
import { backstagePasses } from '../../../src/data/data';

const handler = nc().get((req: NextApiRequest, res: NextApiResponse) => {
  res.json({ data: backstagePasses });
});

export default handler;
