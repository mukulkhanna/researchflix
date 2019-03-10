var login = () => import('./login/')
var signup = () => import('./signup/')

export default [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup
  }
]
