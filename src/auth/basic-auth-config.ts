import Authentication from '../types/authentication';
import AuthConfig from './auth-config';

export default class BasicAuthConfig extends AuthConfig {
  constructor(id: string, secret: string) {
    super(Authentication.Basic, id, secret);
  }
}
