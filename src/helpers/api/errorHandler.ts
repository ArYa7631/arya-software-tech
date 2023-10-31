import { NextApiRequest, NextApiResponse } from "next";
import { statusCodes, statusMessages } from "@/utils/statusCodes";
import { RequestMethodType } from "@/constants/globalnterface";

export const errorHandler = (err: any, res: NextApiResponse) => {
    if (err instanceof Error) {
        // Handle specific error types
        if (err.message) {
            return res.status(statusCodes.Conflict).json({ error: err.message });
        }
        // Handle other types of errors as needed
    }
    if (typeof (err) === 'string') {
        // custom application error
        const is404 = err.toLowerCase().endsWith('not found');
        const status = is404 ? statusCodes.Not_Found : statusCodes.Bad_Request;
        return res.status(status).json({ message: err });
    }

    if (err.name === 'UnauthorizedError') {
        // jwt authentication error
        return res.status(statusCodes.Unauthorized).json({ message: statusMessages.Unauthorized });
    }

    // default to 500 server error
    console.error(err);
    return res.status(statusCodes.Internal_Server_Error).json({ message: statusMessages.Internal_Server_Error });
}

export const isErrorMethod = (req:NextApiRequest,res:NextApiResponse,methodType:RequestMethodType) =>{
    if(req.method != methodType){
        return res.status(statusCodes.Method_Not_Allowed).end();
    }
}