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
<img width="1327" alt="截屏2023-09-22 下午3 10 44" src="https://github.com/ceciliazhao1/basic-javascript/assets/109279413/51231f69-2e69-432f-91ee-c62c2304fe13">

<img width="1325" alt="截屏2023-09-22 下午3 10 58" src="https://github.com/ceciliazhao1/basic-javascript/assets/109279413/2849858b-cca0-4227-bc7e-b137f91c262f">
<img width="1320" alt="截屏2023-09-22 下午3 11 15" src="https://github.com/ceciliazhao1/basic-javascript/assets/109279413/bb81f34e-8e60-407f-a0ca-4e8600b3acbb">

<img width="1325" alt="截屏2023-09-22 下午3 11 28" src="https://github.com/ceciliazhao1/basic-javascript/assets/109279413/48fc2b2b-b5bb-42f4-93da-0dc0782e1f75">

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
