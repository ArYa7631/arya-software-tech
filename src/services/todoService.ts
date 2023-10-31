import { AxiosResponse } from 'axios';
import { ApiRequestMethod, makeApiRequest } from '../helpers/api/apiHelpers';
const baseUrl = 'https://dummyjson.com';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const fetchTodos = async (): Promise<AxiosResponse<Todo[]>> => {
    return makeApiRequest<Todo[]>(baseUrl, {
        method: ApiRequestMethod.GET,
        url: 'products',
    });
};


export { fetchTodos };