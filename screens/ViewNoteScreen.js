
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSettings } from '../SettingsContext'; 

const ViewNoteScreen = ({ route, navigation }) => {
  const { note } = route.params;
  const { theme, fontColor, fontSize } = useSettings();

  return (
    <View style={[styles.container, theme === 'dark' ? styles.darkBackground : styles.lightBackground]}>
      <Text style={[styles.title, { color: fontColor, fontSize: fontSize === 'small' ? 20 : fontSize === 'medium' ? 24 : 28 }]}>{note.title}</Text>
      <Text style={[styles.content, { fontSize: fontSize === 'small' ? 14 : fontSize === 'medium' ? 16 : 18 }]}>
        {note.content}
      </Text>
      <Button title="Edit Note" onPress={() => navigation.navigate('Create/Edit Note', { note })} />
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
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    marginTop: 5,
  },
});

export default ViewNoteScreen;