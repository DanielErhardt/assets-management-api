# TRACTIAN Challenge
## Objective
- Build a CRUD where the user can register companies, units, assets and users.

## [Architecture](#architecture)<br/>

## [Features](#features)<br/>

[Role-Specific Authentication](#role-specific-authentication)<br/>
[Input Data Strict Validation](#input-data-strict-validation)<br/>
[Global Error Handling](#global-error-handling)<br/>
[Complete Database Abstraction](#complete-database-abstraction)<br/>
[Automatic Document Archivation](#automatic-document-archivation)<br/>
[MongoDB Entities Association](#mongodb-entities-association)<br/>

## [Endpoints](#endpoints)<br/>

[Users](#users)<br/>
[Assets](#assets)<br/>
[Units](#units)<br/>
[Companies](#companies)<br/>

## [Running the Application Locally](#running-the-application-locally)<br/>

## [Final Observations](#final-observations)<br/>

[MongoDB Associations and Database Integrity](#mongodb-associations-and-database-integrity)<br/>
[Archive Search](#archive-search)<br/>
[User Company Matching](#user-company-matching)<br/>
[Clean Code / Clean Architecture](#clean-code--clean-architecture)<br/>

## Tools

- NodeJS
- Express
- Typescript
- JsonWebToken
- Zod
- BCrypt
- Mongoose
- Docker / Docker-Compose (MongoDB and Mongo Express)

## Architecture

This is a REST API, built using the Model Service Controller (MSC) architecture. <br/>
Let's put it this way. Think of the MVC architecture. Now insert a Service layer that will be responsible for enforcing the company's business rules. We now have an architecture known as MVCS. Well, MVCS is for Full Stack applications and this is a Back-End API, so we have to get rid of the View (V) part. Rearrange the letters and we are left with MSC: A Back-End focused architecture, that separates the layers between Controller, Service and Model, each one having a very well defined responsibility. <br/>
Keeping it short, the Controller receives requests, extracts data and responds with the requested information. The Service enforces business rules and validations, while helping with data integrity maintenance. The Model layer is the only one that should send queries and retrieve information from the database.

## Features

The features listed below are already working, although some of them could be improved. I talk more about this in the Final Observations section of this README.

### Role-Specific Authentication

Users have roles assigned to them. It dictates what they can and cannot do in the API. The "user" role has limited access to information and can edit very few things. Users with "manager" role can create, delete and edit assets and units. New companies and new users can only be created by the "admin" role. There are more details about this in the Endpoints section.

### Input Data Strict Validation

Incoming data is intercepted and has to have the correct properties and types in order to go through, or else a validation error is thrown. Objects that contain extra properties are also rejected, even if they contain the necessary information in the right types.

### Global Error Handling

This is done with the 'express-async-errors' package. It encapsulates the whole application and intercepts all thrown errors, which are then sent to the errorHandler middleware. This is a very organized way of treating errors and standardizing requests output, making error messages more accessible and the lives of both users and developers a lot easier.

### Complete Database Abstraction

The Model layer is built in a way that completely abstracts MongoDB from the rest of the API. As long as it's classes correctly implement the Model interfaces, everything should keep working just fine, even after a database migration to a completely different one.

### Automatic Document Archivation

Its not always a good thing to lose data forever, even when its intentional. <br/>
In this API, when a document is deleted from it's original collection its then saved in a Archive collection, where it will no longer be available for consultation by common requests. This way, old data is not lost forever and can be consulted by database admins should it become necessary. <br/>
For testing this, follow the [Running the Application Locally](#running-the-application-locally) instructions, create and delete some documents, then go to http://localhost:8081/ to open Mongo Express.<br/>
The username and password are both "admin".<br/>
Open the TractianDB database. You will find an "archives" collection, where you have access to all deleted documents.

### MongoDB Entities Association

Mongoose has a powerfull functionality that allows us to very easily associate documents from different collections. This enables the populate method, where you pass the fields names and all associated information from other collections will be retrieved. Concatenating populate("company") on the User model brings all the details from the companies the users work at. <br/>
You can also populate multiple fields at the same time. The Company model is associated with User, Asset and Unit models. Calling populate("employees units assets") retrieves all information pertinent to those collections on a Company query.

## Endpoints

### Users

| Method | URL                                           | Role    |
| ------ | --------------------------------------------- | ------- |
| POST   | http://localhost:3001/users/login             | none    |
| POST   | http://localhost:3001/users                   | admin   |
| GET    | http://localhost:3001/users                   | manager |
| GET    | http://localhost:3001/users/:id               | manager |
| PATCH  | http://localhost:3001/users/:id/role/:newRole | admin   |
| PUT    | http://localhost:3001/users/:id               | admin   |
| DELETE | http://localhost:3001/users/:id               | admin   |

### Assets

| Method | URL                                                | Role    |
| ------ | -------------------------------------------------- | ------- |
| POST   | http://localhost:3001/assets                       | manager |
| GET    | http://localhost:3001/assets                       | user    |
| GET    | http://localhost:3001/assets/:id                   | user    |
| GET    | http://localhost:3001/assets/:id/status            | user    |
| GET    | http://localhost:3001/assets/:id/health            | user    |
| PATCH  | http://localhost:3001/assets/:id/health/:newHealth | user    |
| PATCH  | http://localhost:3001/assets/:id/status/:newStatus | user    |
| PUT    | http://localhost:3001/assets/:id                   | manager |
| DELETE | http://localhost:3001/assets/:id                   | manager |

### Units

| Method | URL                                                    | Role    |
| ------ | ------------------------------------------------------ | ------- |
| POST   | http://localhost:3001/units                            | manager |
| GET    | http://localhost:3001/units                            | manager |
| GET    | http://localhost:3001/units/:id                        | manager |
| PATCH  | http://localhost:3001/units/:id/assets/add/:assetId    | manager |
| PATCH  | http://localhost:3001/units/:id/assets/remove/:assetId | manager |
| PUT    | http://localhost:3001/units/:id                        | manager |
| DELETE | http://localhost:3001/units/:id                        | manager |

### Companies

| Method | URL                                                              | Role    |
| ------ | ---------------------------------------------------------------- | ------- |
| POST   | http://localhost:3001/companies                                  | admin   |
| GET    | http://localhost:3001/companies                                  | admin   |
| GET    | http://localhost:3001/companies/:id                              | admin   |
| GET    | http://localhost:3001/companies/:id/employees                    | manager |
| GET    | http://localhost:3001/companies/:id/assets                       | manager |
| GET    | http://localhost:3001/companies/:id/units                        | manager |
| PATCH  | http://localhost:3001/companies/:id/employees/add/:employeeId    | manager |
| PATCH  | http://localhost:3001/companies/:id/employees/remove/:employeeId | manager |
| PATCH  | http://localhost:3001/companies/:id/assets/add/:assetId          | manager |
| PATCH  | http://localhost:3001/companies/:id/assets/remove/:assetId       | manager |
| PATCH  | http://localhost:3001/companies/:id/units/add/:unitId            | manager |
| PATCH  | http://localhost:3001/companies/:id/units/remove/:unitId         | manager |
| PUT    | http://localhost:3001/companies/:id                              | admin   |
| DELETE | http://localhost:3001/companies/:id                              | admin   |

## Running the Application Locally

Make sure you have Node, Docker and docker-compose installed. Then access the root directory of the project through the terminal and execute the following commands.

- Install the dependencies:

```
npm i
```
- To run the application:

```
npm start
```

- To install the docker containers:

```
npm run compose:up
```

- To populate the database:

```
npm run db:seed
```

- To remove the docker containers when you are done:

```
npm run compose:down
```

Now you can test the application with a client of your liking. Login with email and password of one of the users below and generate a token for testing. Use the POST /users/login route with a body containing the login info.

| User           | Email                      | Password           | Role    |
| -------------- | -------------------------- | ------------------ | ------- |
| Juvenal        | juvenal@tractian.com       | data-grandmaster   | admin   |
| João das Neves | joao@freiossupremos.com    | sabe-nada          | user    |
| Emerson        | emerson@freiossupremos.com | emersinho-gerente  | manager |
| Roberta        | roberta@freiossupremos.com | robertinha-gerente | manager |

## Final Observations

I am aware of many things I could have done to make this API a lot better, improving its maintainability and integrity, but some of these things would have to be implemented more carefully in order to avoid unnecessary complexity and dependency cycles. Unfortunately, there was not enough time. I listed some of those things below. <br/>
**Please, note that I actually have the knowledge on how to implement most of these features.**

### MongoDB Associations and Database Integrity

It is necessary to make verifications during database manipulation to maintain its integrity and organization. <br/>
In the current state, users can add non-existing ids as references for association, and it would go through without any resistance, as long as they are valid instances of the MongoDB ObjectId. <br/>
The same goes for documents deletion. If a deleted document is referenced by another entity, this entity will still make reference to it. It would be ideal to completely disassociate it from other documents.

### Archive Search

It's possible to create a router and requests for searching deleted documents. It would be even easier than it was doing it for the main database entities, as there would be very little or no manipulation whatsoever.

### User Company Matching

Users should be able to only create and manipulate documents of their own companies. As it is now, a manager of company A could create an asset or unit assigning company B as owner. A user of company C could change status and health from assets of company A. And so on.<br/>
The solution is quite simple. All users carry the the id of the companies they work for. The company id, as well as the user's id and role are stored as payload in the token when logged in, so its only necessary to extract them upon authentication, store them in the request headers and send it forward. After that, a couple 'ifs' on each route would be enough to check the user's company and grant or deny permission based on what they are trying to do. Having this data available would even make it unnecessary to pass the company id through the request route. <br/>
With more time available, I'd consider this to be an easy thing to implement and to be of great value to the API and database integrity.

### Clean Code / Clean Architecture

This was considered a diferential for this challenge. I did some research and started trying to implement it, but it got confusing and messy very quickly. For this reason I decided to stick to what I know. <br/>
As Uncle Bob says himself in his books, this is not meant for new developers.
