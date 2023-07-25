const process = require("node:process");
require("dotenv").config();

module.exports = {
  /**
   * Application options
   *
   * These values are used to configure application behaviour.
   *
   * See: https://getindiekit.com/configuration/#application
   */
  application: {
    mongodbUrl: process.env.MONGO_URL,
    timeZone: process.env.TZ,
  },

  /**
   * Plug-ins
   *
   * In this example we have chosen to use a publication preset for Jekyll,
   * save posts and media files to a GitHub repository, and added a syndicator
   * to share posts on a Mastodon server.
   *
   * See: https://getindiekit.com/configuration/#plugins
   */
  plugins: [
    "@indiekit/preset-jekyll",
    "@indiekit/store-github",
    "@indiekit/syndicator-mastodon",
  ],

  /**
   * Publication options
   *
   * These values are used to configure application behaviour.
   *
   * See: https://getindiekit.com/configuration/#publication
   */
  publication: {
    me: process.env.PUBLICATION_URL,
  },

  /**
   * GitHub content store options
   *
   * Other content stores are available.
   *
   * See: https://getindiekit.com/plugins/stores
   */
  "@indiekit/store-github": {
    user: process.env.GITHUB_USER,
    repo: process.env.GITHUB_REPO,
    branch: process.env.GITHUB_BRANCH,
  },

  /**
   * Mastodon syndicator options
   *
   * Multiple syndicators can be added.
   *
   * See: https://getindiekit.com/plugins/syndicators
   */
  "@indiekit/syndicator-mastodon": {
    checked: true,
    url: process.env.MASTODON_URL,
    user: process.env.MASTODON_USER,
    accessToken: process.env.MASTODON_ACCESS_TOKEN,
  }
};