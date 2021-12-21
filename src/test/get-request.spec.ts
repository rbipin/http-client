/* eslint-disable no-undef */

// eslint-disable-next-line import/no-extraneous-dependencies
import 'jest';
import {
  HttpClientFactory,
  HttpResponse,
  HttpConfiguration,
  HttpStatusCode,
  OAuthConfig,
} from '../index';
import mockServer from './mock-server/mock-server-main';
const server = new mockServer();

describe('Get - Data', () => {
  // beforeAll(() => {
  //   server.startServer();
  // });

  // afterAll(()=> {
  //   server.stopServer();
  // });
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
      baseUrl: 'http://localhost:8980',
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
