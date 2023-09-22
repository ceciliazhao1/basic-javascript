# HTTP Headers

HTTP headers are essential in API development, including when working with the Node.js Express framework. HTTP headers are key-value pairs sent in HTTP requests and responses. They provide metadata and instructions on how to handle data, and some common headers include Content-Type, Authorization, and Cache-Control.

## In APIs, headers serve critical purposes:

* **Content Negotiation:** 
  
  Headers like "Content-Type" help the client understand the format of the data being sent, allowing correct parsing and processing.

* **Authentication and Authorization:**
  
  The "Authorization" header often carries authentication tokens or API keys to grant access to resources.

* **Caching and Performance:** 
  
  Headers like "Cache-Control" control data caching, improving performance and server load.

* **Security:** 
  
  Headers enhance security by preventing certain attacks, such as the "X-Content-Type-Options" and "Strict-Transport-Security" headers.

* **Cross-Origin Requests:** 
  
  CORS-related headers like "Access-Control-Allow-Origin" enable secure cross-origin requests.

In Express, you manipulate headers using the response object for sending responses and the request object for reading headers from incoming requests.

[**Header References**](https://developer.mozilla.org/en-US/docs/Web/API/Headers)


## Results 

![Screenshot 2023-09-18 212217](https://github.com/SharonCao0920/basic-javascript/assets/54694766/78c3d15e-82e0-4ae1-b4a9-bb155be8d988)

![Screenshot 2023-09-18 212229](https://github.com/SharonCao0920/basic-javascript/assets/54694766/d11a794a-8054-4476-9026-bfdaf838fdc1)

![Screenshot 2023-09-18 212253](https://github.com/SharonCao0920/basic-javascript/assets/54694766/f9924abf-8f39-440a-8039-de776c8b426f)

![Screenshot 2023-09-18 213114](https://github.com/SharonCao0920/basic-javascript/assets/54694766/d68d4f31-61c2-4d21-a7e9-51a57a558389)


# API Parameters

## Query Parameters:

**Example URL:** 

https://api.example.com/products?category=electronics&sort=price

**Explanation:** 

In this example, the query parameters are category and sort. They are included in the URL's query string and are used to filter products by category ("electronics") and sort the results by price.

## Path Parameters:

**Example URL:** 

https://api.example.com/users/123

**Explanation:** 

In this URL, 123 is a path parameter denoting the user's ID. It is included in the URL path and is used to identify a specific user resource (user with ID 123).

## Header Parameters:

**Example Authorization Header:**

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

**Explanation:** 

The "Authorization" header is commonly used to send authentication tokens or API keys. In this example, it includes a JSON Web Token (JWT) as a bearer token for authentication.

## Request Body Parameters:

**Example POST Request:**
```
{
  POST https://api.example.com/users
  "name": "John Doe",
  "email": "john@example.com"
}
```

**Explanation:** 

In this POST request, JSON data is included in the request body. The parameters name and email are used to create a new user resource with the provided information.

## Cookie Parameters:

**Example Cookie Header:**
```
Cookie: sessionID=abc123; userRole=admin
```

**Explanation:** 

API parameters can be included as cookies in the HTTP request. In this example, the cookies "sessionID" and "userRole" are sent with the request.

## Form Data Parameters:

**Example POST Request with Form Data:**
bash
```
POST https://api.example.com/submit-form
Content-Type: application/x-www-form-urlencoded

name=John+Doe&email=john%40example.com
```

**Explanation:** 

Form data parameters are included in the request body as URL-encoded data. In this example, the parameters name and email are sent as form fields.

## Matrix Parameters: (Note: Less common and not supported in all APIs)

**Example URL:**

https://api.example.com/matrix;param1=value1;param2=value2


**Explanation:** 

Matrix parameters are included in the URL path after a semicolon. They are less common but used in some RESTful APIs for specific purposes.


***These examples illustrate various ways to include parameters in API requests, depending on the type of parameter and the API's requirements. The specific parameter names and values will vary based on the API's documentation and use case.***