# Installation 

Prerequisites

- Node 14+ or Docker
- A site using Hugo or Jekyll, and hosted on Bitbucket, FTP, Gitea. GitHub or GitLab.

## With Node
1. Install Node 16 & NPM
    - Installation instructions for Linux may be found here: [NodeSource Node.js Binary Distributions](https://github.com/nodesource/distributions/blob/master/README.md)
2. Clone this repository.

    ```
    $ git clone https://github.com/getindiekit/example-config.git
    $ cd example-config
    ```

3. Install indiekit & any [plug ins](https://getindiekit.com/plugins/) you may be using.

    ```
    $ npm install @indiekit/indiekit
    $ npm install @indiekit/store-github # example if Github is used
    $ npm install @indiekit/preset-hugo # example if Hugo is used
    ```

4. Set up your configuration file (see below).

5. Start the server:

    ```
    $ node indiekit.config.js # or other configuration file
    ```

## Using Docker

1. Install Docker.
2. Clone this repository.

    ```
    $ git clone https://github.com/getindiekit/example-config.git
    $ cd example-config
    ```

4. Build the Docker image

    ```
    $ docker build --rm --pull -t "indiekit:latest" .
    ```

5. Set up your configuration file (see below).

6. Run a new container with the Docker image. 

- Use the volume switch (-v) to create a volume, mapping the location of your config file to /usr/src/app/config.
- Set the INDIEKIT_CONFIG environment variable as the name of your config file. 

    ```
    $ docker run -p 3000:3000/tcp -v /path/to/your/config:/usr/src/app/config -e INDIEKIT_CONFIG=name_of_your_config_file.js -e TZ=your_timezone indiekit:latest
    ```

# Example configuration for Indiekit

This [example configuration](config/indiekit-config.js) can be used as a starting point for your own configuration. This example assumes:

* hosting your content on GitHub
* publishing your website using Jekyll
* syndicating content to Twitter

## Configuration variables

Replace the following strings with your own values:

* `YOUR_GITHUB_USERNAME`
* `YOUR_GITHUB_REPOSITORY`
* `YOUR_GITHUB_BRANCH`
* `YOUR_TWITTER_USERNAME`
* `YOUR_WEBSITE_URL`

Some values shouldn’t be made public. Instead, they should be saved as environment variables that can only be seen by your server:

* `GITHUB_TOKEN`
* `TWITTER_API_KEY`
* `TWITTER_API_KEY_SECRET`
* `TWITTER_ACCESS_TOKEN`
* `TWITTER_ACCESS_TOKEN_SECRET`
* `MONGODB_URL`
