# Online Scoreboard

You can run your local environment with Docker.

The client project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.

```sh
$ docker-compose build
```

To generate a docker image

Then, launch the containers with

```sh
$ docker-compose up --remove-orphans
```

To terminate and kill all the containers, run:

```sh
docker-compose down
```

The client angular-cli project will be serverd from `http://0.0.0.0:4200/` and the server NodeJS app will listen on `http://0.0.0.0:3000/`.

Both apps will automatically reload if you change any of the source files.

## Development

## Server app Unit test

```sh
$ docker-compose run --rm server npm run test:watch
```

This will run Jest and will watch for file changes in the background

## Client app Unit test

```sh
$ docker-compose run --rm client npm run test:docker
```

This will run Jest and will watch for file changes in the background
