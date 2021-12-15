import AuthenticationType from '../types/authentication-type';
import AuthConfig from './auth-config';

/**
 * OAuth configuration
 * @example
 * ```ts
 * const oauthConfig: OAuthConfig = new OAuthConfig
 * (
 *  '<token url>'
 *  '<audience>'
 *  '<client id>'
 *  '<client secret>'
 *  '[scope1, scope2]'
 * );
 * ```
 */
export default class OAuthConfig extends AuthConfig {
  tokenUrl: string;

  audience: string;

  scope?: string[];

  certificate?: string;

  constructor(
    tokenUrl: string,
    clientId: string,
    clientSecret: string,
    audience: string,
    scope?: string[],
    certificate?: string,
  ) {
    super(AuthenticationType.OAuth, clientId, clientSecret);
    this.tokenUrl = tokenUrl;
    this.audience = audience;
    this.scope = scope;
    this.certificate = certificate;
  }
}
