/**
 * Import Indiekit and any plug-ins.
 */
 import {Indiekit} from '@indiekit/indiekit';
 import {GithubStore} from '@indiekit/store-github';
 import {JekyllPreset} from '@indiekit/preset-jekyll';
 import {TwitterSyndicator} from '@indiekit/syndicator-twitter';
 
 /**
  * Create a new Indiekit instance.
  */
 const indiekit = new Indiekit();
 
 /**
  * Create a content store on GitHub and set its options.
  * 
  * Other content stores are available.
  * See: https://getindiekit.com/plugins/#content-stores
  */
 const github = new GithubStore({
   user: 'YOUR_GITHUB_USERNAME',
   repo: 'YOUR_GITHUB_REPOSITORY',
   branch: 'YOUR_GITHUB_BRANCH',
   token: process.env.GITHUB_TOKEN
 });
 
 /**
  * Use the Jekyll publication preset.
  * 
  * Other publication presets are available.
  * See: https://getindiekit.com/plugins/#publication-presets
  */ 
 const jekyll = new JekyllPreset();
 
 /**
  * Create a Twitter syndicator and set options.
  * 
  * Get your Twitter API keys from https://developer.twitter.com/.
  * 
  * Multiple syndicators can be added.
  * See: https://getindiekit.com/plugins/#syndicators
  */
 const twitter = new TwitterSyndicator({
   checked: true,
   forced: true,
   user: 'YOUR_TWITTER_USERNAME',
   apiKey: process.env.TWITTER_API_KEY,
   apiKeySecret: process.env.TWITTER_API_KEY_SECRET,
   accessToken: process.env.TWITTER_ACCESS_TOKEN,
   accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
 });
 
 /**
  * Customise post types.
  * 
  * Publication presets provide default values, but these can be overridden. 
  * See: https://getindiekit.com/docs/post-types/
  * 
  * Use placeholder tokens to customise file paths and URLS.
  * See: https://getindiekit.com/docs/post-types/#creating-custom-paths-and-urls
  */ 
 const postTypes = [{
   type: 'note',
   name: 'Note',
   post: {
     path: '_notes/{yyyy}-{MM}-{dd}-{slug}.md',
     url: 'notes/{yyyy}/{MM}/{dd}/{slug}',
   },
 }];
 
 /**
  * Set application options.
  * 
  * These values are used to configure application behaviour.
  * See: https://getindiekit.com/docs/options/#application
  */ 
 indiekit.set('application.mongodbUrl', process.env.MONGODB_URL)
 
 /**
  * Set publication options.
  * 
  * These values are used to configure application behaviour.
  * See: https://getindiekit.com/docs/options/#publication
  */ 
 indiekit.set('publication.me', 'YOUR_WEBSITE_URL');
 indiekit.set('publication.postTypes', postTypes);
 indiekit.set('publication.preset', jekyll);
 indiekit.set('publication.store', github);
 indiekit.set('publication.syndicationTargets', [
   twitter
 ]);
 
 /**
  * Create the server.
  * 
  * Initiate and export the function to run when the server starts.
  */ 
 const server = indiekit.server();
 
 export default server;
 