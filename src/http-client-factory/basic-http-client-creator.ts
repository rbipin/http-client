import BasicHttpClient from '../http-clients/basic-http-client';
import { HttpConfiguration } from '../models/http-client-config';
import httpClient from '../http-clients/http-client';
import HttpClientCreator from './http-client-creator';

export default class BasicHttpClientCreator extends HttpClientCreator {
  /**
   * Create HttpClient object without any authentication
   * @param httpConfig - HttpConfiguration
   * @returns Returns the HttpClient object
   */
  public createClient(httpConfig: HttpConfiguration): httpClient {
    return new BasicHttpClient(httpConfig);
  }
}
