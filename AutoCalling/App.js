import {SafeAreaView, StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Open up App.js to start working on your app!</Text>
        <Button title='Press Button 1' onPress={() => Alert.alert('You press the button 1')} />
        <Button title='Press Button 2' onPress={() => Alert.alert('You press the button 2')} />
        <Button title='Press Button 3' onPress={() => Alert.alert('You press the button 3')} />
        <Button title='Press Button 4' onPress={() => Alert.alert('You press the button 4')} />
        <Button title='Press Button 5' onPress={() => Alert.alert('You press the button 5')} />
        <Button title='Press Button 6' onPress={() => Alert.alert('You press the button 6')} />
        <Button title='Press Button 7' onPress={() => Alert.alert('You press the button 7')} />
        <Button title='Press Button 8' onPress={() => Alert.alert('You press the button 8')} />
        <Button title='Press Button 9' onPress={() => Alert.alert('You press the button 9')} />
        <Button title='Press Button 10' onPress={() => Alert.alert('You press the button 10')} />
      </View>
    </SafeAreaView>
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
