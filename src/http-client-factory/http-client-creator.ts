import { HttpConfiguration } from '../models/http-client-config';
import HttpClient from '../http-clients/http-client';

/**
 * abstract class for HttpClientCreator
 */
export default abstract class HttpClientCreator {
  /**
   * Create HttpClient
   */
  public abstract createClient(
    httpConfig?: HttpConfiguration
  ): HttpClient;
}
