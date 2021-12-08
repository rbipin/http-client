import Authentication from '../types/authentication';
import AuthConfig from './auth-config';

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
