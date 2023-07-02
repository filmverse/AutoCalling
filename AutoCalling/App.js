import React, { useEffect, useRef } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, Alert } from 'react-native';

const Separator = () => <View style={styles.separator} />;

const App = () => {
  const buttonRef1 = useRef(null);
  const buttonRef2 = useRef(null);
  const buttonRef3 = useRef(null);
  const buttonRef4 = useRef(null);

  // useEffect(() => {
  //   // Call the buttons automatically after a delay
  //   setTimeout(() => {
  //     handleButtonPress1();
  //     handleButtonPress2();
  //     handleButtonPress3();
  //     handleButtonPress4();
  //   }, 2000);
  // }, []);

  useEffect(() => {
    autoCallButtons();
  }, []);

  const handleButtonPress1 = () => {
    Alert.alert('You pressed Button 1');
    console.log('You pressed Button 1');
  };

  const handleButtonPress2 = () => {
    Alert.alert('You pressed Button 2');
    console.log('You pressed Button 2');
  };

  const handleButtonPress3 = () => {
    Alert.alert('You pressed Button 3');
    console.log('You pressed Button 3');
  };

  const handleButtonPress4 = () => {
    Alert.alert('You pressed Button 4');
    console.log('You pressed Button 4');
  };

  const autoCallButtons = () => {
    // Simulate button press after a delay
    setTimeout(() => {
      buttonRef1.current && buttonRef1.current.props.onPress();
    }, 1000);

    setTimeout(() => {
      buttonRef2.current && buttonRef2.current.props.onPress();
    }, 2000);

    setTimeout(() => {
      buttonRef3.current && buttonRef3.current.props.onPress();
    }, 4000);

    setTimeout(() => {
      buttonRef4.current && buttonRef4.current.props.onPress();
    }, 8000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Calling Buttons Automatically!</Text>
        <Button ref={buttonRef1} title="Press Button 1" onPress={handleButtonPress1} />
        <Separator />
        <Button ref={buttonRef2} title="Press Button 2" onPress={handleButtonPress2} />
        <Separator />
        <View style={styles.fixToText}>
          <Button ref={buttonRef3} title="Press Button 3" onPress={handleButtonPress3} />
          <Button ref={buttonRef4} title="Press Button 4" onPress={handleButtonPress4} />
        </View>
        <Separator />
        <Button title="Auto Call Buttons" onPress={autoCallButtons} />
      </View>
    </SafeAreaView>
  );
};

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
