import AuthConfig from '../auth/auth-config';
import { Header } from './header';

/**
 * This interface is to define Http configuration that needs to be passed to create the client
 */
export interface HttpConfiguration {
  /** baseUrl for the HttpClient */
  baseUrl?: string;
  /** headers */
  headers?: Header;
  /** Authentication configuration, 
   * BasicAuth [[BasicAuthConfig]], OAuthConfig [[OAuthConfig]]
   */
  authConfig?: AuthConfig;
  /** timeout (in ms), default is 10000 */
  timeout?: number;
  /** 
   * Https certificate in string format
   */
  certificate?: string;
}
