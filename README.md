# Example configuration for Indiekit

This example configuration can be used as a starting point for configuring your own Indiekit server.

This example assumes that want to:

* host your content on GitHub
* publish your website using Jekyll
* syndicate content to a Mastodon server

## Configuration variables

The following strings in the [configuration file](indiekit.config.js) should be replaced with your own values (or saved as environment variables):

* `process.env.PUBLICATION_URL`
* `process.env.GITHUB_USERNAME`
* `process.env.GITHUB_REPOSITORY`
* `process.env.GITHUB_BRANCH`
* `process.env.MASTODON_SERVER`
* `process.env.MASTODON_USERNAME`

Some values shouldn’t be made public, or included in your configuration file. Instead, they should be saved as environment variables that can only be seen by you and your server:

* `GITHUB_TOKEN`
* `MASTODON_ACCESS_TOKEN`
* `MONGO_URL`
* `PASSWORD_SECRET`
* `SECRET`

## Starting your server

Once you have updated the configuration file with your own values, and ensured environment variables are present, you can start the server using the following command:

`npm start`

## Server deployment using Docker

If you want to deploy your server using [Docker](https://www.docker.com), the following files are provided as a starting point:

* `.dockerignore`
* `docker-compose.yml`
* `Dockerfile`

If you are using Docker Compose, the `MONGO_URL` environment variable does not need to be set. The following environment variables should be provided instead:

* `MONGO_INITDB_ROOT_USERNAME`
* `MONGO_INITDB_ROOT_PASSWORD`

## Server deployment using Railway

Click the button to use this configuration as the basis of a new service deployed with Railway:

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/gEboK6?referralCode=bCd1gL)
