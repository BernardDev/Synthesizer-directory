# Synthesizer Director :sound:

:fire:[Synthesizer Directory](https://synthesizer-directory.netlify.app/):fire: <br>

:fire:[Go to API explorer!](https://synthesizer-api.netlify.app/):fire:
:fire:[Synthesizer API repo](https://github.com/BernardDev/Synthesizer-API):fire:

---

## About this Project

<br>

This frontend is built upon my Synthesizer API. The project aim's to offer an appealing and visual scrolling experience while exploring the history of synthesizers. On a vertical timeline synthesizers are displayed sorted by year of production. When a manufacturers is queried only synths from that manufacturers are displayed. Users can contribute by suggesting new synthesizers. A login system is used to make admins able to decline or accept these suggestions and add them to the collection.


### Leading topics:

<br>

> [INFINITE SCROLLING](https://github.com/BernardDev/Synthesizer-directory) <br>

On the main page images pop-up from both sides. When the limit when all fetched synths are displayed while scrolling a new batch is fetched. To make this happen I utilized Intersection Observer together. There was also a need for a reference to the an actual DOM element, therfore UseRef was explored (together with UseCallback).

<br>

> [STYLED COMPONETNS](https://github.com/BernardDev/Synthesizer-directory) <br>

Making this frontend gave me the chance of exploring more tools in my styling toolbox. Since I am working in React Styled Components seemed fitting. It blends in so well with React's inner working and is nice to combine with Sass.

<br>

> [VALIDATION & ERROR HANDLING](https://github.com/BernardDev/Synthesizer-API/tree/development/server) <br>

Validation was done with [Yup]() (https://github.com/BernardDev/Synthesizer-directory/tree/development/src/validation/suggestionSchema.js). Together with [middlewares](https://github.com/BernardDev/Synthesizer-API/tree/development/server/validators) to safeguarded the routes from user errors and send meaningful feedback to the client when they do occur.
Also validated in the backend: multipart/form-data & attachments.

<br>

> [USECONTEXT](https://github.com/BernardDev/Synthesizer-directory/tree/development) <br>


<br>


### Things I've done in the frontend:

|                              |                         |                          |                       |
| ---------------------------- | ----------------------- | ------------------------ | --------------------- |
| CSS Animation                | fetch data              | React Hook Form          | custom Hooks          |
| validation                   | error handling          | Intersection Observer    | Styled Components     |
| UseCallback                  | UseRef                  | Lazy loading             | pagination            |
| Yup                          | handling file upload    | styling file upload      | multipart/form-data   |
| Multer                       | make svg spinner        | UseContext               | autocomplete          |
| Axios cancel token           | prevState               | sticky advanced          | Playwright            |

<br>

:star: _New technologies learned in this project_

<br>

### User Stories

- As a User I want to be able to 
- As a User I want to be able to 
- As a User I want to be able to 
- As a User I want to be able to 
- As a User I want to be able to 
- As a User I want to be able to 

<br>


### Wireframes Synthesizer Directory

- Checkout the wireframes made for the [Synthesizer Directory](https://github.com/BernardDev/).

<br>

### Git Version Control

...

<br>
