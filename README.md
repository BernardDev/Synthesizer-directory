# :sound: Synthesizer Director :sound:

:fire:[Synthesizer Directory](https://synthesizer-directory.netlify.app/):fire:
<br>
:fire:[Go to API explorer!](https://synthesizer-api.netlify.app/):fire:
:fire:[Synthesizer API repo](https://github.com/BernardDev/Synthesizer-API):fire:

For all you gearslutz out there! This free API is the only one out there (since I checked). Explore over 800 synthesizers from past and present. Get insight in their manufacturers and specifications. The API builds upon the data available on the vintagesynthexplorer website. Future work will be aimed to broaden querying options and let you fellow synth lovers contribute to the collection.

---

## Growing as a Developer:

- [About this Project](#about-this-project) :dart:
  <br>

- [User Stories](#user-stories) :bust_in_silhouette:
  <br>

- [Project Board](#project-board) :memo:
  <br>

- [Wireframes API Explorer](#wireframes-api-explorer) :house:
  <br>

- [Datamodel](#datamodel) :floppy_disk:
  <br>

- [Git Version Control](#git-version-control) :octocat:
  <br>

## For Usage:

- [Usage](#usage) :zap:
  <br>

- [Future Work](#future-work) :fire:
  <br>

---

## About this Project

<br>

The goal of this project is to build an public REST API :dart: and thereby applying existing knowledge and explore new terrains. This was done independently by reading its documentation, watching online videos, consulting StackExchange & sometime my coach.

Although this project aimed at making a public API, I obviously tried it out myself! Therefore I made a [frontend](https://github.com/BernardDev/Synthesizer-directory/tree/development/) that uses it. In development some features where added to the backend as well. Such as a route to suggest synthesizer and an admin login system.

<br>

Be sure to visit the :fire:[Synthesizer Directory](https://synthesizer-directory.netlify.app/):fire: as well.
<br>
<br>

### This repo contains three main folders:

<br>

> [SCRAPER](https://github.com/BernardDev/Synthesizer-API/scraper) <br>

The scraper folder contains DOM oriented programming. Before I could fill the database with synthesizers, manufacturers & specification I needed to [scrape data](https://github.com/BernardDev/Synthesizer-API/tree/development/scraper/index.js). My source also had images, therefore I needed to [download images](https://github.com/BernardDev/Synthesizer-API/tree/development/scraper/index.js) from their respective URL's. After scraping the data it needed to be [normalized](https://github.com/BernardDev/Synthesizer-API/tree/development/scraper/index.js) to fit the SQL database structure. For this, some JS object/string manipulation was used.

> [SERVER](https://github.com/BernardDev/Synthesizer-API/server) <br>

This folder is the heart of the project. It contains the server ([with database](https://github.com/BernardDev/Synthesizer-API/tree/development/server/models/)). You will find [endpoints](https://github.com/BernardDev/Synthesizer-API/tree/development/server/app.js) ([& queries](https://github.com/BernardDev/Synthesizer-API/tree/development/server/queries)) making use of [validation middlewares](https://github.com/BernardDev/Synthesizer-API/tree/development/server/validators/) ([& Yup](https://github.com/BernardDev/Synthesizer-API/tree/development/server/app.js)). People are able to suggest synths that can get approved through an admin login-system. Look around in [authorization](https://github.com/BernardDev/Synthesizer-API/tree/development/server/auth/jwt.js) ([& model](https://github.com/BernardDev/Synthesizer-API/tree/development/server/models/admin.js)) done through Express middlewares with JWT tokens, to see more of it. The development was mostly fuelled by [end-to-end testing](https://github.com/BernardDev/Synthesizer-API/tree/development/server/tests/). Another thing that needed to be done was [migrating images](https://github.com/BernardDev/Synthesizer-API/tree/development/server/cloudinary/) to Cloudinary db and save the image URL's to the main SQL database.

> [CLIENT](https://github.com/BernardDev/Synthesizer-API/client) <br>

Here you can find the [API explorer](https://github.com/BernardDev/Synthesizer-API/tree/development/client) repo, done with ReactApp. Through the explorer an [apikey](https://github.com/BernardDev/Synthesizer-API/tree/development/server/sendEmail.js) can be sent to your email. It utilizes [frontend validation](https://github.com/BernardDev/Synthesizer-API/tree/development/client/src/pages/Autorization.js)(with React Hook Form) and some [storage concepts](https://github.com/BernardDev/Synthesizer-API/tree/development/client/src/context/AuthContext.js)(useContext) for the apikey. 
:fire:[Go to API explorer!](https://synthesizer-api.netlify.app/):fire:

<br>

<br>

### Leading topics:

<br>

> [ENVIRONMENTS](https://github.com/BernardDev/Synthesizer-API/tree/development/server/config/config.js) <br>

Throughout the project we have used the development, testing and production environments. Switching in/out sources and storing key's and secret's in .env and hosts.
Wrapping my head around it was challenging at first. Now I feel comfortable to use this in real projects.

<br>

> [END-TO-END TESTING](https://github.com/BernardDev/Synthesizer-API/tree/development/server/tests) <br>

All end-point have been thoroughly tested. The [testing](https://github.com/BernardDev/Synthesizer-API/tree/development/server/tests/) formed the basis of development in the project. Checking if correct responses were given & testing the possible 'un-happy' paths. This made me feel safe to refactor some code. Jest and Supertest were used in de backend, Jest & Playwright (like Puppeteer) in the frontend.

<br>

> [VALIDATION & ERROR HANDLING](https://github.com/BernardDev/Synthesizer-API/tree/development/server) <br>

Validation was done with Yup, used in the [backend](https://github.com/BernardDev/Synthesizer-API/tree/development/server/app.js) as well as the [frontend](https://github.com/BernardDev/Synthesizer-API/tree/development/client/src/pages/Autorization.js). Together with [middlewares](https://github.com/BernardDev/Synthesizer-API/tree/development/server/validators) to safeguarded the routes from user errors and send meaningful feedback to the client when they do occur.
Also validated in the backend: multipart/form-data & attachments.

<br>

> [AUTHENTIFICATION & PASSWORD HASHING](https://github.com/BernardDev/Synthesizer-API/tree/development/server/app.js) <br>

To be able to control the flow of user suggested synthesizers I implemented a admin login-system with JWT token. Although this was not my first encounter with this, it was the first time that I implemented it inside of my [model](https://github.com/BernardDev/Synthesizer-API/tree/development/server/models/admin.js) and validated expiration of the token. Hashing/comparing of the user's password is also done in the model directly.

<br>

### Things I've done in the backend:

|                                  |                                  |                                      |                                  |
| -------------------------------- | -------------------------------- | ------------------------------------ | -------------------------------- |
| DOM manipulation                 | downloading images :star:        | managing multiple dsb’s              | normalizing data                 |
| generating tables                | relating tables                  | mocking seed data :star:             | using environments :star:        |
| managing secrets                 | deploying                        | writing npm scripts                  | big O notation :star:            |
| end-to-end testing :star:        | pagination                       | validation                           | sending emails :star:            |
| writing middlewares              | routing middlewares              | continuous Integration :star:        | error handling                   |
| CORS                             | handling FormData                | HTTP methods (all)                   | Netlify                          |
| Heroku                           | JSDOM                            | Yup :star:                           | Express                          |
| Cloudinary (db) :star:           | Sendgrid :star:                  | Jest                                 | Supertest :star:                 |
| Sequelize ORM                    | ElephantSQL                      | SQL                                  | JWT                              |

<br>
<br>

### Things I've done in the frontend:

|                              |                         |                          |                       |
| ---------------------------- | ----------------------- | ------------------------ | --------------------- |
| React DOM routing            | Bootstrap :star:        | Sass                     | caching :star:        |
| copy to clipboard            | custom Hooks            | UseContext :star:        | local storage         |
| React children :star:        | validation              | error handling           | fetching data         |

<br>

:star: _New technologies learned in this project_

<br>

### User Stories

- As a User I want to be able to fetch synthesizers and manufacturers
- As a User I want to be able to see visualize the synthesizers I'm fetching
- As a User I want to be able to sort the synthesizers by the year they are produced first
- As a User I want to be able to define how many synthesizers I fetch and view them on different pages
- As a User I want to be able to request an API key
- As a User I want to be able to contribute to the API by suggesting new synthesizers

<br>

### Project Board

- You can find it [here](https://github.com/BernardDev/Synthesizer-API/projects).

<br>

### Wireframes API Explorer

- Checkout the wireframes made for the [API Explorer](https://github.com/BernardDev/Synthesizer-API/tree/development/img/wireframe-api-explorer.png).

<br>

### Datamodel

- Checkout the [datamodel](https://github.com/BernardDev/Synthesizer-API/tree/development/img/datamodel.png) used as base for data structure.

<br>

### Git Version Control

...

<br>
