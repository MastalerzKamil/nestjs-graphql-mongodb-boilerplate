
## Description

MongoDB CRUD boilerplate to GraphQL API in Nest.JS. API has been designed to Node 14.18.3

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

You can also use `docker compse`. Just use `docker compose up -d` and then go to `localhost:3000/graphql` in order to find playground to test API 

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
    characters: [
      { name: "character 1"},
      { name: "character 2"}
    ]
  }) {id}
}

// Getting all movies
query {
  movies {
    id
    title
    description
    characters {
      name
    }
  }
}

// Get movie by id
query {
  movie(id: "61f15ed82f643f99687e54e9") {
    id
    title
    description
    characters {
      name
    }
  }
}

// removing mobie by id
mutation {
  removeMovie(id: "61edbd1055cd5f28799f45ec") {id}
}

// update movie by id
mutation {
  updateMovie(updateMovieInput: {
    id: "61f15596a68d9e234afe6b92",
      title: "Hobbit",
      description: "Lorem Ipsum der mar",
      year: 2012
    characters: [{name: "Bilbo Baggins"}, {name: "Gandalf"}]
  }) {
    id
    title
    year
    characters {
      name
    }
  }
}
```

## License

Nest is [MIT licensed](LICENSE).
