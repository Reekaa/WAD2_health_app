import { Home, About, Register, Login, MainPage, CreateGoal, UpdateGoal, Achievements } from '../components';
// import Home from '../components/Home'
// import About from '../components/About'
// import Register from '../components/Register'
// import Login from '../components/Login'
// import MainPage from '../components/MainPage'
// import CreateGoal from '../components/CreateGoal'
// import UpdateGoal from '../components/UpdateGoal'
// import Achievements from '../components/Achievements'

const webRoute = [
  {
    path: '/',
    component: Home,
    label: 'Home',
    exact: true,
  },
  {
    path: '/about',
    component: About,
    label: 'About',
    exact: true,
  },
  {
    path: '/register',
    component: Register,
    label: 'Register',
  },
  {
    path: '/login',
    component: Login,
    label: 'Login',
  },
  {
    path: '/mainpage',
    component: MainPage,
    auth: true,
    label: 'MainPage',
  },
  {
    path: '/create',
    component: CreateGoal,
    auth: true,
    label: 'CreateGoal',
  },
  {
    path: '/update',
    component: UpdateGoal,
    auth: true,
    label: 'UpdateGoal',
  },
  {
    path: '/achievements',
    component: Achievements,
    auth: true,
    label: 'Achievements',
  },
];

export default webRoute;