# CS6065_HW2

A simple Restful Webservice that hosts weather information using mySQL. It utilizess REST API endpoints and input data as input parameteres to either GET or POST operations. These operations will then return JSON result in plain-text to the user.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* Node.js - a JavaScript runtime environment built on Chrome's V8 JavaScript engine
* Express module - a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications
* mySQL module - a Node.js driver written in JavaScript for accessing mySQL
* body-parser module - parses incoming request body in middleware

### Installing

**Installing Node.js**

1. Download the Window's installer from the [Node.js website](https://nodejs.org/en/download/).
2. Run the installer
3. Follow its prompts
4. Restart your computer

**Installing Express module through CMD**

1. If Node.js has not been installed, please follow the instructions written above; otherwise, open the CMD and use the following command:
```
$ npm install express
```
**Installing mySQL module through CMD**

1. If Node.js has not been installed, please follow the instructions written above; otherwise, open the CMD and use the following command:
```
$ npm install body-parser
```
**Installing body-parser module through CMD**

1. If Node.js has not been installed, please follow the instructions written above; otherwise, open the CMD and use the following command:
```
$ npm install mysql
```
### Running the tests

Open the CMD and change directories to your current working directory with the following command:
```
$ cd your_working_directory_name
```
Start the server using the following command:
```
$ cd node server.js
```
With your server up and running, the following instructions describe how to use each of the server's features:

* To access all available weather hosted dates, access the following URL with the endpoint, /historical/:
>> http://localhost:80/historical/

* To access weather information for a particular date, access the following URL with the endpoint, /historical/<dateYYYYMMDD>, where <dateYYYYMMDD> represents the Year, Month, and Day:
>> http://localhost:80/historical/<dateYYYYMMDD>
  
* To add weather information for a particular day, access the following URL with the endpoint, /historical/:
>> **Disclaimer: This feature is currently non-functional due to the scope of this assignment**

* To delete weather info of a particular day, access the following URL with the endpoint, /historical/:
>> **Disclaimer: This feature is currently non-functional due to the scope of this assignment**

* To get the weather forecast for the next 7 days, access the following URL with the endpoint, /forecast/<dateYYYYMMDD>, where <dateYYYYMMDD> represents the Year, Month, and Day **_in the future_**.
>> http://localhost:80/forecast/<dateYYYYMMDD>

### Built with

* TextWrangler
* Node.js
* Node.js Express Module
* Node.js mySQL Module
* Node.js body-parser Module

### Author

* Andrew Huang

### Acknowledgments

* My sister, for her instruction and patience over the course of this assignment.
