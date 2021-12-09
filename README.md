
# httpclient

A wrapper over axios http client to make authentication and token management easier




## Authors

- [@BipinRadhakrishnan](https://github.com/rbipin)


## Documentation

Use the ```HttpClientFactory``` to create a ```HttpClient```. 

The createClient method of the ```HttpClientFactory``` takes a ```HttpConfiguration``` object.


```HttpConfiguration``` can be used to configure the ```HttpClient```, like the base url the ```HttpClient``` should hit.
If ```HttpConfiguration``` is not passed then the basic ```HttpClient``` is returned

Here is an example
```ts
 const httpConfig: HttpConfiguration = {
    baseUrl: 'http://localhost:3000',
    authConfig: null,
    headers: null,
    timeout: null,
    };

    const httpClientFac = new HttpClientFactory();
    const httpClient = httpClientFac.CreateClient(httpConfig);
    const response: HttpResponse<Data> = await httpClient.get('/posts/1');
 ```

