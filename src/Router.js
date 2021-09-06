import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from './pages/Welcome';
import MemberSign from './pages/MemberSign';
import MemberResult from './pages/MemberResult';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WelcomeScreen"
          component={Welcome}
          options={{headerShown: false}}></Stack.Screen>

        <Stack.Screen
          name="MemberSignScreen"
          component={MemberSign}
          options={{headerShown: false}}></Stack.Screen>

        <Stack.Screen
          name="MemberResultScreen"
          component={MemberResult}
          options={{headerShown: false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
