var home = () => import('./home/')
var profile = () => import('./profile/')
var bookmarks = () => import('./bookmarks/')
var collections = () => import('./collections/')
var topic = () => import('./topic/')
var researchPaper = () => import('./researchPaper/')

export default [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/profile/:uid',
    name: 'profile',
    component: profile
  },
  {
    path: '/bookmarks/:pid',
    name: 'bookmarks',
    component: bookmarks
  },
  {
    path: '/collections/:pid',
    name: 'collections',
    component: collections
  },
  {
    path: '/topic/:tid',
    name: 'topic',
    component: topic
  },
  {
    path: '/paper/:pid',
    name: 'researchPaper',
    component: researchPaper
  }
]
