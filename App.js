/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
// import type {Node} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

// import {
//   Colors,
// } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  const [name, setName] = useState('');

  function onChangeText(val) {
    setName(val);
  }

  return (
    <View style={styles.body}>
      <View style={styles.item}>
        <Text style={styles.text}>Please write your name</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          secureTextEntry
          // editable={false}
          // multiline
        />
      </View>

      <View>
        <Text> Your name is: {name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderColor: 'pink',
    borderRadius: 10,
    justifyContent: 'center',
  },

  text: {
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
    margin: 10,
    textTransform: 'uppercase',
  },

  item: {
    // backgroundColor: '#4ae1fa',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },

  input: {
    borderWidth: 1,
    width: '95%',
  },
});

export default App;
