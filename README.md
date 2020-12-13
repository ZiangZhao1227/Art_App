# Legend Arts

Legend Arts is a web art sharing project done by the team Legend.

## Features

* Register and log in to view all art that was created by other users.

* Registered users can download arts created by other users.

* Registered users can leave a like to art that they liked.

* Registered users have their own My Art page, to view only their own art images.

* Home page has a video background.

* Responsive design.

## Running the Website locally

1. Connect to Metropolia VPN.

2. Clone the repository

3. Create a folder to the project folder and a folder "thumbnails" inside of it.

4. Create a file ".env" to the project root folder and add all of these into it:

5. DB_HOST=mysql.metropolia.fi DB_USER = * DB_PASS = * DB_NAME = * NODE_ENV = development HTTP_PORT = 3000 HTTPS_PORT = 8000

6. Create four TABLES in your database, and construct these four TABLES by using those four files which we uploaded on the gitlab.

7. Use npm i command, to install the required dependencies.

8. Run nodemon and check locally by checking **localhost:3000**

## Running the Website on the server

1. Change **..** variable for **url** from main_admin.js, main_user.js and main.js to **.**, and access your server by using git bash then delete HTTP_PORT = 3000 and HTTPS_PORT = 8000.

2. Use npm i command to install the required dependencies.

3. Run node app.js.

## ER Diagram

[ER Diagram](https://gitlab.metropolia.fi/legend_project/legend_arts/-/blob/master/er_diagram.jpg)



