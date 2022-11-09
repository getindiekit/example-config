const process = require("node:process");

/**
 * Customise post types.
 * 
 * Publication presets provide default values, but these can be overridden. 
 * See: https://getindiekit.com/configuration/post-types
 * 
 * Use placeholder tokens to customise file paths and URLS.
 * See: https://getindiekit.com/configuration/post-types#path-and-url-tokens
 */ 
const postTypes = [{
  type: "note",
  name: "Note",
  post: {
    path: "_notes/{yyyy}-{MM}-{dd}-{slug}.md",
    url: "notes/{yyyy}/{MM}/{dd}/{slug}",
  },
}];

module.exports = {
  /**
   * Set application options
   * 
   * These values are used to configure application behaviour.
   * See: https://getindiekit.com/configuration/#application
   */ 
  application: {
    mongodbUrl: process.env.MONGO_URL,
  },
  /**
   * Add plug-ins.
   * 
   * In this example we have chosen to use a publication preset for Jekyll,
   * save posts and media files to GitHub repository, and added a syndicator
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
   * Set publication options
   * 
   * These values are used to configure application behaviour.
   * See: https://getindiekit.com/configuration/#publication
   */ 
  publication: {
    me: "WEBSITE_URL",
    postTypes: postTypes,
  },
  /**
   * GitHub content store options.
   * 
   * Other content stores are available.
   * See: https://getindiekit.com/plugins/stores
   */
  "@indiekit/store-github": {
    user: "GITHUB_USERNAME",
    repo: "GITHUB_REPOSITORY",
    branch: "GITHUB_BRANCH",
    token: process.env.GITHUB_TOKEN
  },
  /**
   * Mastodon syndicator options.
   *
   * Multiple syndicators can be added.
   * See: https://getindiekit.com/plugins/syndicators
   */
  "@indiekit/syndicator-mastodon": {
    checked: true,
    forced: true,
    url: "MASTODON_SERVER",
    user: "MASTODON_USERNAME",
    accessToken: process.env.MASTODON_ACCESS_TOKEN
  },
};
