import BasicAuthConfig from '../auth/basic-auth-config';
import { isNullOrEmpty } from '../common/utilities';
import InvalidBasicAuthConfigException from '../exceptions/invalid-oauth-config';
import HttpClient from './http-client';
import { HttpConfiguration } from '../models/http-client-config';

/**
 * This is an basic auth http client that added ClientId and ClientSecret to the request headers
 */
export default class BasicAuthHttpClient extends HttpClient {
  constructor(httpConfig: HttpConfiguration) {
    super(httpConfig);
    if (httpConfig?.authConfig == null) {
      throw new InvalidBasicAuthConfigException(
        'Basic Auth configuration cannot be null or empty',
      );
    }
    const basicAuthConfig = httpConfig.authConfig as BasicAuthConfig;
    this.validateBasicAuthConfig(basicAuthConfig);
    this.initializeAuthRequestInceptor(basicAuthConfig);
  }

  private async initializeAuthRequestInceptor(
    authConfig: BasicAuthConfig,
  ): Promise<void> {
    this.instance.interceptors.request.use(
      async (request) => {
        if (authConfig == null) {
          return request;
        }
        request.headers = request.headers == null ? {} : request.headers;
        request.headers.client_id = authConfig.clientId as string;
        request.headers.client_secret = authConfig.clientSecret as string;
        return request;
      },
      (error) => {
        throw Error(error);
      },
    );
  }

  private validateBasicAuthConfig(basicAuthConfig: BasicAuthConfig): void {
    if (basicAuthConfig == null) {
      return;
    }
    const isValid =
      !isNullOrEmpty(basicAuthConfig.clientId) &&
      !isNullOrEmpty(basicAuthConfig.clientSecret);
    if (!isValid) {
      throw new InvalidBasicAuthConfigException(
        'OAuth Configuration is invalid',
      );
    }
  }
}
