
import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/lib/db';
import { RequestMethod } from '@/constants/globalConstant';
import { apiHandler, ApiHandlerFunction } from '@/helpers/api/apiHandler';

const getUsers: ApiHandlerFunction = async (req, res) => {
  const users = await db.user.findMany();
  return res.status(200).json(users);
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await apiHandler(getUsers, req, res, RequestMethod.GET);
}