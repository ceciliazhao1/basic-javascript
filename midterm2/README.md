# TrackingMore API

## Design

Using trackingmore api, in details using tracking number to get shipment status. Posted data will be saved to dataTM.json.


**API:**
* **TrackingMore**
  * [Create Trackings](https://www.trackingmore.com/v3/api-index.html?language=Nodejs#create-trackings) from **[TackingMore](https://www.trackingmore.com/)**
  * [Get Result](https://www.trackingmore.com/v3/api-index.html?language=Golang#get-results) from **[TackingMore](https://www.trackingmore.com/)**.
    


## Implementation

### 1. Project Setup
* Using NodeJS express framework
  * Create a folder for the project and go to the project folder
  * Initialize the nodejs project by:
  ```
  $ npm init -y
  ```
  * Install needed packages
  ```
  $ npm install express axios winston luxon dotenv node-fetch
  ```

* Create .env file to store variables

![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/00ad335c-f865-4e3e-aa7c-6c4833aeaa00)


## TrackingMore
### 1. Create a Tracker

API used in this section is **[Create Trackings](https://www.trackingmore.com/v3/api-index.html?language=Nodejs#create-trackings)**

In this section, we post the data through the API to create a tracker information.

<br>

* Request Parameters:

![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/9137b3af-5982-4639-8f96-cafc0cadacb7)


* Response Body:

![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/95634d9b-aff4-4e76-be76-274ead7e0dda)



* API URL:

[https://my.trackship.com/api/create-tracker/customapp/](https://api.trackingmore.com/v3/trackings/create)


### 2. Save Data
With the data posted in previous section, create a method to save the data to data.json file which removes duplicate data and save data set in order of order_id.

![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/434dc07d-3a90-4bbf-bd15-c2d4a1fae603)


### 3. Get Tracking Details
* API tested in this section is:

  1. [Get Result](https://www.trackingmore.com/v3/api-index.html?language=Golang#get-results) from **[TackingMore](https://www.trackingmore.com/)**

* In this section, the program will do:

  1. use the order_id parsed from the URL to filter throught data.json file to get the tracking number and provider for the specific order_id.
     
  2. Use the tracking number and provider information as parameters to call the tracking API to get the shipment status.

<br>
  * Request Parameters:
  
![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/862b87d4-738c-44f4-8b36-44d186565eca)


  * Response Body:

![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/7a1f7352-567f-43e7-849a-57ec6cf5312d)


  * API URL:

https://api.trackingmore.com/v3/trackings/get?tracking_numbers=


<br>

## Run Project

* **package.json**

![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/f6c9208c-b2cf-4a3d-9479-562870e0ce80)

```
$ npm start
```
![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/f71d65e3-63c3-4d59-a8fc-55c8fd0fe050)

* **On another terminal**

```
$ ngrok http https://localhost:8080
```
![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/5b05e80d-99de-4fb6-9ce8-3a094e718330)

## Test Results
Testing the project using Postman.


### TackingMore API

* **Create a Tracking:**
  
![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/aca09082-fe16-4519-bbf6-83c0e0bb70b5)

* **Data Saved:**

![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/434dc07d-3a90-4bbf-bd15-c2d4a1fae603)


* **Get Shipment Status:**

![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/b6ff810f-a704-4ee8-b0a3-ef06e01a2cde)


### logger

* TrackShip API

![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/9caf368b-e56b-482a-a731-30c178f3aad5)

* TackingMore API

![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/2158a2b7-d2a6-45ac-a9df-79b8020c338f)



### TrackingMore Preview

![image](https://github.com/SharonCao0920/NodeJS_Tracking/assets/54694766/616fd51e-bc1b-4fa5-861c-c7e77cf78d99)

