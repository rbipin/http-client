import AuthConfig from '../auth/auth-config';
import { Header } from './header';

/**
 * This interface is to define Http configuration that needs to be passed to create the client
 */
export interface HttpConfiguration {
  /** baseUrl for the HttpClient */
  baseUrl: string;
  /** headers */
  headers?: Header | null | undefined;
  /** Authentication configuration, BasicAuth, OAuthConfig */
  authConfig: AuthConfig | null | undefined;
  /** timeout (in ms), default is 10000 */
  timeout?: number | null | undefined;
}
