import Authentication from '../types/authentication';
import AuthConfig from './auth-config';
/**
 * Basic Auth Config
 * @example
 * ```ts
 * const basicAuthConfig: BasicAuthConfig = new BasicAuthConfig
 * (
 *  '<client id>'
 *  '<client secret>'
 * );
 * ```
 */
export default class BasicAuthConfig extends AuthConfig {
  constructor(id: string, secret: string) {
    super(Authentication.Basic, id, secret);
  }
}
