var home = () => import('./home/')
var profile = () => import('./profile/')
var bookmarks = () => import('./bookmarks/')
var researchPaper = () => import('./researchPaper/')

export default [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile
  },
  {
    path: '/bookmarks',
    name: 'bookmarks',
    component: bookmarks
  },
  {
    path: '/paper/:pid',
    name: 'researchPaper',
    component: researchPaper
  }
]
