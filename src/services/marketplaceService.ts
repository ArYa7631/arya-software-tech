import { AxiosResponse } from 'axios';
import { makeApiRequest, RequestMethod } from '../pages/api/apiHelpers';
const baseUrl = 'https://dummyjson.com';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const fetchMarketplaceConfiguration = async (): Promise<AxiosResponse<Todo[]>> => {
    return makeApiRequest<Todo[]>(baseUrl, {
        method: RequestMethod.GET,
        url: 'products',
    });
};


export { fetchMarketplaceConfiguration };