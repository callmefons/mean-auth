"use strict";

define({
  "name": "Authentication API documentation",
  "version": "0.1.0",
  "description": "",
  "title": "Authentication REST API",
  "template": {
    "forceLanguage": "en",
    "withCompare": false,
    "withGenerator": false
  },
  "header": {
    "title": "Introduction",
    "content": "<section><h1>Introduction</h1>\nThe API follows the REST architectural guidelines and uses standard HTTP response codes to indicate the result of each operation.\n</section>\n<h2>Allowed HTTP methods</h2>\n<table>\n  <tr>\n    <th>Method</th>\n    <th>Description</th>\n  </tr>\n  <tr>\n    <td><p class=\"type\" style=\"background-color: green;\">GET</p></td>\n    <td>Gets a resource or list of resources</td>\n  </tr>\n  <tr>\n    <td><p class=\"type\" style=\"background-color: #4070ec;\">POST</p></td>\n    <td>Creates a resource</td>\n  </tr>\n  <tr>\n     <td><p class=\"type\" style=\"background-color: #e5c500;\">PUT</p></td>\n     <td>Updates a resource</td>\n  </tr>\n    <tr>\n       <td> <p class=\"type\" style=\"background-color: #ed0039;\">DELETE</p></td>\n       <td>Deletes a resource</td>\n    </tr>\n</table>\n<h2>Server responses</h2>\n<table>\n  <tr>\n    <th>HTTP Status Code</th>\n    <th>Description</th>\n  </tr>\n  <tr>\n    <td>200 OK</td>\n    <td>The request was successful.</td>\n  </tr>\n  <tr>\n     <td>400 Bad Request</td>\n     <td>The request could not be understood or was missing required parameters.</td>\n  </tr>\n  <tr>\n      <td>401 Unauthorized</td>\n      <td>Authentication failed or user doesn’t have permissions for requested operation.</td>\n  </tr>\n  <tr>\n      <td>404 Not Found</td>\n      <td>Resource not found.</td>\n  </tr>\n  <tr>\n      <td>405\tMethod Not Allowed</td>\n      <td>Requested method is not supported for resource.</td>\n  </tr>\n  <tr>\n        <td>500\tInternal Server Error\t</td>\n        <td>Something went wrong during your request</td>\n  </tr>\n</table>"
  },
  "sampleUrl": false,
  "defaultVersion": "0.0.0",
  "apidoc": "0.3.0",
  "generator": {
    "name": "apidoc",
    "time": "2017-02-08T05:17:41.475Z",
    "url": "http://apidocjs.com",
    "version": "0.17.5"
  }
});
//# sourceMappingURL=api_project.js.map
