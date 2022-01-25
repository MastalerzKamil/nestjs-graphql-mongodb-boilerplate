
## Description

MongoDB CRUD boilerplate to GraphQL API in Nest.JS

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Example API calls

```javascript
// Creating a movie that returns id
mutation {
  createMovie(createMovieInput: {
    title: "Hunger Games",
    description: "Lorem Ipsum der mar",
      year: 2001
  }) {id}
}

// Getting all movies
query {
  movies {
    id
    title
    description
  }
}

// removing mobie by id
mutation {
  removeMovie(id: "61edbd1055cd5f28799f45ec") {id}
}

// update movie by id
mutation {
  updateMovie(updateMovieInput: {
    id: "61edbd1f55cd5f28799f45f0",
      title: "Hobbit",
      description: "Lorem Ipsum der mar",
      year: 2012
  }) {id}
}
```

## License

Nest is [MIT licensed](LICENSE).
