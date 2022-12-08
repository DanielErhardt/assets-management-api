# TRACTIAN Challenge

## Tools

Tools

## Architecture

### Model Service Controller (MSC)

Let's put it this way. Think of the MVC architecture. Now insert a Service layer that will be responsible for enforcing the company's business rules. We now have an architecture known as MVCS. Well, MVCS is used in Full Stack applications and this is a Back-End api, so we have to get rid of the V, or the View part. Rearrange the letters and we are left with MSC: A Back-End focused architecture, that separates the layers in Controller, Service and Model. <br/>
The Controller layer is responsible for receiving the requests, extracting the

### Authentication

### Strict Data Input Validation

### Asynchronous Error Handling

### Database Abstraction

Normally I would build a layer of abstraction between the database and the rest of the API. I'd achieve this by implementing a Model for each entity, and have this Model communicate with the database, either directly or through an ORM. This architecture completely decouples the database from the API and would allow an easier refactoring, should a migration become necessary in the company. <br />
At TRACTIAN, that's not necessarily essential. They tend to prioritize agility over excessive planning. This means that spending more time developing an intrinsically immutable API would not always be a good thing. <br />
For this reason, I chose not to keep the Mongoose ORM encased in the Model layer. Instead, I used it to it's full extent, opting for it's tools for data validation and type inference over other external libraries.

## API Functionalities

### Documents Archiving

When a document is deleted from it's original collection it is then saved in a Archive collection, where it will no longer be available for consultation by common requests. This way, old data is not lost forever and can be consulted by the authorized users should it become necessary.

### Dabatase Entities Association

Descrever.

## Observations

### MongoDB Document Deletion

Quando um documento é excluído seria ideal fazer uma varredura no banco e remover as referências ao documento excluído, a fim de tentar manter o banco de dados limpo e organizado.

### Interface Segregation

Explicar que está faltando.

### Clean Architecture

Explicar porque não fiz.
