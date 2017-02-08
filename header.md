<section><h1>Introduction</h1>
The API follows the REST architectural guidelines and uses standard HTTP response codes to indicate the result of each operation.
</section>
<h2>Allowed HTTP methods</h2>
<table>
  <tr>
    <th>Method</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><p class="type" style="background-color: green;">GET</p></td>
    <td>Gets a resource or list of resources</td>
  </tr>
  <tr>
    <td><p class="type" style="background-color: #4070ec;">POST</p></td>
    <td>Creates a resource</td>
  </tr>
  <tr>
     <td><p class="type" style="background-color: #e5c500;">PUT</p></td>
     <td>Updates a resource</td>
  </tr>
    <tr>
       <td> <p class="type" style="background-color: #ed0039;">DELETE</p></td>
       <td>Deletes a resource</td>
    </tr>
</table>

<h2>Server responses</h2>
<table>
  <tr>
    <th>HTTP Status Code</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>200 OK</td>
    <td>The request was successful.</td>
  </tr>
  <tr>
     <td>400 Bad Request</td>
     <td>The request could not be understood or was missing required parameters.</td>
  </tr>
  <tr>
      <td>401 Unauthorized</td>
      <td>Authentication failed or user doesn’t have permissions for requested operation.</td>
  </tr>
  <tr>
      <td>404 Not Found</td>
      <td>Resource not found.</td>
  </tr>
  <tr>
      <td>405	Method Not Allowed</td>
      <td>Requested method is not supported for resource.</td>
  </tr>
  <tr>
        <td>500	Internal Server Error	</td>
        <td>Something went wrong during your request</td>
  </tr>
</table>