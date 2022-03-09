/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
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

  return (
    <View style={styles.body}>
      <Text style={styles.text}> Styled Text </Text>

      <View style={styles.viewWrapper}>
        <View style={styles.view1}>
          <Text style={styles.text}> 1 </Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.text}> 2 </Text>
        </View>
        <View style={styles.view3}>
          <Text style={styles.text}> 3 </Text>
        </View>
      </View>

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
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: 'pink',
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
    textTransform: 'uppercase',
  },
  button: {
    width: 200,
    height: 60,
  },
  viewWrapper: {
    flexDirection: 'row',
    borderColor: 'white',
    borderWidth: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view1: {
    width: 100,
    height: 100,
    backgroundColor: '#000fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    width: 100,
    height: 100,
    backgroundColor: 'gold',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
