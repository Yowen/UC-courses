# CS6065_HW3

A simple Restful Webservice that hosts weather information using mySQL. A simple UI has been implemented for said Webservice with a dynamic approach that uses asynchronous Javascript requests to send the user-inputted data to the ReST API, receiving structured results, and then publish them into the page without refreshing the whole page again.

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
Access the Webserver using the following URL: http://localhost:80.

The following describes the function of each tabular element:

* List All Dates
>> The button, "Click to dynamically display data", sends a GET request to the server, which responds with all available weather hosted dates.

* Particular Date
>> The form allows the user to submit a date with the format of YYYYMMDD, representing Year, Month, and Date, respectively.
>> The button, "Click to dynamically display data", sends a GET request to the server, which responds with weather hosted information pertaining the date specified in the above form.

* Add Date
>> The form allows the user to submit data concerning weather hosted information to the server, such as date (YYYYMMDD), TMin (Minimum temperature), and TMax (Maximum temperature).
>> The button, "Add Date", sends a POST request to the server, which appends the information provided in the above forms to the mySQL database, which contains all of the weather hosted information.

* Delete Date
>> The form allows the user to submit a date with the format of YYYYMMDD, representing Year, Month, and Day, respectively.
>> The button, "Delete", sends a POST request to the server, which deletes the weather hosted information associated with the submitted date in the above form.

* Seven-day Forecast
>> The form allows the user to submit a date with the format of YYYYMMDD, representing Year, Month, and Day, respectively.
>> The button, "Click to dynamically display data", sends a GET request to the server, which processes the date and responds with a Forecast utilizing a simple algorithm.

* Five-day Forecast
>> The form allows the user to submit a date with the format of YYYYMMDD, representing Year, Month, and Day, respectively.
>> The button, "Click to dynamically display data", sends a GET request to the server, which processes the date and responds with a Forecast utilizing a simple algorithm.

### Built with

* TextWrangler
* Node.js
* Node.js Express Module
* Node.js mySQL Module
* Node.js body-parser Module

### Author

* Andrew Huang

### Acknowledgments

* W3Schools, for their comprehensive tutorial on creating tabular UI's.
* Various jQuery articles concerning AJAX and jQuery
* My sister, for her instruction and patience over the course of this assignment.
