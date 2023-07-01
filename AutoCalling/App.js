import { SafeAreaView, StyleSheet, Text, View, Button, Alert } from 'react-native';
import { useState, useEffect } from 'react';

const Separator = () => <View style={styles.separator} />

const App = () => {

  useEffect(() => {
    // Call the buttons automatically after a delay
    setTimeout(() => {
      handleButtonPress1();
      handleButtonPress2();
      handleButtonPress3();
      handleButtonPress4();
    }, 2000);
  }, []);

  const handleButtonPress1 = () => {
    console.log('You pressed Button 1');
  };

  const handleButtonPress2 = () => {
    console.log('You pressed Button 2');
  };

  const handleButtonPress3 = () => {
    console.log('You pressed Button 3');
  };

  const handleButtonPress4 = () => {
    console.log('You pressed Button 4');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Calling Buttons Automatically!</Text>
        <Button title="Press Button 1" onPress={handleButtonPress1} />
        <Separator />
        <Button title="Press Button 2" onPress={handleButtonPress2} />
        <Separator />
        <View style={styles.fixToText}>
          <Button title="Press Button 3" onPress={handleButtonPress3} />
          <Button title="Press Button 4" onPress={handleButtonPress4} />
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
