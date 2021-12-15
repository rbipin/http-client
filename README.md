
# http-client

A wrapper over axios http client to make authentication and token management easier




## Authors

- [@BipinRadhakrishnan](https://github.com/rbipin)


## Documentation

Use the ```HttpClientFactory``` to create a ```HttpClient```. 

The createClient method of the ```HttpClientFactory``` takes a ```HttpConfiguration``` object.


```HttpConfiguration``` can be used to configure the ```HttpClient```, like the base url the ```HttpClient``` should hit.
If ```HttpConfiguration``` is not passed then the basic ```HttpClient``` is returned

Usage for a simple HttpClient
```ts
 const httpConfig: HttpConfiguration = {
    baseUrl: 'http://localhost:3000',
    };

    const httpClientFac = new HttpClientFactory();
    const httpClient = httpClientFac.CreateClient(httpConfig);
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
    const httpClient = httpClientFac.CreateClient(httpConfig);
    const response: HttpResponse<Data> = await httpClient.get('/posts/1');
 ```
## Running Tests

To run tests, run the following command
This command runs a json-server using the `mock-db.json` file in and serves up a fake/ mock rest api

```bash
  npm run mock-api
```

