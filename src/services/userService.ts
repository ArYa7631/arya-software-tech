import { BehaviorSubject } from 'rxjs';
import { AxiosResponse } from 'axios';
import { ApiRequestMethod, makeApiRequest } from '../helpers/api/apiHelpers';
import { getLocalStorage, removeLocalStorage, setLocalStorage } from '@/storage/localStorage';
import getConfig from 'next/config';
import Router from 'next/router';

const { publicRuntimeConfig } = getConfig();
const baseUrl = 'http://localhost:3000';
const userSubject = new BehaviorSubject(process.browser && getLocalStorage('user'));

interface RegisterForm { name: string, phone: string, email: string, password: string, confirmPassword: string }

const submitSignupFormData = async (form_data: any): Promise<AxiosResponse<any>> => {
    return makeApiRequest<RegisterForm>(baseUrl, {
        method: ApiRequestMethod.POST,
        url: 'api/users/register',
        data: form_data
    });
};

interface LoginForm { email: string, password: string }

const submitLoginFormData = async (form_data: any): Promise<AxiosResponse<any>> => {
    try {
        const response = await makeApiRequest<LoginForm>(baseUrl, {
            method: ApiRequestMethod.POST,
            url: 'api/users/authenticate',
            data: form_data
        })
        const user = response.data;
        userSubject.next(user);
        setLocalStorage('user', user);
        return response;
    } catch (error) {
        throw error;
    }
};

const userObservable = userSubject.asObservable();

const logout = () =>{
    removeLocalStorage('user')
    userSubject.next(null);
    Router.push('/account');
}
export const userService = { userObservable, submitSignupFormData, submitLoginFormData,logout, };