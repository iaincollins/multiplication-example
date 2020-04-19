# README

## About

This repository starts from stratch with a simple static React app created with Next.js.

The reasons for using this over the provided example are:

* Less boilerplate
* Less dependancies (both number and total size in MB)
* More conventional environment (eg development environment on port 3000)
* Automatic optimization and tree shaking
* Zero configuration

## Getting Started

To run this example in development mode (eg with hot reloading) use:

  npm run dev

To run with a webserver in production mode, use:

    npm run build
    npm run start

You can also use `npm run export` to generate static files to the `out` directory.

## Notes

There are no unit tests provided with this example. Most typically in a real React project you might find Unit tests for component written in Jest and Enzyme (and libraries like Mocha, Chai, Supertest in a Node.js project).

For this example, the acceptance criteria couldn't be meaningfully verified with Unit tests and would need UAT tests to connfirm in browser is as expected, which would require significant investiment in test environment configuration and has not been attempted.
