import { HttpConfiguration } from '../models/http-client-config';
import HttpClient from './http-client';

/**
 *
 */
export default class BasicHttpClient extends HttpClient {
  constructor(httpConfig?: HttpConfiguration | null | undefined) {
    super(httpConfig);
  }
}
