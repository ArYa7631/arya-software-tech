import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export enum ApiRequestMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export interface ApiRequestOptions<Data = any> {
  method: ApiRequestMethod;
  url: string;
  data?: Data;
  config?: AxiosRequestConfig;
}

export async function makeApiRequest<Data>(
  baseUrl: string,
  options: ApiRequestOptions<Data>
): Promise<AxiosResponse<Data>> {
  const { method, url, data, config } = options;

  try {
    const response = await axios({
      method,
      url: `${baseUrl}/${url}`,
      data,
      ...config,
    });

    return response;
  } catch (error) {
    throw error;
  }
}
