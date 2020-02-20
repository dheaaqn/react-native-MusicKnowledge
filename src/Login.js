import { createAppContainer } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';

import Login from './pages/Login';

import Signup from './pages/Signup';


const LoginScreen = createStackNavigator({
  Login: Login,
  Signup: Signup,
},
  {
    initialRouteName: 'Login',
  });

export default createAppContainer(LoginScreen);