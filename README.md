# Example configuration for Indiekit

This example configuration can be used as a starting point for configuring your own Indiekit server.

This example assumes that want to:

* host your content on GitHub
* publish your website using Jekyll
* syndicate content to a Mastodon server

## Configuration variables

Replace the following strings in the [configuration file](indiekit.config.js) with your own values:

* `WEBSITE_URL`
* `GITHUB_USERNAME`
* `GITHUB_REPOSITORY`
* `GITHUB_BRANCH`
* `MASTODON_SERVER`
* `MASTODON_USERNAME`

Some values shouldn’t be made public. Instead, they should be saved as environment variables that can only be seen by your server:

* `GITHUB_TOKEN`
* `MASTODON_ACCESS_TOKEN`
* `MONGODB_URL`

## Starting your server

Once you have updated the configuration file with your own values, and ensured environment variables are present, you can start the server using the following command:

`npm start`
