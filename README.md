
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

## API calls

```javascript
// Creating a movie that returns id
mutation {
  createMovie(createMovieInput: {
    title: "Hunger Games",
    description: "Lorem Ipsum der mar",
      year: 2001
  }) {id}
}
```

## License

Nest is [MIT licensed](LICENSE).
