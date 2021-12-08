/* eslint-disable no-undef */

// eslint-disable-next-line import/no-extraneous-dependencies
import 'jest';
import { HttpResponse } from '../models/httpResponse';
import HttpClientFactory from '../http-client-factory';
import { HttpConfiguration } from '../models/http-client-config';
import HttpStatusCode from '../types/http-error-codes';
import BasicAuthConfig from '../auth/basic-auth-config';
import Header from '../models/header';

describe('Get - Data', () => {
  interface Data {
    id: number;
    title: string;
    author: string;
  }
  /**
   * Need to run the local json-server to test this
   */
  it('Get-data', async () => {
    const httpConfig: HttpConfiguration = {
      baseUrl: 'http://localhost:3000',
      authConfig: null,
      headers: null,
      timeout: null,
    };
    const httpClientFac = new HttpClientFactory();
    const httpClient = httpClientFac.createClient(httpConfig);
    const response: HttpResponse<Data> = await httpClient.get('/posts/1');
    expect(response.status).toBe(HttpStatusCode.Ok);
    expect(response?.data?.id).toBe(1);
  });
});
