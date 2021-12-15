import AuthenticationType from '../types/authentication-type';
/**
 * THis are the base for Auth config
 */
export default abstract class AuthConfig {
  readonly authentication: AuthenticationType;

  clientId?: string;

  clientSecret?: string;

  constructor(auth: AuthenticationType, clientId?: string, clientSecret?: string) {
    this.authentication = auth;
    this.clientId = clientId;
    this.clientSecret = clientSecret;
  }
}
