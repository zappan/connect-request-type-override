# Connect Request Type Override Middleware

A Node.js [Connect framework](https://github.com/senchalabs/connect) *middleware* for overriding any request type with
'application/json' to allow for easier testing of the REST API calls.

Includes option for overriding default accept headers by specifying the extension of `.json` to the url, or passing
query string parameter `?format=json` which will both force serving the REST API JSON response data.


## History

  * **0.1.0** - [2012-12-03] Initial release

## License

This library is licensed under the **MIT License**
