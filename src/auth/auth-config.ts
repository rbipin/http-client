import Authentication from '../types/authentication';
/**
 * THis are the base for Auth config
 */
export default abstract class AuthConfig {
  readonly authentication: Authentication;

  clientId?: string;

  clientSecret?: string;

  constructor(auth: Authentication, clientId?: string, clientSecret?: string) {
    this.authentication = auth;
    this.clientId = clientId;
    this.clientSecret = clientSecret;
  }
}
