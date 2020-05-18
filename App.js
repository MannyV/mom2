import React from 'react';
import Main from './components/MainComponent';
import { StyleSheet, Text, View } from 'react-native';
import { MDCalendar } from './components/CalendarComponent'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <MDCalendar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
