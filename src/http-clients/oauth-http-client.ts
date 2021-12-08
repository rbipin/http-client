import OAuthConfig from '../auth/oauth-config';
import OAuthTokenManager from '../auth/oauth-token-manager';
import { isNullOrEmpty } from '../common/utilities';
import InvalidOAuthConfigurationException from '../exceptions/invalid-oauth-config';
import HttpClient from './http-client';
import { HttpConfiguration } from '../models/http-client-config';

/**
 * This is an OAuth HttpClient, based on the credentials passed as OAuthConfig this will request for a bearer token and send that with each request
 */
export default class OAuthHttpClient extends HttpClient {
  constructor(httpConfig: HttpConfiguration) {
    if (httpConfig?.authConfig == null) {
      throw new InvalidOAuthConfigurationException(
        'OAuth configuration is missing',
      );
    }
    super(httpConfig);
    const oAuthConfig: OAuthConfig = httpConfig.authConfig as OAuthConfig;
    this.validateOAuthConfig(oAuthConfig);
    this.initializeAuthRequestInceptor(oAuthConfig);
  }

  private async initializeAuthRequestInceptor(
    authConfig: OAuthConfig,
  ): Promise<void> {
    this.instance.interceptors.request.use(
      async (request) => {
        if (authConfig == null) {
          return request;
        }
        const accessToken = await OAuthTokenManager.issueToken(authConfig);
        request.headers = request.headers == null ? {} : request.headers;
        request.headers.Authorization = `Bearer ${accessToken}`;

        return request;
      },
      (error) => {
        throw Error(error);
      },
    );
  }

  private validateOAuthConfig(oauthConfig: OAuthConfig): void {
    if (oauthConfig == null) {
      return;
    }
    const isValid =
      !isNullOrEmpty(oauthConfig.tokenUrl) &&
      !isNullOrEmpty(oauthConfig.audience) &&
      !isNullOrEmpty(oauthConfig.clientId) &&
      !isNullOrEmpty(oauthConfig.clientSecret);

    if (!isValid) {
      throw new InvalidOAuthConfigurationException(
        'OAuth Configuration is invalid',
      );
    }
  }
}
