import {KeyboardAvoidingView} from 'react-native';
import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {dashboardRoutes} from '../constants/screens';
import Chat from '../screens/messages/Chat';
import Event from '../screens/schedule/Event';
import CompanyHome from '../screens/home/UserHome';
const Stack = createStackNavigator();

const ProtectedRoute = () => {
  const routes = [
    {
      name: dashboardRoutes.Home,
      component: CompanyHome,
    },
  ];
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <Stack.Navigator
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
        initialRouteName={dashboardRoutes.Home}>
        {routes.map(route => (
          <Stack.Screen
            key={route.name}
            name={route.name}
            component={route.component}
            options={{
              headerShown: false,
            }}
          />
        ))}
      </Stack.Navigator>
    </KeyboardAvoidingView>
  );
};

export default ProtectedRoute;
