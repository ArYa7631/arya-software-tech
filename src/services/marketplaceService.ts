import { AxiosResponse } from 'axios';
import { makeApiRequest, ApiRequestMethod } from '../helpers/api/apiHelpers';
const baseUrl = 'https://dummyjson.com';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const fetchMarketplaceConfiguration = async (): Promise<AxiosResponse<Todo[]>> => {
    return makeApiRequest<Todo[]>(baseUrl, {
        method: ApiRequestMethod.GET,
        url: 'products',
    });
};


export { fetchMarketplaceConfiguration };