import {SafeAreaView, StyleSheet, Text, View, Button, Alert } from 'react-native';

const Separator = () => <View style={styles.separator} />

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Calling Buttons Automatially!</Text>
        <Separator />
        <Button title='Press Button 1' onPress={() => Alert.alert('You press the button 1')} />
        <Button title='Press Button 2' onPress={() => Alert.alert('You press the button 2')} />
        <Separator />
        <Button title='Press Button 3' onPress={() => Alert.alert('You press the button 3')} />
        <Separator />
        <Button title='Press Button 4' onPress={() => Alert.alert('You press the button 4')} />
        <Separator />
        <View style={styles.fixToText}>
          <Button title='Press Button 5' onPress={() => Alert.alert('You press the button 5')} />
          <Button title='Press Button 6' onPress={() => Alert.alert('You press the button 6')} />
        </View>
        <Separator />
        <View style={styles.fixToText}>
          <Button title='Press Button 7' onPress={() => Alert.alert('You press the button 7')} />
          <Button title='Press Button 8' onPress={() => Alert.alert('You press the button 8')} />
        </View>
        <Separator />
        <View style={styles.fixToText}>
          <Button title='Press Button 9' onPress={() => Alert.alert('You press the button 9')} />
          <Button title='Press Button 10' onPress={() => Alert.alert('You press the button 10')} />
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
