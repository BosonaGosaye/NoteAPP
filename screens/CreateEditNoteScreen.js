
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSettings } from '../SettingsContext'; // Import the context

const CreateEditNoteScreen = ({ navigation, route }) => {
  const { note } = route.params || {};
  const [title, setTitle] = useState(note ? note.title : '');
  const [content, setContent] = useState(note ? note.content : '');
  const { theme, fontSize, fontColor } = useSettings();

  const handleSave = async () => {
    if (!title) {
      Alert.alert('Error', 'Title is required!');
      return;
    }

    const newNote = {
      id: note ? note.id : Date.now(),
      title,
      content,
      createdAt: new Date().toISOString(),
    };

    let notes = await AsyncStorage.getItem('notes');
    notes = notes ? JSON.parse(notes) : [];
    if (note) {
      notes = notes.map(n => (n.id === note.id ? newNote : n));
    } else {
      notes.push(newNote);
    }
    
    await AsyncStorage.setItem('notes', JSON.stringify(notes));
    navigation.goBack();
  };

  return (
    <View style={[styles.container, theme === 'dark' ? styles.darkBackground : styles.lightBackground]}>
      <Text style={[styles.label, { color: fontColor }]}>Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />
      <Text style={[styles.label, { color: fontColor }]}>Content</Text>
      <ScrollView style={styles.contentContainer}>
        <TextInput
          style={[styles.textArea, { color: fontColor, fontSize: fontSize === 'small' ? 14 : fontSize === 'medium' ? 16 : 18 }]}
          value={content}
          onChangeText={setContent}
          multiline
          scrollEnabled
          numberOfLines={5} // Adjust this to control the initial height of the TextInput
          textAlignVertical="top" // Align text to the top
        />
      </ScrollView>
      <Button title="Save Note" onPress={handleSave} />
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
  label: {
    marginBottom: 5,
    fontSize: 16,
  },
  input: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
  },
  textArea: {
    minHeight: 100, // Minimum height for the text area
    maxHeight: 200, // Maximum height for scrolling
    padding: 10,
  },
});

export default CreateEditNoteScreen;