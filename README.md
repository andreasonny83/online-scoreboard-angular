# Online Scoreboard

You can run your local environment with Docker.

The client project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.

```sh
$ docker-compose build
```

To generate a docker image

Then, launch the containers with

```sh
$ docker-compose up
```

The client angular-cli project will be serverd from `http://0.0.0.0:4200/` and the server NodeJS app will listen on `http://0.0.0.0:3000/`.

Both apps will automatically reload if you change any of the source files.
