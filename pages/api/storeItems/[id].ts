import nc from 'next-connect';
import type { NextApiRequest, NextApiResponse } from 'next';
import { storeItems } from '../../../src/data/data';

const getNote = (itemId) => storeItems.find((item) => item.id === itemId);

const handler = nc().get((req: NextApiRequest, res: NextApiResponse) => {
  const item = getNote(req.query.id);

  if (!item) {
    res.status(404);
    res.end();
    return;
  }

  res.json({ data: item });
});

export default handler;
