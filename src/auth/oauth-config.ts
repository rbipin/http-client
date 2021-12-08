import Authentication from '../types/authentication';
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

  scope: string[] | null | undefined;

  constructor(
    tokenUrl: string,
    clientId: string,
    clientSecret: string,
    audience: string,
    scope?: string[] | null | undefined,
  ) {
    super(Authentication.OAuth, clientId, clientSecret);
    this.tokenUrl = tokenUrl;
    this.audience = audience;
    this.scope = scope;
  }
}
