import BasicAuthHttpClientCreator from './http-client-factory/basic-auth-client-creator';
import OAuthHttpClientCreator from './http-client-factory/oauth-http-client-creator';
import BasicHttpClientCreator from './http-client-factory/basic-http-client-creator';
import HttpClient from './http-clients/http-client';
import HttpClientCreator from './http-client-factory/http-client-creator';
import { HttpConfiguration } from './models/http-client-config';
import Authentication from './types/authentication-type';

/**
 * This is the HttpClientFactory
 * @example
 * Here's an example
 * ```ts
 *     const httpConfig: HttpConfiguration = {
 *     baseUrl: 'http://localhost:3000',
 *     authConfig: null,
 *     headers: null,
 *     timeout: null,
 *   };
 *   const httpClientFac = new HttpClientFactory();
 *   const httpClient = httpClientFac.CreateClient(httpConfig);
 *   const response: HttpResponse<Data> = await httpClient.get('/posts/1');
 * ```
 */
export default class HttpClientFactory {
  private httpClientCreatorMap = new Map<Authentication, HttpClientCreator>();

  constructor() {
    this.registerHttpClients();
  }

  /**
   * Return the HttpClient object
   * @param httpConfig - HttpConfiguration
   * @returns The httpClient, based on the AuthConfiguration it returns either a basic HttpClient, a basic auth HttpClient or a OAuthHttpClient
   */
  public createClient(
    httpConfig?: HttpConfiguration,
  ): HttpClient | null | undefined {
    const { authConfig } = httpConfig ?? {};
    let httpClientCreator: HttpClientCreator | null | undefined = null;
    if (httpConfig == null) {
      httpClientCreator = this.httpClientCreatorMap.get(Authentication.None);
      return httpClientCreator?.createClient(httpConfig);
    }
    if (authConfig == null) {
      httpClientCreator = this.httpClientCreatorMap.get(Authentication.None);
      return httpClientCreator?.createClient(httpConfig);
    }
    httpClientCreator = this.httpClientCreatorMap.get(
      authConfig.authentication,
    );
    return httpClientCreator?.createClient(httpConfig);
  }

  private registerHttpClients(): void {
    this.httpClientCreatorMap.set(
      Authentication.None,
      new BasicHttpClientCreator(),
    );
    this.httpClientCreatorMap.set(
      Authentication.Basic,
      new BasicAuthHttpClientCreator(),
    );
    this.httpClientCreatorMap.set(
      Authentication.OAuth,
      new OAuthHttpClientCreator(),
    );
  }
}
