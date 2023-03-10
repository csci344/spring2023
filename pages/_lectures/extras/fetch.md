## Notes on the JavaScript Fetch API

As described via the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch" target="_blank">Mozilla developer pages</a>:

{:.quote}
> The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.

Consider the following example, which fetches a JSON file from across the network and prints it to the console:

```js
const addressOfData = 'https://www.apitutor.org/flickr/simple/?tags=cat'

// function definition to fetch:
async function fetchData() {
    data = await fetch(addressOfData).then(response => response.json());
    displayData(data);
} 

// function definition to display results:
function displayData(data) {
    console.log(data);
}

// invoke the fetch to initiate the process:
fetchData();
```

{:.quote}
> The simplest use of fetch() takes one argument — the path to the resource you want to fetch — and returns a promise containing the response (a Response object). This is just an HTTP response, not the actual JSON. To extract the JSON body content from the response, we use the json() method.
