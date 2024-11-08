
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import { useSettings } from '../SettingsContext'; 

const SettingsScreen = () => {
  const { theme, setTheme, fontSize, setFontSize, fontColor, setFontColor } = useSettings();

  return (
    <View style={[styles.container, theme === 'dark' ? styles.darkBackground : styles.lightBackground]}>
      <Text style={styles.title}>Settings</Text>
      
      <Text style={styles.label}>Theme</Text>
      <Picker
        selectedValue={theme}
        onValueChange={(itemValue) => setTheme(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Light" value="light" />
        <Picker.Item label="Dark" value="dark" />
      </Picker>

      <Text style={styles.label}>Font Size</Text>
      <Picker
        selectedValue={fontSize}
        onValueChange={(itemValue) => setFontSize(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Small" value="small" />
        <Picker.Item label="Medium" value="medium" />
        <Picker.Item label="Large" value="large" />
      </Picker>

      <Text style={styles.label}>Font Color</Text>
      <Picker
        selectedValue={fontColor}
        onValueChange={(itemValue) => setFontColor(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Black" value="#000000" />
        <Picker.Item label="Red" value="#FF0000" />
        <Picker.Item label="Blue" value="#0000FF" />
        <Picker.Item label="Green" value="#008000" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  lightBackground: {
    backgroundColor: '#F0F0F0',
  },
  darkBackground: {
    backgroundColor: '#333333',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
  },
  picker: {
    height: 50,
    width: '100%',
  },
});

export default SettingsScreen;