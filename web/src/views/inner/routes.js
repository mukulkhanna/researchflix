var home = () => import('./home/')
var profile = () => import('./profile/')
var bookmarks = () => import('./bookmarks/')
var collections = () => import('./collections/')
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
    path: '/bookmarks',
    name: 'bookmarks',
    component: bookmarks
  },
  {
    path: '/collections',
    name: 'collections',
    component: collections
  },
  {
    path: '/paper/:pid',
    name: 'researchPaper',
    component: researchPaper
  }
]
