
import { disconnect } from '@/lib/db';
import { NextApiRequest, NextApiResponse } from 'next';
import { errorHandler, isErrorMethod } from './errorHandler';
import { RequestMethodType } from '@/constants/globalnterface';
import { statusCodes } from '@/utils/statusCodes';

export type ApiHandlerFunction = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

export const apiHandler = async (
    handler: ApiHandlerFunction,
    req: NextApiRequest,
    res: NextApiResponse,
    MethodType: RequestMethodType
) => {
    try {
        isErrorMethod(req, res, MethodType);
        setTimeout(async () => {
            await handler(req, res);
        }, 2000);
    } catch (error) {
        console.error('Error:', error);
        errorHandler(error, res);
    } finally {
        if (typeof disconnect === 'function') {
            disconnect(); // Assuming disconnect is a function that disconnects the Prisma client
        }
    }
};
