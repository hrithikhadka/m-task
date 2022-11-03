## Megaventory Purchase Order Details

An application used to extract data from API to display some details of purchase order, built with React, JavaScript, and CSS.

## Project Status

This project is completed. Users can click on show details and see visual data representation. There is functionality to toggle between show details and close to display and close data.

## Project Screen Shots


Main Page             |  Show Details
:-------------------------:|:-------------------------:
<img src="https://user-images.githubusercontent.com/73479315/199710404-9e911445-ad2e-422e-bf1e-b7c30301727f.PNG" width="500" height="400" />  |  <img src="https://user-images.githubusercontent.com/73479315/199712630-daf6e8a0-048c-429d-94d5-ffe7aab66e57.PNG" width="500" height="400" /> 

## Reflection

This was a coding project for Megaventory Interview. The goal of this project was to fetch data from an API using Frontend-development framework React JS.

I started this process by using the `create-react-app` boilerplate, then setting up the files. Then, I studied what the API was returning in the browser. After that, I started using React to fetch the API and get the data in the console. Then, I extracted only the data that are required to be displayed for the sake of project. Furthermore, I fetched data and added tables for Purchase Order Details such as Product SKU, Ordered Quantity, Unit Price, and Total Amount. Finally, I made the project responsive across different screen sizes.  

One of the main challenges I ran into was adding tables. Table head (th) were repeated for each item but I needed to have table head only once. This lead me to spend lot of hours. Finally, I came to realize that I was using table head(th) inside map method. Therefore, shifting the table before map method fixed the problem.

## Installation and Setup Instructions  

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Run Test Suite:  

`npm test`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000/`  
