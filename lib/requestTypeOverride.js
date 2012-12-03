/* Reference: https://github.com/olalonde/connect-acceptoverride/blob/master/index.js
----------------------------------------------------------------------------------------- */
var url = require('url');

/**
 * Overrides request format to REST API JSON if explicitly requested by passing
 * a query string 'format=json', or ending an URL path with a '.json' extension
 * @return _void_
 * @author Tomislav Capan
 */
function requestFormatOverride() {
  return function(req, res, next) {
    if ('json' === req.query.format || url.parse(req.url).pathname.match(/\.json$/)) {
      req.headers.accept = 'application/json'
    }
    next();
  };
}

// Publicly expose function from the module
module.exports = requestFormatOverride;
