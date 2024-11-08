
import React from 'react';
import { Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SettingsProvider } from './SettingsContext'; 
import HomeScreen from './screens/HomeScreen';
import CreateEditNoteScreen from './screens/CreateEditNoteScreen';
import ViewNoteScreen from './screens/ViewNoteScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SettingsProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={({ navigation }) => ({
              headerRight: () => (
                <Button
                  onPress={() => navigation.navigate('Settings')}
                  title="..."
                  color="#000"
                />
              ),
            })}
          />
          <Stack.Screen 
            name="Create/Edit Note" 
            component={CreateEditNoteScreen} 
            options={({ navigation }) => ({
              headerRight: () => (
                <Button
                  onPress={() => navigation.navigate('Settings')}
                  title="..."
                  color="#000"
                />
              ),
            })}
          />
          <Stack.Screen 
            name="View Note" 
            component={ViewNoteScreen} 
            options={({ navigation }) => ({
              headerRight: () => (
                <Button
                  onPress={() => navigation.navigate('Settings')}
                  title="..."
                  color="#000"
                />
              ),
            })}
          />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SettingsProvider>
  );
};

export default App;