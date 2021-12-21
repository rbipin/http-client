
# http-client

A wrapper over axios http client to make authentication and token management easier




## Authors

- [@BipinRadhakrishnan](https://github.com/rbipin)


## Documentation

Use the _```HttpClientFactory```_ to create a _```HttpClient```_. 

The createClient method of the _```HttpClientFactory```_ takes a _```HttpConfiguration```_ object.


_```HttpConfiguration```_ interface can be used to configure the _```HttpClient```_, like setting up the base url for the _```HttpClient```_.
If _```HttpConfiguration```_ is not passed then the basic _```HttpClient```_` is returned

Usage for a simple HttpClient
```ts
 const httpConfig: HttpConfiguration = {
    baseUrl: 'http://localhost:3000',
    };

    const httpClientFac = new HttpClientFactory();
    const httpClient = httpClientFac.CreateClient(httpConfig); // basic http client
    const response: HttpResponse<Data> = await httpClient.get('/posts/1');
 ```

 Usage for a Client with OAuth
```ts
const basicAuthConfig: basicAuthConfig = new BasicAuthConfig (
    'http://localhost:4200/api-token',
    '<client id>',
    '<client secret>'
);
 const httpConfig: HttpConfiguration = {
    baseUrl: 'http://localhost:3000',
    authConfig: oauthConfig,
    };

    const httpClientFac = new HttpClientFactory();
    const httpClient = httpClientFac.CreateClient(httpConfig); // basic auth client
    const response: HttpResponse<Data> = await httpClient.get('/posts/1');
 ```

Usage for a Client with OAuth
```ts
const oauthConfig: OAuthConfig = new OAuthConfig (
    'http://localhost:4200/api-token',
    '<client id>',
    '<client secret>',
    '<audience>',
    '<scope[]>'
);
 const httpConfig: HttpConfiguration = {
    baseUrl: 'http://localhost:3000',
    authConfig: oauthConfig,
    };

    const httpClientFac = new HttpClientFactory();
    const httpClient = httpClientFac.CreateClient(httpConfig); // OAuth client
    const response: HttpResponse<Data> = await httpClient.get('/posts/1');
 ```
## Running Tests

To run tests, run the following command, this starts a mock api and then runs the tests againsts the mock api server

```bash
  npm run test
```

