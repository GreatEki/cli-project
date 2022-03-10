/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
// import type {Node} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  // Button,
  // TouchableOpacity,
  // TouchableHighlight,
  Pressable,
  Alert,
  ToastAndroid,
} from 'react-native';

// import {
//   Colors,
// } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function onChangeText(val) {
    setName(val);
  }

  function onPressHandler() {
    if (name.length > 3) {
      setSubmitted(!submitted);
    } else {
      // ToastAndroid.show(
      //   'The name must be longer than 3 characters',
      //   ToastAndroid.LONG,
      // );
      ToastAndroid.showWithGravity(
        'The name must be longer than 3 characters',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
      // Alert.alert(
      //   'Warning',
      //   'The name must be longer than 3 characters',
      //   [
      //     {
      //       text: "Don't show again",
      //       onPress: () => console.warn("Don't show again pressed"),
      //     },
      //     {text: 'Cancel', onPress: () => console.warn('Cancel pressed')},
      //     {text: 'OK', onPress: () => console.warn('OK Pressed')},
      //   ],
      //   {cancelable: true, onDismiss: () => console.warn('Alert dismissed')},
      // );
    }
  }

  return (
    <View style={styles.body}>
      <View style={styles.item}>
        <Text style={styles.text}>Please write your name</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder={'eg John Doe'}
          // secureTextEntry
          // editable={false}
          // multiline
        />

        <Pressable
          onPress={onPressHandler}
          style={({pressed}) => [
            {backgroundColor: pressed ? '#dddddd' : '#00ff00'},
            styles.button,
          ]}
          hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
          android_ripple={{color: '#00f'}}>
          <Text style={styles.btnText}>
            {submitted ? 'Register' : 'Submitting'}
          </Text>
        </Pressable>

        {/* <TouchableHighlight
          onPress={onPressHandler}
          style={styles.button}
          activeOpacity={0.2}
          underlayColor="lime">
          <Text style={styles.btnText}>
            {submitted ? 'Register' : 'Submitting'}
          </Text>
        </TouchableHighlight> */}

        {/* <Button
          style={styles.button}
          title={submitted ? 'Register' : 'Submitting'}
          onPress={onPressHandler}
        /> */}
      </View>

      {submitted ? (
        <View>
          <Text> Your name is: {name}</Text>
        </View>
      ) : null}
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
    width: '90%',
  },

  input: {
    borderWidth: 1,
    width: '100%',
    marginBottom: 10,
  },
  button: {
    width: '100%',
    backgroundColor: 'green',
    padding: 10,
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
  },
});

export default App;
