window.$docsify = {
  name: '<h4>谷雨</h4>',
  repo: '',
  loadSidebar: true,
  loadSidebar: './nav.md',
  themeColor: '#3F51B5',
  onlyCover: false,
  search: 'auto', // default
  search : [
    '/',            // => /README.md
    './README.md',       // => /guide.md
    '/get-started', // => /get-started.md
    '/zh-cn/',      // => /zh-cn/README.md
  ],

  // complete configuration parameters
  search: {
    maxAge: 86400000, // Expiration time, the default one day
    paths: [], // or 'auto'
    placeholder: 'Type to search',

    // Localization
    placeholder: {
      '/zh-cn/': '搜索',
      '/': 'Type to search'
    },

    noData: 'No Results!',

    // Localization
    noData: {
      '/zh-cn/': '找不到结果',
      '/': 'No Results'
    },

    // Headline depth, 1 - 6
    depth: 2,

    hideOtherSidebarContent: false, // whether or not to hide other sidebar content

    // To avoid search index collision
    // between multiple websites under the same domain
    namespace: 'website-1',

    // Use different indexes for path prefixes (namespaces).
    // NOTE: Only works in 'auto' mode.
    //
    // When initialiazing an index, we look for the first path from the sidebar.
    // If it matches the prefix from the list, we switch to the corresponding index.
    pathNamespaces: ['/zh-cn', '/ru-ru', '/ru-ru/v1'],

    // You can provide a regexp to match prefixes. In this case,
    // the matching substring will be used to identify the index
    pathNamespaces: /^(\/(zh-cn|ru-ru))?(\/(v1|v2))?/

  }


}