/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
// import type {Node} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

// import {
//   Colors,
// } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  const [name, setName] = useState('');
  const [session, setSession] = useState({
    number: 5,
    title: 'React Native State',
  });
  const [current, setCurrent] = useState(false);

  function nameUpdater() {
    setName('Ekene');
    setSession({number: '6', title: 'Session Six, React Native Styling'});
    setCurrent(!current);
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}> Programming with {name} </Text>
      <Text> {current ? 'current session' : 'next session'} </Text>
      <Text style={styles.text}>Session No: {session.number} </Text>
      <Text style={styles.text}> Session Title: {session.title} </Text>
      <Button title="Update Name" onPress={nameUpdater} />
      {/* <Button
        title="Visit Youtube"
        onPress={() => {
          Linking.openURL('https://youtube.com/programmingwithmash');
        }}>
        {' '}
      </Button> */}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;
