import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from 'axios';
import Header from '../models/header';
import { HttpConfiguration } from '../models/http-client-config';
import { HttpResponse } from '../models/httpResponse';

/**
 * Abstract class for HttpClient
 */
export default abstract class HttpClient {
  instance: AxiosInstance;

  readonly baseConfig: AxiosRequestConfig;

  constructor(baseRequestConfig: HttpConfiguration | null | undefined) {
    const headers = baseRequestConfig?.headers ?? {};
    this.baseConfig = {
      baseURL: baseRequestConfig?.baseUrl,
      headers,
      timeout: baseRequestConfig?.timeout ?? 10000,
    };
    this.instance = axios.create(this.baseConfig);
  }

  private async sendRequest(
    instance: AxiosInstance,
    request: AxiosRequestConfig,
  ): Promise<AxiosResponse> {
    try {
      return instance.request(request);
    } catch (e) {
      throw new Error('Some error in send request');
    }
  }

  private updateRequestHeaders(
    request: AxiosRequestConfig,
    headers?: Header,
  ): void {
    const commonHeaders = this.instance.defaults?.headers?.common;
    const allHeaders: AxiosRequestHeaders | undefined = commonHeaders;
    if (headers == null || allHeaders == null) {
      return;
    }
    const requestHeaders = request.headers ?? {};
    request.headers = {
      ...allHeaders,
      ...headers,
      ...requestHeaders,
    };
  }

  /**
   * Get the resource from the server
   * @param url - url of the resource or uri of the resource if the base url is already set
   * @param headers - any request headers
   * @returns return HttpRespose
   */
  public async get<T>(url: string, headers?: Header): Promise<HttpResponse<T>> {
    const request: AxiosRequestConfig = {
      url,
      method: 'get',
    };
    this.updateRequestHeaders(request, headers);
    const response = await this.sendRequest(this.instance, request);
    return {
      status: response.status,
      data: response.data,
    };
  }

  /**
   * POST the resource to the server
   * @param url - url of the resource or uri of the resource if the base url is already set
   * @param data - Data to be sent to the server
   * @param headers - any request headers
   * @returns return HttpRespose
   */
  public async post<T>(
    url: string,
    data?: any,
    headers?: Header,
  ): Promise<HttpResponse<T>> {
    const request: AxiosRequestConfig = {
      method: 'post',
      url,
      data,
    };
    this.updateRequestHeaders(request, headers);
    const response = await this.sendRequest(this.instance, request);
    return {
      status: response.status,
      data: response.data,
    };
  }

  /**
   * PUT the resource to the server
   * @param url - url of the resource or uri of the resource if the base url is already set
   * @param data - data to replace the resource
   * @param headers - any request headers
   * @returns returns HttpResponse
   */
  public async put<T>(
    url: string,
    data?: any,
    headers?: Header,
  ): Promise<HttpResponse<T>> {
    const request: AxiosRequestConfig = {
      url,
      method: 'put',
      data,
    };
    this.updateRequestHeaders(request, headers);
    const response = await this.sendRequest(this.instance, request);
    return {
      status: response.status,
      data: response.data,
    };
  }

  /**
   * PATCH the http resource
   * @param url - url of the resource or uri of the resource if the base url is already set
   * @param data - Data to be sent to the server
   * @param headers - any request headers
   * @returns returns HttpResponse
   */
  public async patch<T>(
    url: string,
    data: any,
    headers?: Header,
  ): Promise<HttpResponse<T>> {
    const request: AxiosRequestConfig = {
      url,
      method: 'patch',
      data,
    };
    this.updateRequestHeaders(request, headers);
    const response = await this.sendRequest(this.instance, request);
    return {
      status: response.status,
      data: response.data,
    };
  }

  /**
   * DELETE the resource
   * @param url - url of the resource or uri of the resource if the base url is already set
   * @param headers - any request headers
   * @returns the HttpResource
   */
  public async delete<T>(
    url: string,
    headers?: Header,
  ): Promise<HttpResponse<T>> {
    const request: AxiosRequestConfig = {
      url,
      method: 'delete',
    };
    this.updateRequestHeaders(request, headers);
    const response = await this.sendRequest(this.instance, request);
    return {
      status: response.status,
      data: response.data,
    };
  }
}
