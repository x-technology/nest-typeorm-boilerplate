<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# nest-typeorm-boilerplate

You are looking at boilerplate which you can use to start developing your REST API much faster. Under the hood it uses [Nest](https://github.com/nestjs/nest) which is famous by its agnosticism principles. This is a great advantage of this framework, since you can use any technologies with it. But if the list of technologies listed bellow matches your needs (or you simply not sure), it could be a great idea to check your ideas using this boilerplate. It can save you a lot of time for initial configuration and research.   

## It was built online (and it's in progress)

This repository was built completely online, you can watch the videos here:

- Part I: https://www.youtube.com/watch?v=JhkwPVQ65p8 (Idea, installing Nest, setting up DB)
- _Part II: https://www.youtube.com/watch?v=qH-AlGOOY-o - Gonna happen at July, 16th, 10:00 CET_


It's a boilerplate for Nest.js with pre-configured typeorm module, migrations and seeders

## Features

### Core is Nest

First it has [Nest](https://github.com/nestjs/nest) under the hood which gives you a lot of possibilities to extend, modify, replace technologies and so on. It's super flexible.

Nest itself gives you a great way to build REST API. Following technologies solve the common problems which you face after starting developing of your app.

### Postgres as DBMS

In this repo you will find docker-compose file which allows you to run postgres as database. 

### TypeORM and generated CRUD endpoints

... TBD

### Migrations

... TBD

### Seeders

... TBD

### Integration tests for API endpoints

... TBD

## Examples

In this project you will find some modules which are here for example purposes. They demonstrate example how you can start REST API for an online shop. 

... TBC

Entities:

- products
  - name
  - description
  - price
- users
  - admins
  - buyers
- order
  - statuses
  - buyer

## Installation

```bash
$ npm install
```

## Running the app

```bash
# start database
$ docker-compose db

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

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
