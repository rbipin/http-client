import BasicAuthHttpClient from '../http-clients/basic-auth-http-client';
import { HttpConfiguration } from '../models/http-client-config';
import httpClient from '../http-clients/http-client';
import HttpClientCreator from './http-client-creator';

export default class BasicAuthHttpClientCreator extends HttpClientCreator {
  /**
   * Create HttpClient object with basic authentication (client id and secret in request header)
   * @param httpConfig - HttpConfiguration
   * @returns Returns the HttpClient object
   */
  public createClient(httpConfig: HttpConfiguration): httpClient {
    return new BasicAuthHttpClient(httpConfig);
  }
}
