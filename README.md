# Where in the world

## a simple app to increase your knowledge of countries around the world

- JavaScript (Vue) framework: [Nuxt](https://v3.nuxtjs.org/)

- CSS framework: [tailwindcss](https://tailwindcss.com)

You can use this by downloading the repo and enter `npm install`, `npm generate` and `npm run dev` commands in your terminal.

### Features

- Search Through list of countries

- Sort by country alphabet and population

- Filter based on countries region

- Change website mode to dark and light

- See country details in its page

## Build using Docker

To make it easier for running the project in an isolated environment, I've provided a Dockerfile that
you can build and run locally.
In order to do so, please follow these commands:

`docker build -t alibaba/country-client .`

And then run using:

`docker run --rm -p 3000:3000 alibaba/country-client:latest`

Have a beautiful day
