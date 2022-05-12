import { DateUtil } from '@ts-common-template/common';
import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/api/hello', (req: Request, res: Response) => {
  const now = DateUtil.now();
  res.status(200).send({ message: `hello ${now.toLocaleString('ja')}` });
});

export { router as helloRouter };
