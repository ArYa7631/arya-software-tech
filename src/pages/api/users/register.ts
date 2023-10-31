import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/lib/db';
import { RequestMethod } from '@/constants/globalConstant';
import { apiHandler, ApiHandlerFunction } from '@/helpers/api/apiHandler';
import { statusCodes } from '@/utils/statusCodes';
import { z } from 'zod';
import { errorHandler } from '@/helpers/api/errorHandler';
import { usersRepo } from '../../../features/usersRepo';
const bcrypt = require('bcryptjs');

const SIGNUP_FORM_SCHEMA = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Invalid email address.",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    }),
    confirmPassword: z.string().refine((data: any) => data.confirmPassword === data.password, {
        message: "Passwords do not match.",
    }),
});


const registerUsers: ApiHandlerFunction = async (req, res) => {
    try {
        const data = SIGNUP_FORM_SCHEMA.parse(req.body);
        const { password,confirmPassword, ...user } = req.body;
        if (usersRepo.find((x:any) => x.email === user.email)){
            throw `User with the username "${user.email}" already exists`;
        }
        const userData:any = user
        userData.hash = bcrypt.hashSync(password, 10);
        usersRepo.create(user)
        return res.status(statusCodes.OK).json({ success: true });
    } catch (error) {
        return errorHandler(error,res)
    }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await apiHandler(registerUsers, req, res, RequestMethod.POST);
}