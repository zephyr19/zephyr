module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: 'Rick-5a869413887b46bea354efd60f80cad7',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: "zephyr's blog",
  domain: 'https://zephyr19.notion.site/Rick-5a869413887b46bea354efd60f80cad7',
  author: 'rick',

  // open graph metadata (optional)
  description: "zephyr's blog, recording front-end learning stuff",
  socialImageTitle: "zephyr's blog",
  socialImageSubtitle: "zephyr's blog",

  // social usernames (optional)
  twitter: '',
  github: 'zephyr19',
  linkedin: '',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: '👽',
  defaultPageCover: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=3600',
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: null,

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: {
    '/code': 'a9c97bf453d84b8ba84ebc17a3fccd53',
    '/blog': 'd3ef6c1cf8af456db624a4355da90e6b'
  }
}
