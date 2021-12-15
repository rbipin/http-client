import axios, { AxiosRequestConfig } from 'axios';
import { HttpConfiguration } from '../models/http-client-config';
import HttpClient from './http-client';

/**
 * This is a basic httpclient
 */
export default class BasicHttpClient extends HttpClient {
  constructor(httpConfig?: HttpConfiguration, axiosConfig?: AxiosRequestConfig) {
      super(httpConfig);
  }
}
