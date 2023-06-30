import {SafeAreaView, StyleSheet, Text, View, Button, Alert } from 'react-native';
import { useState, useEffect } from 'react';

const Separator = () => <View style={styles.separator} />

const App = () => {

  const [ button1Pressed, setButton1Pressed ] = useState(0)
  const [ button2Pressed, setButton2Pressed ] = useState(0)
  const [ button3Pressed, setButton3Pressed ] = useState(0)
  const [ button4Pressed, setButton4Pressed ] = useState(0)

  const handleButtonPressed = (handleObject) => (event) => {}

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Calling Buttons Automatially!</Text>
        <Button title='Press Button 1' onPress={() => Alert.alert('You press the button 1')} />
        <Separator />
        <Button title='Press Button 2' onPress={() => Alert.alert('You press the button 2')} />
        <Separator />
        <View style={styles.fixToText}>
          <Button title='Press Button 3' onPress={() => Alert.alert('You press the button 3')} />
          <Button title='Press Button 4' onPress={() => Alert.alert('You press the button 4')} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;