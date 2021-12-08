import OAuthHttpClient from '../http-clients/oauth-http-client';
import { HttpConfiguration } from '../models/http-client-config';
import httpClient from '../http-clients/http-client';
import HttpClientCreator from './http-client-creator';

export default class OAuthHttpClientCreator extends HttpClientCreator {
  /**
   * Create HttpClient object with OAuth, i.e this httpclient will make the token call to and add the bearer token to the actual resource
   * @param httpConfig - HttpConfiguration
   * @returns Returns the HttpClient object
   */
  public createClient(httpConfig: HttpConfiguration): httpClient {
    return new OAuthHttpClient(httpConfig);
  }
}
