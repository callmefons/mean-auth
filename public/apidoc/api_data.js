define({ "api": [  {    "type": "post",    "url": "/auth/login",    "title": "Login",    "description": "<p>Login with email and password</p>",    "version": "0.1.0",    "name": "Login",    "group": "Auth",    "examples": [      {        "title": "Example usage:",        "content": "curl -i -X POST https://localhost:3000/auth/login \\\n-H 'Content-type: application/json'  \\\n-d @- << EOF\n{\n  \"email\": \"testuser01@gmail.com\",\n  \"password\": \"testuser01\"\n}\nEOF",        "type": "json"      }    ],    "header": {      "fields": {        "Header": [          {            "group": "Header",            "optional": false,            "field": "Content-type",            "defaultValue": "application/json",            "description": ""          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>User's email.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>User's password.</p>"          }        ]      }    },    "success": {      "fields": {        "Created 201": [          {            "group": "Created 201",            "type": "String",            "optional": false,            "field": "token",            "description": "<p>JWT Access token.</p>"          },          {            "group": "Created 201",            "type": "Object",            "optional": false,            "field": "data",            "description": "<p>User model object</p>"          }        ],        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "firstname",            "description": "<p>Firstname of the User.</p>"          }        ]      },      "examples": [        {          "title": "Success Response:",          "content": "HTTP/1.1 201 Created\n{\n \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7Il9pZCI6IjU4OTQ0ZmIxYzY2OGViMjhlNzVmYzhhNyIsImVtYWlsIjoibmF0dGFmYWhoQGctYWJsZS5jb20iLCJuYW1lIjoiZm9uNiIsImxhc3RuYW1lIjoibWFpcml0dGhhIiwiX192IjowLCJjb21wYW55IjoieW9vIiwicm9sZSI6IkFkbWluIn0sImlhdCI6MTQ4NjQ1NTA0MH0.wbJ8VX_U8YyiTiOCknPZOKsO0IqOXByFbnNy28XYNR8\",\n \"user\": {\n  \"_id\": \"58944fb1c668eb28e75fc8a7\",\n  \"email\": \"nattafahh@g-able.com\",\n  \"name\": \"nattaya\",\n  \"lastname\": \"mairittha\",\n  \"__v\": 0,\n  \"role\": \"Admin\"\n }\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "Unauthorized",            "description": "<p>Invalid login.</p>"          }        ]      },      "examples": [        {          "title": "Error Response:",          "content": "HTTP/1.1 401 Unauthorized\n{\n \"message\": \"Authentication failed. Invalid login.\",\n \"code\": 401\n}",          "type": "json"        }      ]    },    "filename": "./app/routes/auth/auth.routes.js",    "groupTitle": "Auth"  },  {    "type": "post",    "url": "/auth/login",    "title": "Login",    "description": "<p>Login with email and password</p>",    "version": "0.1.0",    "name": "Login",    "group": "Auth",    "examples": [      {        "title": "Example usage:",        "content": "curl -i -X POST https://localhost:3000/auth/login \\\n-H 'Content-type: application/json'  \\\n-d @- << EOF\n{\n  \"email\": \"testuser01@gmail.com\",\n  \"password\": \"testuser01\"\n}\nEOF",        "type": "json"      }    ],    "header": {      "fields": {        "Header": [          {            "group": "Header",            "optional": false,            "field": "Content-type",            "defaultValue": "application/json",            "description": ""          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>User's email.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>User's password.</p>"          }        ]      }    },    "success": {      "fields": {        "Created 201": [          {            "group": "Created 201",            "type": "String",            "optional": false,            "field": "token",            "description": "<p>JWT Access token.</p>"          },          {            "group": "Created 201",            "type": "Object",            "optional": false,            "field": "data",            "description": "<p>User model object</p>"          }        ],        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "firstname",            "description": "<p>Firstname of the User.</p>"          }        ]      },      "examples": [        {          "title": "Success Response:",          "content": "HTTP/1.1 201 Created\n{\n \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7Il9pZCI6IjU4OTQ0ZmIxYzY2OGViMjhlNzVmYzhhNyIsImVtYWlsIjoibmF0dGFmYWhoQGctYWJsZS5jb20iLCJuYW1lIjoiZm9uNiIsImxhc3RuYW1lIjoibWFpcml0dGhhIiwiX192IjowLCJjb21wYW55IjoieW9vIiwicm9sZSI6IkFkbWluIn0sImlhdCI6MTQ4NjQ1NTA0MH0.wbJ8VX_U8YyiTiOCknPZOKsO0IqOXByFbnNy28XYNR8\",\n \"user\": {\n  \"_id\": \"58944fb1c668eb28e75fc8a7\",\n  \"email\": \"nattafahh@g-able.com\",\n  \"name\": \"nattaya\",\n  \"lastname\": \"mairittha\",\n  \"__v\": 0,\n  \"role\": \"Admin\"\n }\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "Unauthorized",            "description": "<p>Invalid login.</p>"          }        ]      },      "examples": [        {          "title": "Error Response:",          "content": "HTTP/1.1 401 Unauthorized\n{\n \"message\": \"Authentication failed. Invalid login.\",\n \"code\": 401\n}",          "type": "json"        }      ]    },    "filename": "./dist/app/routes/auth/auth.routes.js",    "groupTitle": "Auth"  }] });
