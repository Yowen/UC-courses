# CS6065_Project01

A simple Restful Webservice that hosts weather information using mySQL. It utilizess REST API endpoints and input data as input parameteres to either GET or POST operations. These operations will then return JSON result in plain-text to the user. This service is ported into a docker container instance, which acts as a more portable and modular framework for hosting services.
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* Docker

### Installing

**Installing Docker**

On your system, open the CMD and enter the following command to install Docker:
```
$ apt-get install docker.io
$ yum install docker-io
```
Download the Docker image at the following link: [here](https://drive.google.com/open?id=1o5TlZ9f709-AYz2dQVYrrEWHHeqrW7XT)

In your working directory, load the image
```
docker load -i project.tar
```
### Running the tests

Run the image
```
docker run -d -p 8081:80 project
```
Access the Webserver using the following URL: http://localhost:8081.

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

* Docker
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
