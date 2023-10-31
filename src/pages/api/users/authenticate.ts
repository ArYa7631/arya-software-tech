import { NextApiRequest, NextApiResponse } from 'next';
import { RequestMethod } from '@/constants/globalConstant';
import { apiHandler, ApiHandlerFunction } from '@/helpers/api/apiHandler';
import { statusCodes } from '@/utils/statusCodes';
import { errorHandler } from '@/helpers/api/errorHandler';
import { usersRepo } from '../../../features/usersRepo';
import getConfig from 'next/config';
import { getLocalStorage, setLocalStorage } from '@/storage/localStorage';

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { serverRuntimeConfig } = getConfig();

const authenticateUsers: ApiHandlerFunction = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = usersRepo.find((u: any) => u.email === email);
        if (!(user && bcrypt.compareSync(password, user.hash))) {
            throw 'Username or password is incorrect';
        }
        const token = jwt.sign({ sub: user.id }, serverRuntimeConfig.secret, { expiresIn: '7d' });
        const { hash, ...userData } = user
        const response = { token, ...userData }
        return res.status(statusCodes.OK).json(response);
    } catch (error) {
        return errorHandler(error, res)
    }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await apiHandler(authenticateUsers, req, res, RequestMethod.POST);
}